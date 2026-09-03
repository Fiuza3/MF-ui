import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Testimonials } from "../blocos/Testimonials";

const propsMinimas = {
  eyebrow: "// depoimentos",
  title: <>O que dizem quem já trabalhou comigo.</>,
  depoimentos: [
    {
      texto: "Marcus entregou a API fiscal em 6 semanas.",
      autor: "Rafael Duarte",
      papel: "CTO",
      empresa: "Contabil.io",
    },
  ],
};

describe("Testimonials", () => {
  it("renderiza o texto e o autor do depoimento", () => {
    render(<Testimonials {...propsMinimas} />);

    expect(screen.getByText("Marcus entregou a API fiscal em 6 semanas.")).toBeTruthy();
    expect(screen.getByText("Rafael Duarte")).toBeTruthy();
  });

  it("nao renderiza nenhum elemento com opacity 0 no primeiro paint", () => {
    const { container } = render(<Testimonials {...propsMinimas} />);
    const escondidos = Array.from(container.querySelectorAll<HTMLElement>("[style]")).filter((el) =>
      /opacity:\s*0(;|$)/.test(el.getAttribute("style") ?? ""),
    );
    expect(escondidos).toHaveLength(0);
  });
});
