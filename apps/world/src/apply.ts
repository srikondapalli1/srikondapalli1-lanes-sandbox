import type { TickResponse } from "../../../contracts/TickResponse";

export interface Sprite { id: string; x: number; y: number; animMs: number }

/** world consumes TickResponse: moves sprites and schedules animations. */
export function applyTick(sprites: Sprite[], res: TickResponse): Sprite[] {
  return sprites.map((s) => {
    const act = res.actions.find((a) => a.agentId === s.id);
    if (!act) return s;
    if (act.holdMs > 1500) throw new Error(`animation budget exceeded: ${act.holdMs}ms`);
    return { ...s, ...(act.to ?? {}), animMs: act.holdMs };
  });
}
