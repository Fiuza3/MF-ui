import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DataTable, type DataTableColumn } from "../DataTable";

type Linha = { id: number; nome: string };

const colunas: DataTableColumn<Linha>[] = [
  { key: "nome", header: "Nome", render: (row) => row.nome },
];

describe("DataTable", () => {
  it("renderiza as linhas recebidas", () => {
    const rows: Linha[] = [
      { id: 1, nome: "Ana" },
      { id: 2, nome: "Bruno" },
    ];
    render(<DataTable columns={colunas} rows={rows} getRowKey={(r) => r.id} />);

    expect(screen.getByText("Ana")).toBeTruthy();
    expect(screen.getByText("Bruno")).toBeTruthy();
  });

  it("mostra emptyState quando rows=[]", () => {
    render(
      <DataTable
        columns={colunas}
        rows={[]}
        emptyState={{ title: "Nenhum registro encontrado" }}
      />,
    );

    expect(screen.getByText("Nenhum registro encontrado")).toBeTruthy();
  });

  it("renderiza skeleton rows quando loading=true", () => {
    const { container } = render(
      <DataTable columns={colunas} rows={[]} loading loadingRowCount={3} />,
    );

    expect(container.querySelectorAll('[data-slot="skeleton"]').length).toBe(3);
  });

  it("dispara onPageChange ao clicar em uma página", async () => {
    const user = userEvent.setup();
    const onPageChange = vi.fn();

    render(
      <DataTable
        columns={colunas}
        rows={[{ id: 1, nome: "Ana" }]}
        page={1}
        totalPages={3}
        onPageChange={onPageChange}
      />,
    );

    await user.click(screen.getByRole("button", { name: "2" }));

    expect(onPageChange).toHaveBeenCalledWith(2);
  });

  it("não renderiza paginação quando page/totalPages não são informados", () => {
    render(<DataTable columns={colunas} rows={[{ id: 1, nome: "Ana" }]} />);

    expect(screen.queryByRole("navigation", { name: "Paginação" })).toBeNull();
  });
});
