import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Projects } from "../blocos/Projects";

describe("Projects", () => {
  const projects = [
    {
      title: "Plataforma de RH",
      description: "SaaS multi-tenant para gestão.",
      tags: ["Next.js", "PostgreSQL"],
      ano: 2024,
      metrica: "12k usuários ativos",
    },
    {
      title: "API Fiscal Unificada",
      description: "Gateway para emissão de NFS-e.",
      tags: ["Node.js", "Redis"],
      ano: 2023,
    },
  ];

  it("renderiza os títulos dos dois projetos", () => {
    render(
      <Projects
        eyebrow="// shipped work"
        title={<>Cases como frames.</>}
        description="Cada projeto mostra um recorte."
        projects={projects}
      />,
    );
    expect(screen.getAllByText("Plataforma de RH").length).toBeGreaterThan(0);
    expect(screen.getAllByText("API Fiscal Unificada").length).toBeGreaterThan(0);
  });

  it("clones do carousel têm atributo inert", () => {
    render(
      <Projects
        eyebrow="// shipped work"
        title={<>Cases.</>}
        description="Cada projeto mostra um recorte."
        projects={projects}
      />,
    );
    const clones = screen.getAllByTestId("project-clone");
    clones.forEach((wrapper) => expect(wrapper).toHaveAttribute("inert"));
  });

  it("itens originais não têm atributo inert", () => {
    render(
      <Projects
        eyebrow="// shipped work"
        title={<>Cases.</>}
        description="Cada projeto mostra um recorte."
        projects={projects}
      />,
    );
    const items = screen.getAllByTestId("project-item");
    items.forEach((wrapper) => expect(wrapper).not.toHaveAttribute("inert"));
  });

  it("nao renderiza nenhum elemento com opacity 0 no primeiro paint", () => {
    const { container } = render(
      <Projects
        eyebrow="// shipped work"
        title={<>Cases.</>}
        description="Cada projeto mostra um recorte."
        projects={projects}
      />,
    );
    const escondidos = [...container.querySelectorAll<HTMLElement>("[style]")].filter((el) =>
      (el.getAttribute("style") ?? "").includes("opacity:0"),
    );
    expect(escondidos).toHaveLength(0);
  });

  function renderizar(itens = projects) {
    return render(
      <Projects eyebrow="projetos" title="Cases" description="Recortes." projects={itens} />,
    );
  }

  function abrirCaseDe(titulo: string): HTMLElement {
    const card = screen
      .getAllByTestId("project-item")
      .find((el) => within(el).queryByRole("heading", { name: titulo }));
    if (!card) throw new Error(`card de ${titulo} não encontrado`);
    return within(card).getByRole("button", { name: "abrir case" });
  }

  // O modal caseiro não travava o scroll, não tinha portal e não devolvia o foco.
  it("o case abre como diálogo nomeado pelo título e devolve o foco ao fechar", async () => {
    const user = userEvent.setup();
    renderizar();
    const botao = abrirCaseDe("Plataforma de RH");

    await user.click(botao);
    expect(screen.getByRole("dialog", { name: "Plataforma de RH" })).toBeInTheDocument();

    await user.keyboard("{Escape}");
    expect(screen.queryByRole("dialog")).toBeNull();
    expect(botao).toHaveFocus();
  });

  it("o diálogo do case é o Dialog da lib, com fechar padrão", async () => {
    const user = userEvent.setup();
    renderizar();

    await user.click(abrirCaseDe("Plataforma de RH"));
    const dialogo = screen.getByRole("dialog");

    expect(dialogo).toHaveAttribute("data-slot", "dialog-content");
    expect(within(dialogo).getByRole("button", { name: "Fechar" })).toBeInTheDocument();
    expect(dialogo).toHaveTextContent("métrica");
  });

  // Sem mockup, min-h + justify-between deixava ~250px vazios no meio do card.
  it("altura mínima do card só existe quando há mockup", () => {
    const { container } = renderizar([
      { title: "Sem mockup" },
      { title: "Com mockup", mockup: <div>tela</div> },
    ]);
    const [semMockup, comMockup] = Array.from(
      container.querySelectorAll("[data-testid=project-item] article"),
    );

    expect(semMockup?.className).not.toMatch(/min-h-\[/);
    expect(comMockup?.className).toMatch(/min-h-\[/);
  });

  it("href e categoria informados aparecem no card", () => {
    renderizar([{ title: "Site", href: "https://exemplo.com", categoria: "Web" }]);
    const card = screen.getByTestId("project-item");

    expect(within(card).getByRole("link", { name: /ver projeto/i })).toHaveAttribute(
      "href",
      "https://exemplo.com",
    );
    expect(card).toHaveTextContent("Web");
  });

  it("o trilho de cases é um grupo nomeado em português", () => {
    renderizar();

    expect(screen.getByRole("group", { name: "Sequência de cases" })).toBeInTheDocument();
  });

  // WCAG 2.2.2: movimento automático por mais de 5s precisa de pausa explícita.
  it("botão pausa e retoma o carrossel", async () => {
    const user = userEvent.setup();
    renderizar();
    const botao = screen.getByRole("button", { name: "Pausar carrossel" });
    expect(botao).toHaveAttribute("aria-pressed", "false");

    await user.click(botao);

    expect(screen.getByRole("button", { name: "Retomar carrossel" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    expect(document.querySelector(".project-carousel")).toHaveAttribute("data-paused", "true");
  });

  it("continua pausado depois de hover e saída do mouse", async () => {
    const user = userEvent.setup();
    renderizar();
    await user.click(screen.getByRole("button", { name: "Pausar carrossel" }));
    const carrossel = document.querySelector(".project-carousel")!;

    await user.hover(carrossel);
    await user.unhover(carrossel);

    expect(carrossel).toHaveAttribute("data-paused", "true");
  });

  describe("com movimento reduzido", () => {
    const original = window.matchMedia;
    afterEach(() => {
      window.matchMedia = original;
    });

    it("não mostra o botão de pausa", () => {
      window.matchMedia = vi.fn().mockImplementation((q: string) => ({
        matches: q.includes("prefers-reduced-motion"),
        media: q,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      }));
      renderizar();

      expect(screen.getByRole("group", { name: "Sequência de cases" })).toBeInTheDocument();
      expect(screen.queryByRole("button", { name: /carrossel/i })).toBeNull();
    });
  });
});
