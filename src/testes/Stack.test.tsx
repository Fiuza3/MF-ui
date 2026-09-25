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

  it("rótulos de terminal têm padrão e podem ser trocados, inclusive por grupo", () => {
    const grupos = [{ categoria: "Frontend", itens: ["React"], comando: "pnpm dev" }];
    const { rerender } = render(<Stack eyebrow="e" title="t" description="d" grupos={grupos} />);
    expect(screen.getByText("active")).toBeInTheDocument();
    expect(screen.getByText(/uso essa camada/)).toBeInTheDocument();

    rerender(
      <Stack
        eyebrow="e"
        title="t"
        description="d"
        grupos={[{ ...grupos[0], explicacao: "escolhido pelo time" }]}
        rotulos={{ ativo: "ativo", camada: "camada", explicar: "por que" }}
      />,
    );
    expect(screen.getByText("ativo")).toBeInTheDocument();
    expect(screen.getByText(/escolhido pelo time/)).toBeInTheDocument();
    expect(screen.queryByText("active")).toBeNull();
  });

  it("sem grupos não quebra a página", () => {
    const { container } = render(<Stack eyebrow="e" title="t" description="d" grupos={[]} />);

    expect(container).toBeEmptyDOMElement();
  });
});
