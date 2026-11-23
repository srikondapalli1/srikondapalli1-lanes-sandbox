import { describe, expect, it } from "vitest";
import { fixturesOf } from "contract-lanes/test";
import type { Scoreboard } from "../../../../contracts/Scoreboard";
import { board } from "../board";

const { valid } = fixturesOf<Scoreboard>("Scoreboard");

describe("ui consumes Scoreboard", () => {
  it.each(valid)("renders fixture %# with one line per row", (s) => {
    const out = board(s);
    expect(out).not.toContain("undefined");
    expect(out.split("\n")).toHaveLength(1 + s.rows.length);
  });
});
