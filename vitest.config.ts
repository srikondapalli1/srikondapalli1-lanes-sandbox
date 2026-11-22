import { defineConfig } from "vitest/config";

// contract-lanes' test helpers load your TypeScript contracts through vite, so keep them inlined.
export default defineConfig({ test: { server: { deps: { inline: ["contract-lanes"] } } } });
