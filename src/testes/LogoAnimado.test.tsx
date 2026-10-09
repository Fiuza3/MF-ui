import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { LogoAnimado } from "../componentes/LogoAnimado";

describe("LogoAnimado", () => {
  it("sem onClick renderiza um SVG sem role=button", () => {
    render(<LogoAnimado />);
    expect(screen.queryByRole("button")).toBeNull();
  });

  it("com onClick renderiza um botão com accessible name contendo label e brand name", () => {
    render(<LogoAnimado label="Ir para o topo" onClick={() => {}} />);
    expect(
      screen.getByRole("button", {
        name: /ir para o topo.*mf desenvolvimento/i,
      }),
    ).toBeInTheDocument();
  });

  it("nao esconde o logo no primeiro paint", () => {
    const { container } = render(<LogoAnimado />);
    const pecas = container.querySelectorAll("path");

    expect(pecas.length).toBeGreaterThan(0);
    expect(container.querySelector("text")).toBeNull();
    for (const peca of pecas) {
      expect(peca.getAttribute("opacity")).not.toBe("0");
      expect(/opacity:s*0s*(;|$)/.test(peca.getAttribute("style") ?? "")).toBe(false);
    }
  });

  it("com o rótulo padrão não repete a marca no nome acessível", () => {
    render(<LogoAnimado onClick={() => {}} />);

    expect(screen.getByRole("button")).toHaveAccessibleName("MF Desenvolvimento");
  });

  // O brilho de hover sem onClick sugeria clique num elemento que não é interativo.
  it("só brilha no hover quando é clicável", () => {
    const { container, rerender } = render(<LogoAnimado />);
    expect(container.innerHTML).not.toMatch(/hover:\[filter/);

    rerender(<LogoAnimado onClick={() => {}} />);
    expect(container.innerHTML).toMatch(/hover\/logo:\[filter/);
  });
});
