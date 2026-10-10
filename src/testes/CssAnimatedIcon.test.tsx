import { readFileSync } from "node:fs";
import { join } from "node:path";
import { render, screen } from "@testing-library/react";
import { ExternalLinkIcon } from "lucide-react";
import { renderToStaticMarkup } from "react-dom/server";
import { AnimatedIcon } from "../primitivos/AnimatedIcon";
import { CssAnimatedIcon } from "../primitivos/CssAnimatedIcon";

describe("CssAnimatedIcon", () => {
  // O CSS (animated-icon.css) é o mesmo dos dois: se a marcação divergir, o ícone
  // de Server Component para de animar sem nenhum erro visível.
  it("gera a mesma marcação do AnimatedIcon para hover", () => {
    const css = renderToStaticMarkup(<CssAnimatedIcon icon={ExternalLinkIcon} animation="nudge" size={16} />);
    const cliente = renderToStaticMarkup(<AnimatedIcon icon={ExternalLinkIcon} animation="nudge" trigger="hover" size={16} />);
    expect(css).toBe(cliente);
  });

  it("é decorativo sem label e imagem nomeada com label", () => {
    const { container } = render(<CssAnimatedIcon icon={ExternalLinkIcon} animation="pulse" trigger="always" />);
    const svg = container.querySelector("svg")!;
    expect(svg).toHaveAttribute("aria-hidden", "true");
    expect(svg).toHaveAttribute("data-anim", "pulse");
    expect(svg).toHaveAttribute("data-trigger", "always");

    render(<CssAnimatedIcon icon={ExternalLinkIcon} animation="nudge" label="Abre em nova aba" />);
    expect(screen.getByRole("img", { name: "Abre em nova aba" })).toBeInTheDocument();
  });

  // Sem "use client" e sem hooks ele roda em Server Component e não manda JS ao
  // navegador — é o motivo de existir ao lado do AnimatedIcon.
  it("não tem diretiva de cliente nem hooks", () => {
    const fonte = readFileSync(join(process.cwd(), "src/primitivos/CssAnimatedIcon.tsx"), "utf8");
    // a diretiva só vale como primeira instrução do arquivo
    expect(fonte.trimStart()).not.toMatch(/^["']use client["']/);
    expect(fonte).not.toMatch(/\buse(State|Effect|LayoutEffect|SyncExternalStore|Ref|Callback|Memo)\b/);
  });
});
