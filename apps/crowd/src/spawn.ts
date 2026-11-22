import type { Haunt } from "../../../contracts/Haunt";

/** crowd produces haunts. */
export function spawn(seed: number): Haunt {
  return { id: `h-${(seed % 9999).toString(36).padStart(2, "0")}`, at: { x: seed % 64, y: (seed * 7) % 64 }, intensity: (seed % 11) * 0.9, kind: "whisper", expiresAtTick: seed + 10 };
}
