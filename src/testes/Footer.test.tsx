import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Footer } from "../componentes/Footer";

describe("Footer", () => {
  it("renderiza a linha de CNPJ quando informado", () => {
    render(<Footer cnpj="65.019.152/0001-81" />);
    expect(screen.getByText("65.019.152/0001-81")).toBeDefined();
    expect(screen.getByText("cnpj")).toBeDefined();
  });

  it("nao renderiza a linha de CNPJ sem a prop", () => {
    render(<Footer email="dev@mf.com" />);
    expect(screen.queryByText("cnpj")).toBeNull();
  });

  it("mantem contato e localizacao junto com o CNPJ", () => {
    render(<Footer email="dev@mf.com" localizacao="BH, MG" cnpj="65.019.152/0001-81" />);
    expect(screen.getByText("dev@mf.com")).toBeDefined();
    expect(screen.getByText("BH, MG")).toBeDefined();
    expect(screen.getByText("65.019.152/0001-81")).toBeDefined();
  });
  // Trilhas `fr` têm mínimo `auto`: a marca d'água em 24vw (~880px em 1280) e o
  // e-mail sem ponto de quebra empurravam a coluna da direita para fora da tela.
  it("colunas podem encolher abaixo do conteúdo", () => {
    const { container } = render(<Footer email="contato@mfdesenvolvimento.online" />);
    const grade = container.querySelector("footer .grid");

    expect(grade?.className).toMatch(/lg:grid-cols-\[minmax\(0,/);
    for (const coluna of Array.from(grade?.children ?? [])) {
      expect(coluna.className.split(/\s+/)).toContain("min-w-0");
    }
  });

  it("marca d'água é SVG decorativo escalável pela largura da coluna", () => {
    const { container } = render(<Footer />);
    const marca = container.querySelector("svg[aria-hidden=true]");

    expect(marca?.getAttribute("viewBox")).toBeTruthy();
    expect(marca?.getAttribute("focusable")).toBe("false");
    expect(marca?.getAttribute("class")).toMatch(/w-full/);
  });

  it("a marca d'água não é texto no DOM fora de um svg aria-hidden", () => {
    const { container } = render(<Footer />);
    const fora = [...container.querySelectorAll("*")].filter(
      (el) =>
        [...el.childNodes].some(
          (n) => n.nodeType === Node.TEXT_NODE && n.textContent?.includes("<MF/>"),
        ) && !el.closest("svg[aria-hidden=true]"),
    );

    expect(fora).toEqual([]);
    expect(container.querySelector("svg[aria-hidden=true] text")?.textContent).toBe("<MF/>");
  });

  it("e-mail longo pode quebrar em vez de alargar a coluna", () => {
    render(<Footer email="contato@mfdesenvolvimento.online" />);

    expect(
      screen.getByRole("link", { name: "contato@mfdesenvolvimento.online" }).className,
    ).toMatch(/break-all|\[overflow-wrap:anywhere\]/);
  });

  it("rótulos de terminal têm padrão e podem ser trocados", () => {
    const { rerender } = render(<Footer email="a@b.co" localizacao="BH" />);
    expect(screen.getByText("runtime summary")).toBeInTheDocument();
    expect(screen.getByText("location")).toBeInTheDocument();

    rerender(
      <Footer
        email="a@b.co"
        localizacao="BH"
        rotulos={{ resumo: "resumo", local: "local", contato: "contato", saida: "fim" }}
      />,
    );
    expect(screen.getByText("resumo")).toBeInTheDocument();
    expect(screen.getByText("local")).toBeInTheDocument();
    expect(screen.getByText("fim")).toBeInTheDocument();
    expect(screen.queryByText("runtime summary")).toBeNull();
  });

  // Piso de alvo de toque do sistema (WCAG 2.5.5): 44px. py-2 + text-xs dava ~34.
  it("os links do rodapé têm alvo de toque de pelo menos 44px de altura", () => {
    render(<Footer links={[{ href: "#a", label: "privacidade" }]} />);

    expect(screen.getByRole("link", { name: "privacidade" })).toHaveClass("min-h-11");
  });
});
