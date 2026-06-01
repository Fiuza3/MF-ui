import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Testimonials } from "../blocos/Testimonials";

describe("Testimonials", () => {
  it("renderiza o texto e o autor do depoimento", () => {
    render(
      <Testimonials
        eyebrow="// depoimentos"
        titulo={<>O que dizem quem já trabalhou comigo.</>}
        depoimentos={[
          {
            texto: "Marcus entregou a API fiscal em 6 semanas.",
            autor: "Rafael Duarte",
            papel: "CTO",
            empresa: "Contabil.io",
          },
        ]}
      />,
    );

    expect(screen.getByText("Marcus entregou a API fiscal em 6 semanas.")).toBeTruthy();
    expect(screen.getByText("Rafael Duarte")).toBeTruthy();
  });
});
