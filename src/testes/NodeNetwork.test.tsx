import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render } from "@testing-library/react";
import { NodeNetwork } from "../componentes/NodeNetwork";

// jsdom nao implementa canvas: sem um contexto falso o componente sai cedo
// no `if (!context) return` e nenhum comportamento fica observavel.
const contextoFalso = {
  clearRect: vi.fn(),
  beginPath: vi.fn(),
  moveTo: vi.fn(),
  lineTo: vi.fn(),
  stroke: vi.fn(),
  arc: vi.fn(),
  fill: vi.fn(),
  setTransform: vi.fn(),
  strokeStyle: "",
  fillStyle: "",
  globalAlpha: 1,
  lineWidth: 1,
};

function definirMovimentoReduzido(reduzido: boolean) {
  window.matchMedia = ((query: string) => ({
    matches: reduzido && query.includes("prefers-reduced-motion"),
    media: query,
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
  })) as unknown as typeof window.matchMedia;
}

beforeEach(() => {
  vi.spyOn(HTMLCanvasElement.prototype, "getContext").mockReturnValue(
    contextoFalso as unknown as CanvasRenderingContext2D,
  );
  vi.spyOn(window, "requestAnimationFrame").mockReturnValue(1);
  definirMovimentoReduzido(false);
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe("NodeNetwork", () => {
  it("renderiza um canvas fora da arvore de acessibilidade", () => {
    const { container } = render(<NodeNetwork className="meu-fundo" />);
    const canvas = container.querySelector("canvas");

    expect(canvas).not.toBeNull();
    expect(canvas?.getAttribute("aria-hidden")).toBe("true");
    expect(canvas?.className).toContain("meu-fundo");
  });

  it("anima quando o movimento e permitido", () => {
    render(<NodeNetwork />);
    expect(window.requestAnimationFrame).toHaveBeenCalled();
  });

  it("nao inicia o loop de animacao com prefers-reduced-motion", () => {
    definirMovimentoReduzido(true);

    render(<NodeNetwork />);

    expect(window.requestAnimationFrame).not.toHaveBeenCalled();
  });

  it("ainda desenha um quadro estatico com movimento reduzido", () => {
    definirMovimentoReduzido(true);

    render(<NodeNetwork />);

    expect(contextoFalso.arc).toHaveBeenCalled();
  });
});
