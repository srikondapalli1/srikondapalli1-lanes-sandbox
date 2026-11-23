/** brain: how many ticks a spooked agent needs before it calms down, by haunt intensity. */
export const calmAfterTicks = (intensity: number) => Math.max(1, Math.ceil(intensity / 2));
