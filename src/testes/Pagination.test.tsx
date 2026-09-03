import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { PaginationControl } from "../primitivos/Pagination";

function paginasVisiveis(): string[] {
  return screen
    .getAllByRole("button")
    .map((b) => b.textContent?.trim() ?? "")
    .filter((t) => /^\d+$/.test(t));
}

describe("PaginationControl", () => {
  it("nao renderiza nada com uma pagina ou menos", () => {
    const { container } = render(
      <PaginationControl page={1} totalPages={1} onPageChange={() => {}} />,
    );
    expect(container).toBeEmptyDOMElement();
  });

  it("lista todas as paginas quando cabem sem elipse", () => {
    render(<PaginationControl page={3} totalPages={7} onPageChange={() => {}} />);

    expect(paginasVisiveis()).toEqual(["1", "2", "3", "4", "5", "6", "7"]);
    expect(screen.queryByText("Mais páginas")).toBeNull();
  });

  it("no meio de um total grande mantem primeira, ultima e uma janela ao redor", () => {
    render(<PaginationControl page={5} totalPages={10} onPageChange={() => {}} />);

    expect(paginasVisiveis()).toEqual(["1", "4", "5", "6", "10"]);
    expect(screen.getAllByText("Mais páginas")).toHaveLength(2);
  });

  it("na primeira pagina nao abre elipse a esquerda", () => {
    render(<PaginationControl page={1} totalPages={10} onPageChange={() => {}} />);

    expect(paginasVisiveis()).toEqual(["1", "2", "10"]);
    expect(screen.getAllByText("Mais páginas")).toHaveLength(1);
  });

  it("desabilita anterior na primeira e proxima na ultima", () => {
    const { unmount } = render(
      <PaginationControl page={1} totalPages={10} onPageChange={() => {}} />,
    );
    expect(screen.getByRole("button", { name: /página anterior/i })).toBeDisabled();
    expect(screen.getByRole("button", { name: /próxima página/i })).toBeEnabled();
    unmount();

    render(<PaginationControl page={10} totalPages={10} onPageChange={() => {}} />);
    expect(screen.getByRole("button", { name: /página anterior/i })).toBeEnabled();
    expect(screen.getByRole("button", { name: /próxima página/i })).toBeDisabled();
  });

  it("marca a pagina atual com aria-current", () => {
    render(<PaginationControl page={4} totalPages={10} onPageChange={() => {}} />);
    expect(screen.getByRole("button", { name: "4" })).toHaveAttribute("aria-current", "page");
    expect(screen.getByRole("button", { name: "3" })).not.toHaveAttribute("aria-current");
  });

  it("emite a pagina escolhida no clique", async () => {
    const user = userEvent.setup();
    const onPageChange = vi.fn();
    render(<PaginationControl page={5} totalPages={10} onPageChange={onPageChange} />);

    await user.click(screen.getByRole("button", { name: "6" }));
    expect(onPageChange).toHaveBeenCalledWith(6);

    await user.click(screen.getByRole("button", { name: /página anterior/i }));
    expect(onPageChange).toHaveBeenCalledWith(4);
  });
});
