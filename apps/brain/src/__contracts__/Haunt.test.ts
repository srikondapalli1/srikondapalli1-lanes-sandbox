import { describe, expect, it } from "vitest";
import { fixturesOf } from "contract-lanes/test";
import type { Haunt } from "../../../../contracts/Haunt";
import { fearOf } from "../fear";

describe("brain consumes Haunt", () => {
  it.each(fixturesOf<Haunt>("Haunt").valid)("fear stays in 0..1 for fixture %#", (h) => {
    const f = fearOf(h);
    expect(f).toBeGreaterThanOrEqual(0);
    expect(f).toBeLessThanOrEqual(1);
  });
});
