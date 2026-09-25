// @vitest-environment node
import { describe, expect, it } from "vitest";
import { chaves, css, variaveis } from "./tokens-css";

describe("temas", () => {
  it("define o bloco escuro padrão e o bloco .light", () => {
    expect(css).toMatch(/:root\s*,\s*\.dark\s*\{/);
    expect(css).toMatch(/\.light\s*\{/);
  });

  it("escuro e claro têm exatamente as mesmas chaves de variável", () => {
    expect(chaves("claro")).toEqual(chaves("escuro"));
  });
});

// Preto a 30–50% foi calibrado para o fundo escuro; no creme do tema claro a
// mesma sombra vira mancha cinza embaixo de todo Card, Dialog e Dropdown.
describe("sombras", () => {
  it.each(["sm", "md", "lg"])("--shadow-%s vem do tema, com valor próprio no claro", (nivel) => {
    const escuro = variaveis("escuro")[`--elevation-${nivel}`];
    const claro = variaveis("claro")[`--elevation-${nivel}`];

    expect(escuro).toBeDefined();
    expect(claro).toBeDefined();
    expect(claro).not.toEqual(escuro);
    expect(css).toMatch(new RegExp(`--shadow-${nivel}:\\s*var\\(--elevation-${nivel}\\)`));
  });
});

describe("tokens de escala", () => {
  it.each(["--spacing-4", "--text-h1", "--shadow-md", "--radius-lg"])(
    "globals.css contém %s",
    (token) => {
      expect(css).toContain(token);
    },
  );
});
