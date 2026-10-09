import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Logo } from "../componentes/Logo";
import { layoutBrand } from "../brand";

describe("Logo", () => {
  it("renderiza SVG com aria-label", () => {
    const { getByRole } = render(<Logo />);
    expect(getByRole("img", { name: "MF Desenvolvimento" })).toBeInTheDocument();
  });

  it("aceita tamanho customizado mantendo a escala do legado (1000 unidades/em)", () => {
    const { container } = render(<Logo tamanho={48} />);
    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("height", String((48 * layoutBrand("horizontal").viewBox.height) / 1000));
  });

  it("aceita cor customizada", () => {
    const { container } = render(<Logo cor="#FF0000" />);
    const paths = container.querySelectorAll("path");
    expect(paths[1]).toHaveAttribute("fill", "#FF0000");
  });

  it("colchetes ganham a opacidade padrão e a compacta", () => {
    const { container, rerender } = render(<Logo />);
    expect(container.querySelector("path")).toHaveAttribute("fill-opacity", "0.58");
    rerender(<Logo compacto />);
    expect(container.querySelector("path")).toHaveAttribute("fill-opacity", "0.28");
  });
});
