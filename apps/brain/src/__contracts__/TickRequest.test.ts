import { describe, expect, it } from "vitest";
import { fixturesOf } from "contract-lanes/test";
import type { TickRequest } from "../../../../contracts/TickRequest";
import { tick } from "../tick";

const { valid } = fixturesOf<TickRequest>("TickRequest");

describe("brain consumes TickRequest", () => {
  it.each(valid)("answers every agent in fixture %#", (req) => {
    const res = tick(req);
    expect(res.tick).toBe(req.tick);
    expect(res.actions.map((a) => a.agentId)).toEqual(req.agents.map((a) => a.id));
  });
});
