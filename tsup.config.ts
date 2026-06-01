import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/tokens/index.ts", "src/primitivos/index.ts", "src/blocos/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  clean: true,
  external: ["react", "react-dom", "framer-motion"],
});
