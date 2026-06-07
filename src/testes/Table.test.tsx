import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
} from "../primitivos/Table";

describe("Table", () => {
  it("renderiza estrutura semântica correta", () => {
    render(
      <Table>
        <TableCaption>Lista de transações</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Descrição</TableHead>
            <TableHead>Valor</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Salário</TableCell>
            <TableCell>R$ 5.000</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    expect(screen.getByText("Lista de transações")).toBeTruthy();
    expect(screen.getByText("Salário")).toBeTruthy();
    expect(screen.getByText("R$ 5.000")).toBeTruthy();
  });

  it("renderiza um elemento table no DOM", () => {
    const { container } = render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>item</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    expect(container.querySelector("table")).toBeTruthy();
  });
});
