import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Navbar } from "../componentes/Navbar";
import { Hero } from "../blocos/Hero";
import { Contact } from "../blocos/Contact";

const EXTERNO = "https://wa.me/5531999999999";

function Cta({ href }: { href: string }) {
  return (
    <>
      <Navbar ctaHref={href} ctaLabel="navbar cta" />
      <Hero
        eyebrow="e"
        title={<h1>t</h1>}
        description="d"
        cta={{ label: "hero cta", href }}
        stats={[]}
      />
      <Contact eyebrow="e" title="t" description="d" cta={{ label: "contact cta", href }} />
    </>
  );
}

function ctas(): HTMLElement[] {
  return screen.getAllByRole("link").filter((a) => /cta/.test(a.textContent ?? ""));
}

describe("CTAs", () => {
  it("âncora interna abre na mesma aba", () => {
    render(<Cta href="#contato" />);

    expect(ctas().length).toBeGreaterThanOrEqual(3);
    for (const link of ctas()) expect(link).not.toHaveAttribute("target");
  });

  it("URL externa abre em nova aba sem vazar o opener", () => {
    render(<Cta href={EXTERNO} />);

    for (const link of ctas()) {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    }
  });
});
