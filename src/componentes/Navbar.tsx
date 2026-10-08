"use client";

import { useEffect, useId, useRef, useState, type ReactNode, type RefObject } from "react";
import { comportamentoDeScroll } from "../lib/comportamento-de-scroll";
import { propsDeLink } from "../lib/link-externo";
import { LogoAnimado } from "./LogoAnimado";

export type NavLink = {
  href: string;
  label: string;
  externo?: boolean;
};

export type NavbarProps = {
  links?: NavLink[];
  ctaHref?: string;
  ctaLabel?: string;
  /** Slot à direita (ex.: alternador de tema), antes do CTA no desktop e no fim do painel mobile. */
  acoes?: ReactNode;
  /** Nome acessível do logo; troque quando ele não leva ao topo (ex.: páginas internas). */
  logoLabel?: string;
  onLogoClick?: () => void;
};

const FOCO = "focus-visible:ring-ring focus-visible:ring-[3px] focus-visible:outline-none";

function propsDoLinkDeMenu(link: NavLink) {
  return link.externo ? { target: "_blank" as const, rel: "noopener noreferrer" } : {};
}

export function Navbar({
  links = [],
  ctaHref,
  ctaLabel = "Fale comigo",
  acoes,
  logoLabel = "Ir para o topo",
  onLogoClick,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();

  useScrollado(setIsScrolled);
  useFecharMenu({ aberto: menuOpen, setAberto: setMenuOpen, headerRef, hamburgerRef });

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled || menuOpen
          ? "border-line bg-background/90 border-b backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="flex w-full items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        <LogoAnimado
          compacto={isScrolled}
          onClick={
            onLogoClick ?? (() => window.scrollTo({ top: 0, behavior: comportamentoDeScroll() }))
          }
          label={logoLabel}
        />
        <NavDesktop links={links} ctaHref={ctaHref} ctaLabel={ctaLabel} acoes={acoes} />
        <Hamburguer
          ref={hamburgerRef}
          aberto={menuOpen}
          controla={menuId}
          alternar={() => setMenuOpen(!menuOpen)}
        />
      </div>

      {menuOpen && (
        <NavMobile
          id={menuId}
          links={links}
          ctaHref={ctaHref}
          ctaLabel={ctaLabel}
          acoes={acoes}
          fechar={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
}

function useScrollado(setIsScrolled: (v: boolean) => void) {
  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [setIsScrolled]);
}

type FecharMenu = {
  aberto: boolean;
  setAberto: (aberto: boolean) => void;
  headerRef: RefObject<HTMLElement | null>;
  hamburgerRef: RefObject<HTMLButtonElement | null>;
};

/** Esc devolve o foco ao hambúrguer; clique fora do header fecha sem roubar o foco. */
function useFecharMenu({ aberto, setAberto, headerRef, hamburgerRef }: FecharMenu) {
  useEffect(() => {
    if (!aberto) return;
    const fechar = () => setAberto(false);
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      fechar();
      hamburgerRef.current?.focus();
    };
    const onPointer = (e: PointerEvent) => {
      if (e.target instanceof Node && !headerRef.current?.contains(e.target)) fechar();
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [aberto, setAberto, headerRef, hamburgerRef]);
}

type NavConteudo = { links: NavLink[]; ctaHref?: string; ctaLabel: string; acoes?: ReactNode };

function NavDesktop({ links, ctaHref, ctaLabel, acoes }: NavConteudo) {
  return (
    <nav aria-label="Navegação principal" className="hidden items-center gap-8 md:flex">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          {...propsDoLinkDeMenu(link)}
          className={`text-gray-text hover:text-foreground rounded px-1 py-0.5 font-mono text-sm tracking-wide transition-colors ${FOCO}`}
        >
          {link.label}
        </a>
      ))}
      {acoes && <div className="flex items-center gap-2">{acoes}</div>}
      {ctaHref && (
        <a
          href={ctaHref}
          {...propsDeLink(ctaHref)}
          className={`border-cyan text-cyan hover:bg-cyan hover:text-background ml-2 rounded border px-4 py-1.5 font-mono text-sm transition-all duration-200 ${FOCO}`}
        >
          {ctaLabel}
        </a>
      )}
    </nav>
  );
}

function NavMobile({
  id,
  links,
  ctaHref,
  ctaLabel,
  acoes,
  fechar,
}: NavConteudo & { id: string; fechar: () => void }) {
  return (
    <div className="mf-entrada mf-entrada-down border-line bg-background absolute inset-x-0 top-full border-b md:hidden">
      <nav id={id} aria-label="Menu mobile" className="flex flex-col gap-1 px-6 py-6">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            {...propsDoLinkDeMenu(link)}
            onClick={fechar}
            className={`text-gray-text hover:text-foreground rounded py-2 font-mono text-sm transition-colors ${FOCO}`}
          >
            {link.label}
          </a>
        ))}
        {ctaHref && (
          <a
            href={ctaHref}
            {...propsDeLink(ctaHref)}
            onClick={fechar}
            className={`border-cyan text-cyan hover:bg-cyan hover:text-background mt-4 rounded border px-4 py-2 text-center font-mono text-sm transition-all ${FOCO}`}
          >
            {ctaLabel}
          </a>
        )}
        {acoes && <div className="mt-4 flex items-center gap-2">{acoes}</div>}
      </nav>
    </div>
  );
}

type HamburguerProps = {
  ref: RefObject<HTMLButtonElement | null>;
  aberto: boolean;
  controla: string;
  alternar: () => void;
};

// Barras h-px com gap-1.5 ficam a 7px de centro a centro: translate de 7px cruza
// exatamente no meio (translate-y-2 = 8px deixava o X torto).
function Hamburguer({ ref, aberto, controla, alternar }: HamburguerProps) {
  const barra = "bg-foreground block h-px w-6 transition-all";
  return (
    <button
      ref={ref}
      type="button"
      aria-label={aberto ? "Fechar menu" : "Abrir menu"}
      aria-expanded={aberto}
      aria-controls={controla}
      onClick={alternar}
      className={`flex flex-col gap-1.5 rounded p-2 md:hidden ${FOCO}`}
    >
      <span className={`${barra} ${aberto ? "translate-y-[7px] rotate-45" : ""}`} />
      <span className={`${barra} ${aberto ? "opacity-0" : ""}`} />
      <span className={`${barra} ${aberto ? "-translate-y-[7px] -rotate-45" : ""}`} />
    </button>
  );
}
