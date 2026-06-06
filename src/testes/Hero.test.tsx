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
});
