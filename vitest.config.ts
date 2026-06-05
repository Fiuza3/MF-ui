import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    dedupe: ["react", "react-dom", "framer-motion"],
    alias: {
      "framer-motion": path.resolve("./node_modules/framer-motion"),
      react: path.resolve("./node_modules/react"),
      "react-dom": path.resolve("./node_modules/react-dom"),
    },
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./src/testes/setup.ts"],
    globals: true,
    typecheck: {
      tsconfig: "./tsconfig.test.json",
    },
  },
});
