import type { Scoreboard } from "../../../contracts/Scoreboard";
import type { TickResponse } from "../../../contracts/TickResponse";

const POINTS = { flee: 3, wait: 1, move: 0 } as const;

/** ticks in a row each agent has been on the board (kept across calls; resets when an agent drops off). */
const streaks = new Map<string, number>();

/** score turns one tick's actions into the fear table: points per agent, highest first, at most 12 rows. */
export function score(r: TickResponse): Scoreboard {
  const byAgent = new Map<string, number>();
  for (const a of r.actions) byAgent.set(a.agentId, (byAgent.get(a.agentId) ?? 0) + POINTS[a.kind]);
  const rows = [...byAgent].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).slice(0, 12)
    .map(([agentId, fear], i) => ({ agentId, fear, rank: i + 1, streak: Math.min(1_000_000, (streaks.get(agentId) ?? 0) + 1) }));
  for (const id of [...streaks.keys()]) if (!rows.some((x) => x.agentId === id)) streaks.delete(id);
  for (const x of rows) streaks.set(x.agentId, x.streak);
  return { tick: r.tick, rows, ...(rows[0] ? { leader: rows[0].agentId } : {}) };
}
