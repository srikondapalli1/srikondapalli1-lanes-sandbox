import type { SpawnRequest } from "../../../contracts/SpawnRequest";

/** world asks crowd for a haunt near the busiest point every 8 ticks. */
export function requestSpawn(tick: number, busiest: { x: number; y: number }): SpawnRequest | undefined {
  if (tick % 8 !== 0) return undefined;
  return { tick, seed: (tick * 2654435761) % 1_000_000, near: { x: busiest.x, y: busiest.y } };
}
