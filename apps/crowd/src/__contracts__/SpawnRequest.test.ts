import { describe, expect, it } from "vitest";
import { fixturesOf } from "contract-lanes/test";
import type { SpawnRequest } from "../../../../contracts/SpawnRequest";
import { spawn } from "../spawn";

const { valid } = fixturesOf<SpawnRequest>("SpawnRequest");

describe("crowd consumes SpawnRequest", () => {
  it.each(valid)("spawns a haunt that outlives fixture %#", (req) => {
    expect(spawn(req).expiresAtTick).toBeGreaterThan(req.tick);
  });
});
