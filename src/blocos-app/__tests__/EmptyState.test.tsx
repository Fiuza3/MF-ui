import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { EmptyState } from "../EmptyState";

describe("EmptyState", () => {
  it("renderiza title e description", () => {
    render(<EmptyState title="Nada por aqui" description="Tente ajustar os filtros" />);

    expect(screen.getByText("Nada por aqui")).toBeTruthy();
    expect(screen.getByText("Tente ajustar os filtros")).toBeTruthy();
  });

  it("renderiza a action quando informada", () => {
    render(
      <EmptyState
        title="Nada por aqui"
        action={<button type="button">Criar novo</button>}
      />,
    );

    expect(screen.getByRole("button", { name: "Criar novo" })).toBeTruthy();
  });

  it("expõe role=status para leitores de tela", () => {
    render(<EmptyState title="Nada por aqui" />);

    expect(screen.getByRole("status")).toBeTruthy();
  });
});
