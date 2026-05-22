"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
  onLogoClick?: () => void;
};

export function Navbar({
  links = [],
  ctaHref,
  ctaLabel = "Fale comigo",
  onLogoClick,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        hamburgerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const navClass = [
    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
    isScrolled ? "border-b border-[var(--line)] bg-[var(--background)]/90 backdrop-blur-md" : "bg-transparent",
  ].join(" ");

  return (
    <>
      <header className={navClass}>
        <div className="flex w-full items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
          <LogoAnimado
            compacto={isScrolled}
            onClick={onLogoClick ?? (() => window.scrollTo({ top: 0, behavior: "smooth" }))}
            label="Ir para o topo"
          />

          <nav aria-label="Navegação principal" className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.externo ? "_blank" : undefined}
                rel={link.externo ? "noopener noreferrer" : undefined}
                className="rounded px-1 py-0.5 text-sm text-[var(--gray-text)] hover:text-[var(--foreground)] transition-colors font-mono tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cyan)]/70"
              >
                {link.label}
              </a>
            ))}
            {ctaHref && (
              <a
                href={ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 rounded border border-[var(--cyan)] px-4 py-1.5 font-mono text-sm text-[var(--cyan)] hover:bg-[var(--cyan)] hover:text-[var(--background)] transition-all duration-200"
              >
                {ctaLabel}
              </a>
            )}
          </nav>

          <button
            ref={hamburgerRef}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5 rounded p-2 md:hidden"
          >
            <span className={`block h-px w-6 bg-[var(--foreground)] transition-all ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-px w-6 bg-[var(--foreground)] transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-px w-6 bg-[var(--foreground)] transition-all ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[65px] z-40 border-b border-[var(--line)] bg-[var(--background)]/95 backdrop-blur-md md:hidden"
          >
            <nav aria-label="Menu mobile" className="flex flex-col gap-1 px-6 py-6">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded py-2 font-mono text-sm text-[var(--gray-text)] hover:text-[var(--foreground)] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              {ctaHref && (
                <a
                  href={ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 rounded border border-[var(--cyan)] px-4 py-2 text-center font-mono text-sm text-[var(--cyan)] hover:bg-[var(--cyan)] hover:text-[var(--background)] transition-all"
                >
                  {ctaLabel}
                </a>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
