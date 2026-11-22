import type { Haunt } from "../../../contracts/Haunt";

/** world renders haunts as glyphs. */
export const glyphOf = (h: Haunt) => ({ whisper: "~", chill: "*", poltergeist: "!" })[h.kind].repeat(1 + Math.floor(h.intensity / 4));
