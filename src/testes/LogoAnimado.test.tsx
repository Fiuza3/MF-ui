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

  it("nao esconde o texto do logo no primeiro paint", () => {
    const { container } = render(<LogoAnimado />);
    const texto = container.querySelector("text");

    expect(texto).not.toBeNull();
    expect(texto?.getAttribute("opacity")).not.toBe("0");
    expect(/opacity:\s*0\s*(;|$)/.test(texto?.getAttribute("style") ?? "")).toBe(false);
  });
});
