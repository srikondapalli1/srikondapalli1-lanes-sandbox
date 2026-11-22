import { describe, expect, it } from "vitest";
import { arbitraryOf, fc, fixturesOf } from "contract-lanes/test";
import type { Haunt } from "../../../../contracts/Haunt";
import { glyphOf } from "../haunts";

describe("world consumes Haunt", () => {
  it.each(fixturesOf<Haunt>("Haunt").valid)("renders fixture %#", (h) => {
    expect(glyphOf(h).length).toBeGreaterThan(0);
  });
  it("renders any generated Haunt", async () => {
    fc.assert(fc.property(await arbitraryOf<Haunt>("Haunt"), (h) => glyphOf(h).length > 0), { numRuns: 100 });
  });
});
