import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { BrandMark } from "../componentes/BrandMark";
import { BrandMarkAnimated } from "../componentes/BrandMarkAnimated";

describe("BrandMark", () => {
  it("desenha com path e nunca com texto", () => {
    const { container } = render(<BrandMark />);
    expect(container.querySelectorAll("path").length).toBe(5);
    expect(container.querySelector("text")).toBeNull();
  });

  it("expõe aria-label e title", () => {
    const { getByRole, container } = render(<BrandMark title="Minha marca" />);
    expect(getByRole("img", { name: "Minha marca" })).toBeInTheDocument();
    expect(container.querySelector("title")?.textContent).toBe("Minha marca");
  });

  it("decorative esconde do leitor de tela", () => {
    const { container, queryByRole } = render(<BrandMark decorative />);
    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("aria-hidden", "true");
    expect(svg).not.toHaveAttribute("role");
    expect(svg).not.toHaveAttribute("aria-label");
    expect(container.querySelector("title")).toBeNull();
    expect(queryByRole("img")).toBeNull();
  });

  it("aplica height em número e em string CSS", () => {
    const { container, rerender } = render(<BrandMark height={40} />);
    expect(container.querySelector("svg")).toHaveAttribute("height", "40");
    rerender(<BrandMark height="2rem" />);
    expect(container.querySelector("svg")).toHaveStyle({ height: "2rem", width: "auto" });
  });

  it("tom ink usa o teal #0A6E6A nos colchetes", () => {
    const { container } = render(<BrandMark tone="ink" />);
    expect(container.innerHTML).toContain('fill="#0A6E6A"');
  });

  it("color livre substitui o tom e preserva a opacidade dos colchetes", () => {
    const { container } = render(<BrandMark color="#FF0000" bracketOpacity={0.3} />);
    const paths = container.querySelectorAll("path");
    expect(paths[1]).toHaveAttribute("fill", "#FF0000");
    expect(paths[0]).toHaveAttribute("fill-opacity", "0.3");
  });

  it("duas marcas solid-black na mesma página têm ids de máscara diferentes", () => {
    const { container } = render(
      <>
        <BrandMark variant="symbol-block" tone="solid-black" />
        <BrandMark variant="symbol-block" tone="solid-black" />
      </>,
    );
    const ids = Array.from(container.querySelectorAll("mask")).map((mask) => mask.id);
    expect(ids).toHaveLength(2);
    expect(ids[0]).not.toBe(ids[1]);
    for (const id of ids)
      expect(container.querySelector(`rect[mask="url(#${id})"]`)).not.toBeNull();
  });
});

describe("BrandMarkAnimated", () => {
  it("embute o CSS e as classes da animação", () => {
    const { container } = render(<BrandMarkAnimated animation="draw" />);
    const svg = container.querySelector("svg");
    expect(container.querySelector("style")?.textContent).toContain(".mf-brand");
    expect(svg).toHaveClass("mf-brand", "mf-brand--horizontal", "mf-brand--draw");
  });

  it("replayKey remonta o svg", () => {
    const { container, rerender } = render(<BrandMarkAnimated replayKey={1} />);
    const first = container.querySelector("svg");
    rerender(<BrandMarkAnimated replayKey={1} />);
    expect(container.querySelector("svg")).toBe(first);
    rerender(<BrandMarkAnimated replayKey={2} />);
    expect(container.querySelector("svg")).not.toBe(first);
  });
});
