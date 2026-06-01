import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Contact } from "../blocos/Contact";

describe("Contact", () => {
  it("renderiza o titulo e o link do CTA", () => {
    render(
      <Contact
        eyebrow="// start project"
        titulo={<>Não preencha formulário.</>}
        descricao="Quatro respostas bastam."
        cta={{ label: "WhatsApp direto", href: "https://wa.me/5500000000000" }}
      />,
    );

    expect(screen.getByText("Não preencha formulário.")).toBeTruthy();
    expect(screen.getByRole("link", { name: /WhatsApp direto/i })).toBeTruthy();
  });
});
