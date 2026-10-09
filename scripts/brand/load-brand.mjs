import path from "node:path";

// runnerImport do Vite executa o TS do núcleo sem build nem dependência extra.
export async function loadBrand(root) {
  const vite = await import("vite");
  const loaded = await vite.runnerImport(path.resolve(root, "src/brand/index.ts"), {
    root,
    configFile: false,
  });
  return loaded.module;
}
