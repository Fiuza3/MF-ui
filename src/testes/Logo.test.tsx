import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Logo } from "../componentes/Logo";

describe("Logo", () => {
  it("renderiza SVG com aria-label", () => {
    const { getByRole } = render(<Logo />);
    expect(getByRole("img", { name: "MF Desenvolvimento" })).toBeInTheDocument();
  });

  it("aceita tamanho customizado", () => {
    const { container } = render(<Logo tamanho={48} />);
    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("height", String(48 * (30 / 22)));
  });

  it("aceita cor customizada", () => {
    const { container } = render(<Logo cor="#FF0000" />);
    const texts = container.querySelectorAll("text");
    expect(texts[0]).toHaveAttribute("fill", "#FF0000");
  });
});
