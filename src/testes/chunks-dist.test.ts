import { describe, it, expect } from "vitest";
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

// O AnimatedIcon é client-side (1,1 KB gzip). Se o esbuild o agrupar no
// mesmo chunk de Badge/Tooltip etc., o bundler do consumidor o carrega em toda
// rota que use qualquer um deles, mesmo sem nenhum ícone animado. A entrada
// própria em tsup.config.ts é o que mantém o chunk isolado: removê-la faz este
// teste falhar.
const DIST = join(process.cwd(), "dist");

function chunksDeCodigo(): { nome: string; fonte: string }[] {
  return readdirSync(DIST)
    .filter((nome) => nome.endsWith(".mjs"))
    .map((nome) => ({ nome, fonte: readFileSync(join(DIST, nome), "utf8") }));
}

// o esbuild marca cada módulo agrupado com "// src/<pasta>/<Arquivo>.tsx"
function modulosDe(fonte: string): string[] {
  return [...fonte.matchAll(/^\/\/ (src\/\S+\.tsx?)$/gm)].map((m) => m[1]);
}

describe("chunks do dist", () => {
  it("o AnimatedIcon fica num chunk só dele", () => {
    const comAnimatedIcon = chunksDeCodigo().filter((c) => c.fonte.includes("data-armed"));

    expect(comAnimatedIcon.length).toBeGreaterThan(0);
    for (const chunk of comAnimatedIcon) {
      expect(modulosDe(chunk.fonte), chunk.nome).toEqual(["src/primitivos/AnimatedIcon.tsx"]);
    }
  });
});
