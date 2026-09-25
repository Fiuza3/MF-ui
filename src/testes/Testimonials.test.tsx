import { afterEach, describe, it, expect, vi } from "vitest";
import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Testimonials } from "../blocos/Testimonials";

const propsMinimas = {
  eyebrow: "// depoimentos",
  title: <>O que dizem quem já trabalhou comigo.</>,
  depoimentos: [
    {
      texto: "Marcus entregou a API fiscal em 6 semanas.",
      autor: "Rafael Duarte",
      papel: "CTO",
      empresa: "Contabil.io",
    },
  ],
};

describe("Testimonials", () => {
  it("renderiza o texto e o autor do depoimento", () => {
    render(<Testimonials {...propsMinimas} />);

    expect(screen.getByText("Marcus entregou a API fiscal em 6 semanas.")).toBeTruthy();
    expect(screen.getByText("Rafael Duarte")).toBeTruthy();
  });

  it("nao renderiza nenhum elemento com opacity 0 no primeiro paint", () => {
    const { container } = render(<Testimonials {...propsMinimas} />);
    const escondidos = Array.from(container.querySelectorAll<HTMLElement>("[style]")).filter((el) =>
      /opacity:\s*0(;|$)/.test(el.getAttribute("style") ?? ""),
    );
    expect(escondidos).toHaveLength(0);
  });

  const tres = {
    ...propsMinimas,
    depoimentos: [
      { texto: "Primeiro.", autor: "Ana" },
      { texto: "Segundo.", autor: "Bia" },
      { texto: "Terceiro.", autor: "Caio" },
    ],
  };

  function definirMovimentoReduzido(reduzido: boolean) {
    vi.stubGlobal("matchMedia", (query: string) => ({
      matches: reduzido && query.includes("prefers-reduced-motion"),
      media: query,
      addEventListener: () => {},
      removeEventListener: () => {},
      addListener: () => {},
      removeListener: () => {},
      dispatchEvent: () => false,
      onchange: null,
    }));
  }

  afterEach(() => {
    vi.useRealTimers();
    vi.unstubAllGlobals();
  });

  it("com movimento reduzido não troca sozinho, mas o usuário pode retomar", () => {
    vi.useFakeTimers();
    definirMovimentoReduzido(true);
    render(<Testimonials {...tres} />);

    act(() => vi.advanceTimersByTime(12_000));
    expect(screen.getByText("Primeiro.")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Retomar apresentação" })).toBeInTheDocument();
  });

  it("pausa quando o foco de teclado entra no carrossel", () => {
    vi.useFakeTimers();
    definirMovimentoReduzido(false);
    render(<Testimonials {...tres} />);

    act(() => screen.getByRole("button", { name: "Próximo depoimento" }).focus());
    act(() => vi.advanceTimersByTime(6_000));
    expect(screen.getByText("Primeiro.")).toBeInTheDocument();
  });

  // aria-live polite no autoplay anunciava um depoimento inteiro a cada 5s.
  it("só anuncia a troca quando a apresentação está parada", async () => {
    definirMovimentoReduzido(false);
    const user = userEvent.setup();
    const { container } = render(<Testimonials {...tres} />);
    const regiaoViva = () => container.querySelector("[aria-live]");

    expect(regiaoViva()).toHaveAttribute("aria-live", "off");
    await user.click(screen.getByRole("button", { name: "Pausar apresentação" }));
    expect(regiaoViva()).toHaveAttribute("aria-live", "polite");
  });

  it("indicadores são botões com aria-current, não abas sem painel", () => {
    render(<Testimonials {...tres} />);

    expect(screen.queryByRole("tab")).toBeNull();
    expect(screen.getByRole("button", { name: "Ir para depoimento 1" })).toHaveAttribute(
      "aria-current",
      "true",
    );
  });
});
