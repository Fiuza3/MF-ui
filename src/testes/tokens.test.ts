import { describe, expect, it } from "vitest";
import { cores } from "../tokens/cores";
import { familias, pesos } from "../tokens/tipografia";

const HEX = /^#[0-9A-Fa-f]{6}$/;

describe("cores", () => {
  it("todos os tokens são strings hex de 6 dígitos", () => {
    for (const [token, valor] of Object.entries(cores)) {
      if (!valor.startsWith("rgba")) {
        expect(valor, `${token} deve ser hex`).toMatch(HEX);
      }
    }
  });

  it("accent é #3DF2E0", () => {
    expect(cores.accent).toBe("#3DF2E0");
  });

  it("fundo é #0B0F14", () => {
    expect(cores.fundo).toBe("#0B0F14");
  });
});

describe("tipografia", () => {
  it("familias.sans existe", () => {
    expect(familias.sans).toContain("system-ui");
  });

  it("familias.mono existe", () => {
    expect(familias.mono).toContain("monospace");
  });

  it("pesos.bold é 700", () => {
    expect(pesos.bold).toBe(700);
  });
});
