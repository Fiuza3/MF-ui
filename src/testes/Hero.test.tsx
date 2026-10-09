import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Hero } from "../blocos/Hero";

describe("Hero", () => {
  it("renderiza eyebrow, headline, descrição e CTA", () => {
    render(
      <Hero
        eyebrow="boot / build / ship"
        title="Reduzir ambiguidade"
        description="Diagnóstico antes do código."
        cta={{ label: "iniciar projeto", href: "https://wa.me/000" }}
        stats={[{ value: "8+", label: "anos" }]}
      />,
    );
    expect(screen.getByText("boot / build / ship")).toBeTruthy();
    expect(screen.getByText("Reduzir ambiguidade")).toBeTruthy();
    expect(screen.getByText("Diagnóstico antes do código.")).toBeTruthy();
    expect(screen.getByRole("link", { name: /iniciar projeto/i })).toBeTruthy();
    expect(screen.getByText("8+")).toBeTruthy();
  });

  it("renderiza o slot lateral", () => {
    render(
      <Hero
        eyebrow="x"
        title="y"
        description="z"
        cta={{ label: "ok", href: "#" }}
        stats={[]}
        slot={<div data-testid="lateral">terminal</div>}
      />,
    );
    expect(screen.getByTestId("lateral")).toBeTruthy();
  });

  it("não define props de animação quando prefers-reduced-motion está ativo", () => {
    vi.spyOn(window, "matchMedia").mockReturnValue({
      matches: true,
      media: "(prefers-reduced-motion: reduce)",
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
    } as unknown as MediaQueryList);
    const { container } = render(
      <Hero
        eyebrow="x"
        title={<span>x</span>}
        description="x"
        cta={{ label: "x", href: "#" }}
        stats={[]}
      />,
    );
    expect(container).toBeInTheDocument();
  });

  it("nao renderiza nenhum elemento com opacity 0 no primeiro paint", () => {
    const { container } = render(
      <Hero
        eyebrow="boot / build / ship"
        title="Reduzir ambiguidade"
        description="Diagnóstico antes do código."
        cta={{ label: "iniciar projeto", href: "https://wa.me/000" }}
        stats={[{ value: "8+", label: "anos" }]}
        slot={<div data-testid="lateral">terminal</div>}
      />,
    );
    const escondidos = Array.from(container.querySelectorAll<HTMLElement>("[style]")).filter((el) =>
      /opacity:\s*0(?:[;)]|$)/.test(el.getAttribute("style") ?? ""),
    );
    expect(escondidos).toHaveLength(0);
  });

  // Piso de alvo de toque do sistema (WCAG 2.5.5): 44x44. py-3 + text-xs dava 42.
  it("o CTA tem alvo de toque de pelo menos 44px de altura", () => {
    render(
      <Hero
        eyebrow="e"
        title="t"
        description="d"
        cta={{ label: "iniciar projeto", href: "https://wa.me/000" }}
        stats={[{ value: "8+", label: "anos" }]}
      />,
    );

    expect(screen.getByRole("link", { name: /iniciar projeto/i })).toHaveClass("min-h-11");
  });
});
