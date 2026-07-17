"use client";

import { LogoAnimado } from "./LogoAnimado";

export type FooterLink = {
  href: string;
  label: string;
};

export type FooterProps = {
  links?: FooterLink[];
  email?: string;
  localizacao?: string;
  cnpj?: string;
  nomeEmpresa?: string;
  onLogoClick?: () => void;
};

export function Footer({
  links = [],
  email,
  localizacao,
  cnpj,
  nomeEmpresa = "MF Desenvolvimento",
  onLogoClick,
}: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden border-t border-[var(--line)] py-16 lg:py-24"
      aria-label="Rodapé do site"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--cyan)]/60 to-transparent" />

      <div className="w-full px-5 sm:px-8 lg:px-10 2xl:px-14">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
          <div>
            <div className="mb-8">
              <LogoAnimado
                label="Voltar ao topo"
                onClick={onLogoClick ?? (() => window.scrollTo({ top: 0, behavior: "smooth" }))}
              />
            </div>
            <p
              aria-hidden="true"
              role="presentation"
              className="select-none font-mono text-[clamp(5rem,24vw,24rem)] font-black leading-[0.76] tracking-tighter text-[var(--cyan)]/10"
            >
              {"<MF/>"}
            </p>
          </div>

          <div className="grid gap-8 font-mono">
            {(email || localizacao || cnpj) && (
              <div className="rounded border border-[var(--line)] bg-[var(--surface)] p-5">
                <p className="text-[10px] uppercase tracking-[0.28em] text-[var(--gray-text)]">runtime summary</p>
                <div className="mt-5 grid gap-3 text-sm">
                  {localizacao && (
                    <p className="flex items-center justify-between gap-4 border-b border-[var(--line)] pb-2">
                      <span className="text-[var(--gray-text)]">location</span>
                      <span className="text-[var(--foreground)]">{localizacao}</span>
                    </p>
                  )}
                  {cnpj && (
                    <p className="flex items-center justify-between gap-4 border-b border-[var(--line)] pb-2">
                      <span className="text-[var(--gray-text)]">cnpj</span>
                      <span className="text-[var(--foreground)]">{cnpj}</span>
                    </p>
                  )}
                  {email && (
                    <p className="flex items-center justify-between gap-4">
                      <span className="text-[var(--gray-text)]">contact</span>
                      <a
                        href={`mailto:${email}`}
                        className="text-[var(--cyan)] hover:text-[var(--foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cyan)]/70"
                      >
                        {email}
                      </a>
                    </p>
                  )}
                </div>
              </div>
            )}

            {links.length > 0 && (
              <nav aria-label="Links do rodapé" className="flex flex-wrap gap-3">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="rounded border border-[var(--line)] px-3 py-2 text-xs text-[var(--gray-text)] transition-colors hover:border-[var(--cyan)]/60 hover:text-[var(--foreground)]"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            )}

            <div className="flex flex-col gap-3 border-t border-[var(--line)] pt-6 text-xs text-[var(--gray-text)] sm:flex-row sm:items-center sm:justify-between">
              <p>© {year} {nomeEmpresa}</p>
              <p>
                <span className="text-[var(--cyan)]">$</span> process.exit(0)
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
