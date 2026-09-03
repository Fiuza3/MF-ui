import { describe, expect, it } from "vitest";
import { variaveis, type Tema } from "./tokens-css";

/**
 * Trava de acessibilidade: nenhum par de cor do tema pode entrar no `master`
 * abaixo do mínimo da WCAG 2.1 AA. Se um token de cor mudar e quebrar um par,
 * este teste falha antes do build — não depois, num relatório de auditoria.
 */

function luminancia(hex: string): number {
  const h = hex.replace("#", "");
  const full =
    h.length === 3 ? [...h].map((c) => c + c) : [h.slice(0, 2), h.slice(2, 4), h.slice(4, 6)];
  const [r, g, b] = full.map((par) => {
    const n = parseInt(par, 16) / 255;
    return n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function contraste(a: string, b: string): number {
  const la = luminancia(a);
  const lb = luminancia(b);
  const alto = Math.max(la, lb);
  const baixo = Math.min(la, lb);
  return (alto + 0.05) / (baixo + 0.05);
}

const TEXTO_AA = 4.5; // WCAG 2.1 SC 1.4.3 — texto normal
const UI_AA = 3.0; // WCAG 2.1 SC 1.4.11 — componentes e estados de foco

/** [frente, fundo, mínimo, descrição] */
const PARES: Array<[string, string, number, string]> = [
  ["--foreground", "--background", TEXTO_AA, "texto principal sobre o fundo"],
  ["--muted-foreground", "--background", TEXTO_AA, "texto secundário sobre o fundo"],
  ["--muted-foreground", "--card", TEXTO_AA, "texto secundário sobre card"],
  ["--card-foreground", "--card", TEXTO_AA, "texto sobre card"],
  ["--popover-foreground", "--popover", TEXTO_AA, "texto sobre popover"],
  ["--primary-foreground", "--primary", TEXTO_AA, "texto dentro do botão primário"],
  ["--primary", "--background", TEXTO_AA, "link/texto primário sobre o fundo"],
  ["--secondary-foreground", "--secondary", TEXTO_AA, "texto dentro do botão secundário"],
  ["--destructive-foreground", "--destructive", TEXTO_AA, "texto dentro do botão destrutivo"],
  ["--destructive", "--background", TEXTO_AA, "texto de erro sobre o fundo"],
  ["--ring", "--background", UI_AA, "anel de foco sobre o fundo"],
  ["--ring", "--card", UI_AA, "anel de foco sobre card"],
  ["--input", "--background", UI_AA, "borda de campo sobre o fundo"],
  ["--input", "--card", UI_AA, "borda de campo sobre card"],
];

describe.each<Tema>(["escuro", "claro"])("contraste — tema %s", (tema) => {
  const vars = variaveis(tema);

  it.each(PARES)("%s / %s ≥ %s — %s", (frente, fundo, minimo, _descricao) => {
    const a = vars[frente];
    const b = vars[fundo];

    expect(a, `${frente} não definido no tema ${tema}`).toBeDefined();
    expect(b, `${fundo} não definido no tema ${tema}`).toBeDefined();

    // Tokens que não são cor sólida (gradiente, cor com alfa) ficam de fora:
    // o contraste depende do que estiver atrás e precisa de verificação visual.
    if (!/^#[0-9a-fA-F]{3,8}$/.test(a) || !/^#[0-9a-fA-F]{3,8}$/.test(b)) return;

    const razao = contraste(a, b);
    expect(
      Number(razao.toFixed(2)),
      `${frente} (${a}) sobre ${fundo} (${b}) = ${razao.toFixed(2)}:1, mínimo ${minimo}:1`,
    ).toBeGreaterThanOrEqual(minimo);
  });
});
