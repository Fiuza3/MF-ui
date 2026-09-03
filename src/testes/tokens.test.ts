// @vitest-environment node
import { describe, expect, it } from "vitest";
import { chaves, css } from "./tokens-css";

describe("temas", () => {
  it("define o bloco escuro padrão e o bloco .light", () => {
    expect(css).toMatch(/:root\s*,\s*\.dark\s*\{/);
    expect(css).toMatch(/\.light\s*\{/);
  });

  it("escuro e claro têm exatamente as mesmas chaves de variável", () => {
    expect(chaves("claro")).toEqual(chaves("escuro"));
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
