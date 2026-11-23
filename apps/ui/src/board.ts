import type { Scoreboard } from "../../../contracts/Scoreboard";

/** ui renders the fear table as text, one line per agent. */
export function board(s: Scoreboard): string {
  const head = `tick ${s.tick}${s.leader ? ` · leader ${s.leader}` : ""}`;
  return [head, ...s.rows.map((r) => `${String(r.rank).padStart(2)}. ${r.agentId.padEnd(7)} ${"█".repeat(Math.min(r.points, 30))} ${r.points}`)].join("\n");
}
