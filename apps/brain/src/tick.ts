import type { TickRequest } from "../../../contracts/TickRequest";
import type { TickResponse } from "../../../contracts/TickResponse";

const clamp = (n: number) => Math.max(0, Math.min(63, n));

/** brain's handler: TickRequest → TickResponse (property-tested by `lanes check`). */
export function tick(req: TickRequest): TickResponse {
  return {
    tick: req.tick,
    actions: req.agents.map((a) => {
      if (a.mood === "spooked") {
        // Spooked agents freeze before fleeing.
        return { agentId: a.id, kind: "flee", to: { x: clamp(a.at.x - 2), y: clamp(a.at.y - 2) }, holdMs: 1800 };
      }
      if (a.mood === "curious") return { agentId: a.id, kind: "move", to: { x: clamp(a.at.x + 1), y: a.at.y }, holdMs: 400 };
      return { agentId: a.id, kind: "wait", holdMs: 250 };
    }),
  };
}
