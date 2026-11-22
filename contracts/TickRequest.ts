import { z } from "zod";
import { AgentId, Point } from "./_common";

export const VERSION = "1.0.0";

/** world → brain: the state of the world at one tick. */
export const schema = z.object({
  tick: z.int().min(0),
  worldId: z.string().min(1).max(32),
  agents: z.array(z.object({
    id: AgentId,
    at: Point,
    mood: z.enum(["calm", "curious", "spooked"]),
  })).max(12),
  haunts: z.array(z.object({ id: z.string().min(1), at: Point, intensity: z.number().min(0).max(10) })).max(4).optional(),
});

export type TickRequest = z.infer<typeof schema>;
