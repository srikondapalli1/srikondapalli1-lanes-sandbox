import { z } from "zod";
import { AgentId, Point } from "./_common";

export const VERSION = "1.0.0";

/** brain → world: one action per agent. holdMs is how long the world animates it. */
export const schema = z.object({
  tick: z.int().min(0),
  actions: z.array(z.object({
    agentId: AgentId,
    kind: z.enum(["move", "wait", "flee"]),
    to: Point.optional(),
    holdMs: z.int().min(0).max(1500),
  })),
});

export type TickResponse = z.infer<typeof schema>;
