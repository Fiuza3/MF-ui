// @vitest-environment node
import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const css = readFileSync(
  fileURLToPath(new URL("../tokens/globals.css", import.meta.url)),
  "utf8",
);

function varsInBlock(selector: string): string[] {
  const re = new RegExp(`${selector.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*\\{([^}]*)\\}`, "m");
  const body = css.match(re)?.[1] ?? "";
  return [...body.matchAll(/(--[\w-]+):/g)].map((m) => m[1]).sort();
}

describe("temas", () => {
  it("define o bloco escuro padrão e o bloco .light", () => {
    expect(css).toMatch(/:root,\s*\.dark\s*\{/);
    expect(css).toMatch(/\.light\s*\{/);
  });

  it("escuro e claro têm exatamente as mesmas chaves de variável", () => {
    const escuro = varsInBlock(":root, .dark");
    const claro = varsInBlock(".light");
    expect(claro).toEqual(escuro);
  });
});
