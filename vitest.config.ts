import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    dedupe: ["react", "react-dom", "framer-motion"],
    alias: {
      "framer-motion": path.resolve(
        "./node_modules/.pnpm/framer-motion@12.40.0_react_86809e77762345432b3ebc8777def9a2/node_modules/framer-motion",
      ),
      react: path.resolve("./node_modules/.pnpm/react@19.2.6/node_modules/react"),
      "react-dom": path.resolve("./node_modules/.pnpm/react-dom@19.2.6_react@19.2.6/node_modules/react-dom"),
    },
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./src/testes/setup.ts"],
    globals: true,
  },
});
