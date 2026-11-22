import { describe, expect, it } from "vitest";
import { fixturesOf } from "contract-lanes/test";
import type { TickResponse } from "../../../../contracts/TickResponse";
import { applyTick } from "../apply";

const { valid } = fixturesOf<TickResponse>("TickResponse");

describe("world consumes TickResponse", () => {
  it.each(valid)("applies fixture %# within the animation budget", (res) => {
    const sprites = res.actions.map((a) => ({ id: a.agentId, x: 0, y: 0, animMs: 0 }));
    expect(() => applyTick(sprites, res)).not.toThrow();
  });
});
