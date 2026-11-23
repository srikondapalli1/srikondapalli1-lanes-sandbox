import { z } from "zod";
import { AgentId } from "./_common";

export const VERSION = "1.1.0";

/** score → ui: fear points per agent after a tick, highest first. */
export const schema = z.object({
  tick: z.int().min(0),
  rows: z.array(z.object({ agentId: AgentId, points: z.int().min(0), rank: z.int().min(1), streak: z.int().min(0).max(1_000_000).optional() })).max(12),
  leader: AgentId.optional(),
});

export type Scoreboard = z.infer<typeof schema>;
