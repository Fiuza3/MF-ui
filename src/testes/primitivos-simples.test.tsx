import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Input } from "../primitivos/Input";
import { Textarea } from "../primitivos/Textarea";
import { Label } from "../primitivos/Label";
import { Separator } from "../primitivos/Separator";

describe("primitivos simples", () => {
  it("Input aceita placeholder", () => {
    render(<Input placeholder="email" />);
    expect(screen.getByPlaceholderText("email")).toBeTruthy();
  });
  it("Textarea aceita placeholder", () => {
    render(<Textarea placeholder="mensagem" />);
    expect(screen.getByPlaceholderText("mensagem")).toBeTruthy();
  });
  it("Label renderiza texto", () => {
    render(<Label>Nome</Label>);
    expect(screen.getByText("Nome")).toBeTruthy();
  });
  it("Separator renderiza", () => {
    const { container } = render(<Separator />);
    expect(container.querySelector('[data-slot="separator"]')).toBeTruthy();
  });
});
