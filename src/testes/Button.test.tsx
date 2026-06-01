import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button } from "../primitivos/Button";

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
});
