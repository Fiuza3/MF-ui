import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { About } from "../blocos/About";

describe("About", () => {
  it("renderiza o titulo e o paragrafo", () => {
    render(
      <About
        eyebrow="// diagnóstico antes do código"
        titulo={<>Eu não começo pelo código.</>}
        paragrafos={[
          <p key="p1">
            Antes da primeira linha, eu entendo produto e regra de negócio.
          </p>,
        ]}
      />,
    );

    expect(screen.getByText("Eu não começo pelo código.")).toBeTruthy();
    expect(
      screen.getByText(
        "Antes da primeira linha, eu entendo produto e regra de negócio.",
      ),
    ).toBeTruthy();
  });

  it("renderiza o slotLateral quando fornecido", () => {
    render(
      <About
        eyebrow="x"
        titulo="Titulo"
        paragrafos={["Paragrafo"]}
        slotLateral={<div data-testid="lateral-about">terminal</div>}
      />,
    );
    expect(screen.getByTestId("lateral-about")).toBeTruthy();
  });
});
