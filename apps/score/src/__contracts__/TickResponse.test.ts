import { describe, expect, it } from "vitest";
import { fixturesOf } from "contract-lanes/test";
import type { TickResponse } from "../../../../contracts/TickResponse";
import { score } from "../score";

const { valid } = fixturesOf<TickResponse>("TickResponse");

describe("score consumes TickResponse", () => {
  it.each(valid)("ranks fixture %# from 1", (res) => {
    const s = score(res);
    expect(s.tick).toBe(res.tick);
    expect(s.rows.every((r, i) => r.rank === i + 1)).toBe(true);
  });
});
