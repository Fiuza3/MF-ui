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
});
