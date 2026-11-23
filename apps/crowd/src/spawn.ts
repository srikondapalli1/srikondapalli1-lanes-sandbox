import type { Haunt } from "../../../contracts/Haunt";
import type { SpawnRequest } from "../../../contracts/SpawnRequest";

const KINDS = ["whisper", "chill", "poltergeist"] as const;

/** crowd answers a SpawnRequest with one haunt, drifting a little from the requested point. */
export function spawn(req: SpawnRequest): Haunt {
  const drift = req.seed % 3;
  return {
    id: `h-${(req.seed % 46656).toString(36).padStart(2, "0")}`,
    at: { x: req.near.x + drift, y: req.near.y },
    intensity: (req.seed % 11) * 0.9,
    kind: KINDS[req.seed % 3],
    expiresAtTick: req.tick + 10,
  };
}
