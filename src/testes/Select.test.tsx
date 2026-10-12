import { describe, it, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../primitivos/Select";

describe("Select", () => {
  it("renderiza o trigger com placeholder", () => {
    render(
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Selecionar categoria" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="moradia">Moradia</SelectItem>
        </SelectContent>
      </Select>,
    );
    expect(screen.getByText("Selecionar categoria")).toBeTruthy();
  });

  it("renderiza o trigger com aria-expanded=false quando fechado", () => {
    render(
      <Select>
        <SelectTrigger aria-label="categoria">
          <SelectValue placeholder="Categoria" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="alimentacao">Alimentação</SelectItem>
        </SelectContent>
      </Select>,
    );
    const trigger = screen.getByRole("combobox");
    expect(trigger.getAttribute("aria-expanded")).toBe("false");
  });
});

function Plano({ open = false }: { open?: boolean }) {
  return (
    <Select defaultValue="pro" open={open}>
      <SelectTrigger aria-label="Plano">
        <SelectValue placeholder="Escolha um plano" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="basico">Básico</SelectItem>
        <SelectItem
          value="pro"
          description="Para equipes de até 20 pessoas"
          icon={<svg data-testid="icone-pro" />}
        >
          Pro
        </SelectItem>
      </SelectContent>
    </Select>
  );
}

describe("SelectItem com descrição e ícone", () => {
  // A descrição fica fora do ItemText do Radix: se entrasse nele, o gatilho
  // fechado mostraria "ProPara equipes de até 20 pessoas".
  it("gatilho mostra só o rótulo da opção escolhida", () => {
    render(<Plano />);
    expect(screen.getByRole("combobox", { name: "Plano" })).toHaveTextContent(/^Pro$/);
  });

  it("descrição aparece na opção e vira a descrição acessível dela", () => {
    render(<Plano open />);
    const opcao = screen.getByRole("option", { name: "Pro" });
    expect(within(opcao).getByText("Para equipes de até 20 pessoas")).toBeVisible();
    expect(opcao).toHaveAccessibleDescription("Para equipes de até 20 pessoas");
  });

  it("ícone é decorativo: o leitor de tela lê só o rótulo", () => {
    render(<Plano open />);
    const icone = screen.getByTestId("icone-pro");
    expect(icone.closest("[data-slot=select-item-icon]")).toHaveAttribute("aria-hidden", "true");
  });

  it("opção sem descrição não ganha aria-describedby", () => {
    render(<Plano open />);
    expect(screen.getByRole("option", { name: "Básico" })).not.toHaveAttribute("aria-describedby");
  });
});
