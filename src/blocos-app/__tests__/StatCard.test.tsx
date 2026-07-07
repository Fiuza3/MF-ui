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

  it("renderiza o icon quando informado", () => {
    const { container } = render(
      <StatCard label="Receita" value="R$ 42.000" icon={<svg data-testid="icon" />} />,
    );

    expect(container.querySelector('[data-testid="icon"]')).toBeTruthy();
  });
});
