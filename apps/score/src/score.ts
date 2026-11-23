import type { Scoreboard } from "../../../contracts/Scoreboard";
import type { TickResponse } from "../../../contracts/TickResponse";

const POINTS = { flee: 3, wait: 1, move: 0 } as const;

/** score turns one tick's actions into the fear table: points per agent, highest first, at most 12 rows. */
export function score(r: TickResponse): Scoreboard {
  const byAgent = new Map<string, number>();
  for (const a of r.actions) byAgent.set(a.agentId, (byAgent.get(a.agentId) ?? 0) + POINTS[a.kind]);
  const rows = [...byAgent].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).slice(0, 12)
    .map(([agentId, points], i) => ({ agentId, points, rank: i + 1 }));
  return { tick: r.tick, rows, ...(rows[0] ? { leader: rows[0].agentId } : {}) };
}
