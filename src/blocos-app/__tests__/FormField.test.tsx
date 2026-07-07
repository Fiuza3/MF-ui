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

  it("não renderiza alert quando não há erro", () => {
    render(
      <FormField label="E-mail" htmlFor="email">
        <Input id="email" />
      </FormField>,
    );

    expect(screen.queryByRole("alert")).toBeNull();
  });
});
