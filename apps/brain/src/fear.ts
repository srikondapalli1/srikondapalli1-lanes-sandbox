import type { Haunt } from "../../../contracts/Haunt";

/** How scary a haunt is to the brain, 0..1. */
export const fearOf = (h: Haunt) => Math.min(1, h.intensity / 10) * (h.kind === "poltergeist" ? 1 : 0.6);
