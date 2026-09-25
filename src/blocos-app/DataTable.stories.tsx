import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Badge } from "../primitivos/Badge";
import { DataTable, type DataTableColumn } from "./DataTable";

type Cliente = { id: string; nome: string; plano: string; ativo: boolean };

const clientes: Cliente[] = [
  { id: "c1", nome: "Loja Aurora", plano: "Pro", ativo: true },
  { id: "c2", nome: "Clínica Vida", plano: "Básico", ativo: true },
  { id: "c3", nome: "Studio Kaya", plano: "Pro", ativo: false },
  { id: "c4", nome: "Padaria Trigo", plano: "Básico", ativo: true },
];

const colunas: DataTableColumn<Cliente>[] = [
  { key: "nome", header: "Cliente", render: (c) => c.nome },
  { key: "plano", header: "Plano", render: (c) => c.plano },
  {
    key: "status",
    header: "Status",
    render: (c) => (
      <Badge variant={c.ativo ? "secondary" : "outline"}>{c.ativo ? "ativo" : "inativo"}</Badge>
    ),
  },
];

type DataTableStoryArgs = { loading: boolean; vazia: boolean; totalPages: number };

const meta = {
  title: "Blocos App/DataTable",
  parameters: { layout: "padded" },
  args: { loading: false, vazia: false, totalPages: 5 },
  argTypes: { totalPages: { control: { type: "number", min: 1 } } },
  render: function Render({ loading, vazia, totalPages }) {
    const [page, setPage] = useState(1);
    return (
      <DataTable
        columns={colunas}
        rows={vazia ? [] : clientes}
        getRowKey={(c) => c.id}
        loading={loading}
        emptyState={{
          title: "Nenhum cliente encontrado",
          description: "Ajuste os filtros ou cadastre um cliente novo.",
        }}
        page={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    );
  },
} satisfies Meta<DataTableStoryArgs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
export const Carregando: Story = { args: { loading: true } };
export const Vazia: Story = { args: { vazia: true } };
