import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Hero } from "../blocos/Hero";

describe("Hero", () => {
  it("renderiza eyebrow, headline, descrição e CTA", () => {
    render(
      <Hero
        eyebrow="boot / build / ship"
        headline="Reduzir ambiguidade"
        descricao="Diagnóstico antes do código."
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

  it("renderiza o slotLateral", () => {
    render(
      <Hero
        eyebrow="x"
        headline="y"
        descricao="z"
        cta={{ label: "ok", href: "#" }}
        stats={[]}
        slotLateral={<div data-testid="lateral">terminal</div>}
      />,
    );
    expect(screen.getByTestId("lateral")).toBeTruthy();
  });
});
