import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { PageHeader } from "../PageHeader";

describe("PageHeader", () => {
  it("renderiza o título", () => {
    render(<PageHeader title="Clientes" />);
    expect(screen.getByRole("heading", { name: "Clientes" })).toBeTruthy();
  });

  it("renderiza o breadcrumb quando informado", () => {
    render(
      <PageHeader
        title="Clientes"
        breadcrumb={[{ label: "Início", href: "/" }, { label: "Clientes" }]}
      />,
    );

    expect(screen.getByRole("navigation", { name: "Breadcrumb" })).toBeTruthy();
    expect(screen.getByText("Início")).toBeTruthy();
  });

  it("renderiza actions quando informadas", () => {
    render(
      <PageHeader title="Clientes" actions={<button type="button">Novo cliente</button>} />,
    );

    expect(screen.getByRole("button", { name: "Novo cliente" })).toBeTruthy();
  });
});
