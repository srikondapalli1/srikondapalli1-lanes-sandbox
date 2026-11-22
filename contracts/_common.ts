import { z } from "zod";

/** Shared building blocks. Contracts may import only zod and this file. */
export const AgentId = z.string().regex(/^a-[0-9]{1,4}$/);
export const Point = z.object({ x: z.int().min(0).max(63), y: z.int().min(0).max(63) });
