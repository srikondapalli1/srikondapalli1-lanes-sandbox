import { z } from "zod";
import { Point } from "./_common";

export const VERSION = "1.0.0";

/** crowd → world, brain: a haunting that scares nearby agents. */
export const schema = z.object({
  id: z.string().regex(/^h-[a-z0-9]{2,8}$/),
  at: Point,
  intensity: z.number().min(0).max(10),
  kind: z.enum(["whisper", "chill", "poltergeist"]),
  expiresAtTick: z.int().min(0),
});

export type Haunt = z.infer<typeof schema>;
