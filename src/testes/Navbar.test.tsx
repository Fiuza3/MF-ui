import { describe, it, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Navbar } from "../componentes/Navbar";

const links = [{ href: "#servicos", label: "servicos" }];

describe("Navbar", () => {
  it("abre o menu mobile ao clicar no hamburger", async () => {
    const user = userEvent.setup();
    render(<Navbar links={links} />);

    await user.click(screen.getByRole("button", { name: /abrir menu/i }));

    expect(screen.getByRole("navigation", { name: /menu mobile/i })).toBeTruthy();
  });

  it("nao renderiza o menu mobile com opacity 0 no primeiro paint", async () => {
    const user = userEvent.setup();
    const { container } = render(<Navbar links={links} />);

    await user.click(screen.getByRole("button", { name: /abrir menu/i }));

    const escondidos = [...container.querySelectorAll<HTMLElement>("[style]")].filter((el) =>
      /opacity:\s*0\s*(;|$)/.test(el.getAttribute("style") ?? ""),
    );
    expect(escondidos).toHaveLength(0);
  });

  it("o botão aponta para o menu que controla", async () => {
    const user = userEvent.setup();
    render(<Navbar links={links} />);
    const botao = screen.getByRole("button", { name: /abrir menu/i });

    await user.click(botao);
    const menu = screen.getByRole("navigation", { name: /menu mobile/i });

    expect(botao).toHaveAttribute("aria-controls", menu.id);
  });

  // top-[65px] dependia da altura do logo + py-4; dentro do header, top-full acompanha.
  it("o menu mobile nasce dentro do header, sem offset mágico", async () => {
    const user = userEvent.setup();
    const { container } = render(<Navbar links={links} />);

    await user.click(screen.getByRole("button", { name: /abrir menu/i }));
    const menu = screen.getByRole("navigation", { name: /menu mobile/i });

    expect(container.querySelector("header")?.contains(menu)).toBe(true);
    expect(container.innerHTML).not.toMatch(/top-\[\d+px\]/);
  });

  it("fecha ao clicar fora e ao seguir o CTA", async () => {
    const user = userEvent.setup();
    render(
      <>
        <Navbar links={links} ctaHref="#contato" ctaLabel="Fale comigo" />
        <p>conteúdo da página</p>
      </>,
    );

    await user.click(screen.getByRole("button", { name: /abrir menu/i }));
    await user.click(screen.getByText("conteúdo da página"));
    expect(screen.queryByRole("navigation", { name: /menu mobile/i })).toBeNull();

    await user.click(screen.getByRole("button", { name: /abrir menu/i }));
    const menu = screen.getByRole("navigation", { name: /menu mobile/i });
    await user.click(within(menu).getByRole("link", { name: "Fale comigo" }));
    expect(screen.queryByRole("navigation", { name: /menu mobile/i })).toBeNull();
  });

  it("link externo abre em nova aba também no menu mobile", async () => {
    const user = userEvent.setup();
    render(<Navbar links={[{ href: "https://github.com/x", label: "GitHub", externo: true }]} />);

    await user.click(screen.getByRole("button", { name: /abrir menu/i }));
    const menu = screen.getByRole("navigation", { name: /menu mobile/i });

    expect(within(menu).getByRole("link", { name: "GitHub" })).toHaveAttribute("target", "_blank");
  });

  it("renderiza as ações no desktop e no painel mobile", async () => {
    const user = userEvent.setup();
    render(<Navbar links={links} acoes={<button type="button">Tema</button>} />);
    expect(screen.getAllByRole("button", { name: "Tema" })).toHaveLength(1);
    await user.click(screen.getByRole("button", { name: /abrir menu/i }));
    expect(screen.getAllByRole("button", { name: "Tema" }).length).toBeGreaterThanOrEqual(2);
  });

  // O LogoAnimado acrescenta " — MF Desenvolvimento" ao rótulo, então o nome é prefixo.
  it("o logo usa logoLabel como nome acessível e mantém o padrão sem a prop", () => {
    const { unmount } = render(<Navbar links={links} logoLabel="Ir para a página inicial" />);
    expect(screen.getByRole("button", { name: /^Ir para a página inicial/ })).toBeTruthy();
    unmount();

    render(<Navbar links={links} />);
    expect(screen.getByRole("button", { name: /^Ir para o topo/ })).toBeTruthy();
  });
});
