import { describe, it, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AppShell } from "../AppShell";

function Shell() {
  return (
    <AppShell
      sidebar={
        <nav>
          <a href="#clientes">Clientes</a>
        </nav>
      }
      topbar={<div>Barra superior</div>}
    >
      <p>Conteúdo da página</p>
    </AppShell>
  );
}

describe("AppShell", () => {
  it("renderiza sidebar, topbar e children", () => {
    render(<Shell />);

    expect(screen.getByText("Clientes")).toBeTruthy();
    expect(screen.getByText("Barra superior")).toBeTruthy();
    expect(screen.getByText("Conteúdo da página")).toBeTruthy();
  });

  // A sidebar é lg:block — sem este botão, abaixo de 1024px o painel ficava sem navegação.
  it("abaixo de lg, o botão de menu abre a mesma sidebar num painel", async () => {
    const user = userEvent.setup();
    render(<Shell />);

    const botao = screen.getByRole("button", { name: "Abrir menu" });
    expect(botao.className).toMatch(/(^|\s)lg:hidden(\s|$)/);

    await user.click(botao);
    const painel = screen.getByRole("dialog", { name: "Menu" });
    expect(painel).toHaveTextContent("Clientes");
  });

  it("navegar por um link do menu fecha o painel", async () => {
    const user = userEvent.setup();
    render(<Shell />);

    await user.click(screen.getByRole("button", { name: "Abrir menu" }));
    const painel = screen.getByRole("dialog", { name: "Menu" });
    await user.click(within(painel).getByRole("link", { name: "Clientes" }));

    expect(screen.queryByRole("dialog", { name: "Menu" })).toBeNull();
  });

  it("a sidebar do desktop acompanha o scroll com rolagem própria", () => {
    const { container } = render(<Shell />);
    const aside = container.querySelector("[data-slot=app-shell-sidebar]");

    expect(aside?.className).toMatch(/(^|\s)sticky(\s|$)/);
    expect(aside?.className).toMatch(/(^|\s)overflow-y-auto(\s|$)/);
  });

  // overflow-x:hidden força overflow-y:auto: o main virava contêiner de scroll que
  // nunca rola, e todo sticky do consumidor (cabeçalho de tabela) grudava nele.
  it("o conteúdo corta na horizontal sem virar contêiner de scroll", () => {
    const { container } = render(<Shell />);
    const main = container.querySelector("[data-slot=app-shell-content]");

    expect(main?.className.split(" ")).toContain("overflow-x-clip");
    expect(main?.className.split(" ")).not.toContain("overflow-x-hidden");
  });
});
