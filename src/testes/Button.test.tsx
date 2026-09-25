import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button, type ButtonVariant } from "../primitivos/Button";

describe("Button", () => {
  it("renderiza o texto", () => {
    render(<Button>Enviar</Button>);
    expect(screen.getByRole("button", { name: "Enviar" })).toBeTruthy();
  });
  it("aplica className extra", () => {
    render(<Button className="minha-classe">x</Button>);
    expect(screen.getByRole("button").className).toContain("minha-classe");
  });
  it("aplica a variante via data-slot", () => {
    render(<Button>x</Button>);
    expect(screen.getByRole("button").getAttribute("data-slot")).toBe("button");
  });

  it.each<[ButtonVariant, string]>([
    ["default", "bg-primary"],
    ["outline", "border"],
    ["ghost", "hover:bg-foreground/10"],
    ["destructive", "bg-destructive"],
    ["secondary", "bg-secondary"],
  ])("variante %s aplica classe correta", (variant, expectedClass) => {
    render(<Button variant={variant}>x</Button>);
    expect(screen.getByRole("button").className).toContain(expectedClass);
  });

  it("loading desabilita, sinaliza aria-busy e mostra o spinner acessível", () => {
    render(<Button loading>Salvar</Button>);
    const botao = screen.getByRole("button", { name: /Salvar/ });

    expect(botao).toBeDisabled();
    expect(botao).toHaveAttribute("aria-busy", "true");
    expect(screen.getByRole("status", { name: "Carregando" })).toBeInTheDocument();
  });

  it("sem loading não tem spinner nem aria-busy", () => {
    render(<Button>Salvar</Button>);

    expect(screen.getByRole("button")).not.toHaveAttribute("aria-busy");
    expect(screen.queryByRole("status")).toBeNull();
  });

  // asChild entrega um único filho ao Slot: não dá para injetar o spinner sem
  // quebrar o link. O estado vai por aria, e o clique é bloqueado.
  it("loading com asChild sinaliza sem injetar filho", () => {
    render(
      <Button asChild loading>
        <a href="#x">Ir</a>
      </Button>,
    );
    const link = screen.getByRole("link", { name: "Ir" });

    expect(link).toHaveAttribute("aria-busy", "true");
    expect(link).toHaveAttribute("aria-disabled", "true");
  });
});
