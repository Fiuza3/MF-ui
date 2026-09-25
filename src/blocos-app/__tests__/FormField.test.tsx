import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { FormField } from "../FormField";
import { Input } from "../../primitivos/Input";

describe("FormField", () => {
  it("renderiza label e o slot children", () => {
    render(
      <FormField label="E-mail" htmlFor="email">
        <Input id="email" />
      </FormField>,
    );

    expect(screen.getByText("E-mail")).toBeTruthy();
    expect(screen.getByRole("textbox")).toBeTruthy();
  });

  it("renderiza a mensagem de erro quando informada", () => {
    render(
      <FormField label="E-mail" htmlFor="email" error="Campo obrigatório">
        <Input id="email" />
      </FormField>,
    );

    expect(screen.getByRole("alert").textContent).toBe("Campo obrigatório");
  });

  // aria-invalid numa div em volta não pinta o Input nem chega no leitor de tela:
  // tem que estar no próprio controle.
  it("com erro, marca o próprio controle como inválido e liga a mensagem", () => {
    render(
      <FormField label="E-mail" htmlFor="email" error="Campo obrigatório">
        <Input />
      </FormField>,
    );
    const input = screen.getByRole("textbox", { name: "E-mail" });

    expect(input).toHaveAttribute("aria-invalid", "true");
    expect(input).toHaveAccessibleDescription("Campo obrigatório");
  });

  it("liga label e controle sem o consumidor repetir o id", () => {
    render(
      <FormField label="E-mail" htmlFor="email">
        <Input />
      </FormField>,
    );

    expect(screen.getByRole("textbox", { name: "E-mail" })).toHaveAttribute("id", "email");
  });

  it("sem htmlFor, gera o vínculo sozinho", () => {
    render(
      <FormField label="E-mail" error="Campo obrigatório">
        <Input />
      </FormField>,
    );

    expect(screen.getByRole("textbox", { name: "E-mail" })).toHaveAccessibleDescription(
      "Campo obrigatório",
    );
  });

  it("não renderiza alert quando não há erro", () => {
    render(
      <FormField label="E-mail" htmlFor="email">
        <Input id="email" />
      </FormField>,
    );

    expect(screen.queryByRole("alert")).toBeNull();
  });
});
