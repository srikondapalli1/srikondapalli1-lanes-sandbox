import { z } from "zod";
import { Point } from "./_common";

export const VERSION = "1.0.0";

/** world → crowd: ask for one haunt near a point, at a tick. */
export const schema = z.object({
  tick: z.int().min(0),
  seed: z.int().min(0).max(1_000_000),
  near: Point,
});

export type SpawnRequest = z.infer<typeof schema>;
