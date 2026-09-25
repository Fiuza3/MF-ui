import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { StatCard } from "../StatCard";

describe("StatCard", () => {
  it("renderiza label e valor", () => {
    render(<StatCard label="Números ativos" value="1.204" />);

    expect(screen.getByText("Números ativos")).toBeTruthy();
    expect(screen.getByText("1.204")).toBeTruthy();
  });

  it("renderiza o delta quando informado", () => {
    render(
      <StatCard
        label="Receita"
        value="R$ 42.000"
        delta={{ value: "+12% no mês", direction: "up" }}
      />,
    );

    expect(screen.getByText("+12% no mês")).toBeTruthy();
  });

  // WCAG 1.4.1: no tema claro, primary (laranja) e destructive (vermelho) quase
  // se confundem — a direção não pode depender só da cor.
  it("indica a direção do delta com seta, não só com cor", () => {
    const { container, rerender } = render(
      <StatCard label="Receita" value="R$ 42.000" delta={{ value: "+12%", direction: "up" }} />,
    );
    expect(container.querySelector("[data-direction=up] svg")).toBeTruthy();

    rerender(
      <StatCard label="Receita" value="R$ 42.000" delta={{ value: "-3%", direction: "down" }} />,
    );
    expect(container.querySelector("[data-direction=down] svg")).toBeTruthy();

    rerender(<StatCard label="Receita" value="R$ 42.000" delta={{ value: "estável" }} />);
    expect(container.querySelector("[data-direction=neutral] svg")).toBeNull();
  });

  it("renderiza o icon quando informado", () => {
    const { container } = render(
      <StatCard label="Receita" value="R$ 42.000" icon={<svg data-testid="icon" />} />,
    );

    expect(container.querySelector('[data-testid="icon"]')).toBeTruthy();
  });
});
