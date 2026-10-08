import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, act } from "@testing-library/react";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { Reveal } from "../componentes/Reveal";

type ObserverCallback = (entries: { isIntersecting: boolean }[]) => void;

let observerCallback: ObserverCallback | null = null;
const observe = vi.fn();
const disconnect = vi.fn();

beforeEach(() => {
  observerCallback = null;
  observe.mockClear();
  disconnect.mockClear();
  // function (nao arrow): vi.fn só produz um mock construtível (`new`) quando
  // a implementação usa 'function'/'class' — Reveal.tsx chama `new IntersectionObserver`
  // para bater com a API real do browser.
  window.IntersectionObserver = vi.fn(function (cb: ObserverCallback) {
    observerCallback = cb;
    return { observe, disconnect, unobserve: vi.fn(), takeRecords: vi.fn() };
  }) as unknown as typeof IntersectionObserver;
});

describe("Reveal", () => {
  it("esconde o conteudo apos o mount e revela na intersecao", () => {
    render(<Reveal>conteudo</Reveal>);
    const el = screen.getByText("conteudo");
    expect(el.className).toContain("mf-reveal-hidden");
    act(() => observerCallback?.([{ isIntersecting: true }]));
    expect(el.className).toContain("mf-reveal-visible");
    expect(el.className).not.toContain("mf-reveal-hidden");
  });

  it("aplica delay como custom property", () => {
    render(<Reveal delayMs={120}>conteudo</Reveal>);
    const el = screen.getByText("conteudo");
    expect(el.style.getPropertyValue("--mf-entrada-delay")).toBe("120ms");
  });

  it("renderiza a tag pedida em as", () => {
    render(<Reveal as="article">conteudo</Reveal>);
    expect(screen.getByText("conteudo").tagName).toBe("ARTICLE");
  });

  it("na variante left esconde no eixo horizontal", () => {
    render(<Reveal variant="left">conteudo</Reveal>);
    const el = screen.getByText("conteudo");
    expect(el.className).toContain("mf-reveal-hidden-left");
    act(() => observerCallback?.([{ isIntersecting: true }]));
    expect(el.className).toContain("mf-reveal-visible");
    expect(el.className).not.toContain("mf-reveal-hidden");
  });

  it("conteúdo escondido é revelado ao receber foco (sem foco invisível)", () => {
    const css = readFileSync(resolve(process.cwd(), "src/tokens/utilitarios.css"), "utf8");
    expect(css).toMatch(
      /\.mf-reveal-hidden:focus-within,\s*\.mf-reveal-hidden-left:focus-within\s*\{[^}]*opacity:\s*1/,
    );
    render(<Reveal>conteudo</Reveal>);
    expect(screen.getByText("conteudo").className).toContain("mf-reveal-hidden");
  });
});
