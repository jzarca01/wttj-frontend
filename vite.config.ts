/// <reference types="vitest" />
/// <reference types="vite/client" />
import { ViteUserConfig, defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react() as ViteUserConfig["plugins"]],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/vitest.config.ts"],
  },
});
