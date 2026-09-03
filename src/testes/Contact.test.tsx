import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Contact } from "../blocos/Contact";

describe("Contact", () => {
  it("renderiza o titulo e o link do CTA", () => {
    render(
      <Contact
        eyebrow="// start project"
        title={<>Não preencha formulário.</>}
        description="Quatro respostas bastam."
        cta={{ label: "WhatsApp direto", href: "https://wa.me/5500000000000" }}
      />,
    );

    expect(screen.getByText("Não preencha formulário.")).toBeTruthy();
    expect(screen.getByRole("link", { name: /WhatsApp direto/i })).toBeTruthy();
  });

  it("nao renderiza nenhum elemento com opacity 0 no primeiro paint", () => {
    const { container } = render(
      <Contact
        eyebrow="// start project"
        title={<>Não preencha formulário.</>}
        description="Quatro respostas bastam."
        cta={{ label: "WhatsApp direto", href: "https://wa.me/5500000000000" }}
        email="contato@exemplo.com"
        slotFormulario={<div>formulario</div>}
      />,
    );

    const escondidos = [...container.querySelectorAll<HTMLElement>("[style]")].filter(
      (el) => el.style.opacity === "0",
    );
    expect(escondidos).toHaveLength(0);
  });
});
