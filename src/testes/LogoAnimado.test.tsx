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
});
