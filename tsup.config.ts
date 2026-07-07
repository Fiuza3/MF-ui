import { rm } from "node:fs/promises";
import { defineConfig } from "tsup";
import { preserveDirectivesPlugin } from "esbuild-plugin-preserve-directives";

export default defineConfig({
  entry: ["src/index.ts", "src/tokens/index.ts", "src/primitivos/index.ts", "src/blocos/index.ts", "src/blocos-app/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  clean: true,
  external: ["react", "react-dom", "framer-motion"],
  // metafile melhora a precisão do preserveDirectivesPlugin ao mapear input -> output chunk
  metafile: true,
  esbuildPlugins: [
    preserveDirectivesPlugin({
      directives: ["use client", "use strict"],
      include: /\.(js|ts|jsx|tsx)$/,
      exclude: /node_modules/,
    }),
  ],
  esbuildOptions(options) {
    // write:false é exigido pelo preserveDirectivesPlugin (ele reescreve result.outputFiles)
    options.write = false;
  },
  async onSuccess() {
    // metafile-*.json é só artefato de análise do esbuild — não deve ir para dist/
    await rm("dist/metafile-cjs.json", { force: true });
    await rm("dist/metafile-esm.json", { force: true });
  },
});
