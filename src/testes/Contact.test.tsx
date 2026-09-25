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

  function renderizar() {
    return render(
      <Contact
        eyebrow="contato"
        title="Vamos conversar"
        description="Resposta em 1 dia útil."
        cta={{ label: "WhatsApp", href: "#whatsapp" }}
        email="contato@mfdesenvolvimento.online"
      />,
    );
  }

  // Item de grid tem min-width:auto: o e-mail em mono sem ponto de quebra
  // definia a largura mínima e empurrava os cards para fora em 375px.
  it("colunas podem encolher e o e-mail quebra em vez de alargar", () => {
    const { container } = renderizar();
    const grade = container.querySelector("section > div > .grid");

    expect(grade?.className).toMatch(/(^|\s)grid-cols-\[minmax\(0,1fr\)\]/);
    expect(screen.getByText("contato@mfdesenvolvimento.online").className).toMatch(
      /\[overflow-wrap:anywhere\]/,
    );
  });

  it("não declara inglês num eyebrow que o consumidor escreve", () => {
    const { container } = renderizar();

    expect(container.querySelector("[lang=en]")).toBeNull();
  });

  it("ícones dos canais são SVG da lib, não emoji", () => {
    renderizar();

    expect(screen.queryByText("💬")).toBeNull();
    expect(screen.getByRole("link", { name: /WhatsApp/ }).querySelector("svg")).not.toBeNull();
  });
});
