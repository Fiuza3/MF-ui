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

  it("subir é positivo por padrão e usa a cor de sucesso", () => {
    const { container } = render(
      <StatCard label="Receita" value="R$ 1" delta={{ value: "+12%", direction: "up" }} />,
    );

    expect(container.querySelector("[data-direction=up]")?.className).toMatch(/text-success/);
  });

  // Churn e custo: subir é ruim. A seta segue o número, a cor segue o significado.
  it("tom separa o significado da direção para métrica invertida", () => {
    const { container } = render(
      <StatCard
        label="Churn"
        value="2,1%"
        delta={{ value: "+0,4pp", direction: "up", tom: "negativo" }}
      />,
    );
    const delta = container.querySelector("[data-direction=up]");

    expect(delta?.querySelector("svg")).toBeTruthy();
    expect(delta?.className).toMatch(/text-destructive/);
    expect(delta?.className).not.toMatch(/text-success/);
  });

  it("renderiza o icon quando informado", () => {
    const { container } = render(
      <StatCard label="Receita" value="R$ 42.000" icon={<svg data-testid="icon" />} />,
    );

    expect(container.querySelector('[data-testid="icon"]')).toBeTruthy();
  });
});
