import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "./Badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./Table";

const faturas = [
  { id: "F-001", cliente: "Loja Aurora", status: "paga", valor: "R$ 1.200,00" },
  { id: "F-002", cliente: "Clínica Vida", status: "pendente", valor: "R$ 850,00" },
  { id: "F-003", cliente: "Studio Kaya", status: "vencida", valor: "R$ 2.400,00" },
];

const meta = {
  title: "Primitivos/Table",
  component: Table,
  subcomponents: { TableHeader, TableBody, TableFooter, TableRow, TableHead, TableCell },
  parameters: { layout: "padded" },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Faturas: Story = {
  render: (args) => (
    <Table {...args}>
      <TableCaption>Faturas de setembro</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Fatura</TableHead>
          <TableHead>Cliente</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Valor</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {faturas.map((f) => (
          <TableRow key={f.id}>
            <TableCell className="font-mono">{f.id}</TableCell>
            <TableCell>{f.cliente}</TableCell>
            <TableCell>
              <Badge variant={f.status === "vencida" ? "destructive" : "secondary"}>
                {f.status}
              </Badge>
            </TableCell>
            <TableCell className="text-right">{f.valor}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">R$ 4.450,00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
};
