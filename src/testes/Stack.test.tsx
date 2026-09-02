import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Stack } from "../blocos/Stack";

describe("Stack", () => {
  it("renderiza categoria e item", () => {
    render(
      <Stack
        eyebrow="// architecture map"
        title={<>Stack como decisão.</>}
        description="Tecnologia entra quando reduz risco."
        grupos={[{ categoria: "Frontend", itens: ["React"] }]}
      />,
    );

    expect(screen.getAllByText("Frontend").length).toBeGreaterThan(0);
    expect(screen.getByText("React")).toBeTruthy();
  });

  it("nao renderiza nenhum elemento com opacity 0 no primeiro paint", () => {
    const { container } = render(
      <Stack
        eyebrow="// architecture map"
        title={<>Stack como decisão.</>}
        description="Tecnologia entra quando reduz risco."
        grupos={[
          { categoria: "Frontend", itens: ["React", "Next"] },
          { categoria: "Backend", itens: ["Node"] },
        ]}
      />,
    );
    const escondidos = [...container.querySelectorAll<HTMLElement>("[style]")].filter((el) =>
      /opacity:\s*0\s*(;|$)/.test(el.getAttribute("style") ?? ""),
    );
    expect(escondidos).toHaveLength(0);
  });
});
