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

    expect(screen.getByRole("navigation", { name: "Trilha de navegação" })).toBeTruthy();
    expect(screen.getByText("Início")).toBeTruthy();
  });

  it("renderiza actions quando informadas", () => {
    render(<PageHeader title="Clientes" actions={<button type="button">Novo cliente</button>} />);

    expect(screen.getByRole("button", { name: "Novo cliente" })).toBeTruthy();
  });

  // Em 375px, duas ou três ações lado a lado sem quebra empurravam a página para o lado.
  it("ações quebram linha em vez de estourar a largura", () => {
    const { container } = render(
      <PageHeader title="Clientes" actions={<button type="button">Novo cliente</button>} />,
    );
    const acoes = container.querySelector("[data-slot=page-header-actions]");

    expect(acoes?.className).toMatch(/(^|\s)flex-wrap(\s|$)/);
  });

  it("no celular o título quebra linha; só trunca a partir de sm", () => {
    render(<PageHeader title="Clientes" />);
    const titulo = screen.getByRole("heading", { name: "Clientes" });

    expect(titulo.className).not.toMatch(/(^|\s)truncate(\s|$)/);
    expect(titulo.className).toMatch(/(^|\s)sm:truncate(\s|$)/);
  });

  it("link do breadcrumb tem anel de foco de teclado", () => {
    render(
      <PageHeader
        title="Clientes"
        breadcrumb={[{ label: "Início", href: "/" }, { label: "Clientes" }]}
      />,
    );

    expect(screen.getByRole("link", { name: "Início" }).className).toMatch(/focus-visible:ring/);
  });
});
