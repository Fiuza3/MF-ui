"use client";

import { comportamentoDeScroll } from "../lib/comportamento-de-scroll";
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
  /** Rótulos da estética de terminal. O padrão é o texto do site da MF. */
  rotulos?: Partial<FooterRotulos>;
};

export type FooterRotulos = {
  resumo: string;
  local: string;
  cnpj: string;
  contato: string;
  saida: string;
};

const ROTULOS_PADRAO: FooterRotulos = {
  resumo: "runtime summary",
  local: "location",
  cnpj: "cnpj",
  contato: "contact",
  saida: "process.exit(0)",
};

export function Footer({
  links = [],
  email,
  localizacao,
  cnpj,
  nomeEmpresa = "MF Desenvolvimento",
  onLogoClick,
  rotulos,
}: FooterProps) {
  const year = new Date().getFullYear();
  const r = { ...ROTULOS_PADRAO, ...rotulos };

  return (
    <footer
      className="relative overflow-hidden border-t border-line py-16 lg:py-24"
      aria-label="Rodapé do site"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/60 to-transparent" />

      <div className="w-full px-5 sm:px-8 lg:px-10 2xl:px-14">
        <div className="grid grid-cols-[minmax(0,1fr)] gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:items-end">
          {/* @container: a marca d'água se mede pela coluna (cqi), nunca pela viewport. */}
          <div className="@container min-w-0">
            <div className="mb-8">
              <LogoAnimado
                label="Voltar ao topo"
                onClick={
                  onLogoClick ??
                  (() => window.scrollTo({ top: 0, behavior: comportamentoDeScroll() }))
                }
              />
            </div>
            <p
              aria-hidden="true"
              role="presentation"
              className="select-none font-mono text-[clamp(3rem,31cqi,24rem)] font-black leading-[0.76] tracking-tighter text-cyan/10"
            >
              {"<MF/>"}
            </p>
          </div>

          <div className="grid min-w-0 gap-8 font-mono">
            {(email || localizacao || cnpj) && (
              <div className="rounded border border-line bg-surface p-5">
                <p className="text-[10px] uppercase tracking-[0.28em] text-gray-text">{r.resumo}</p>
                <div className="mt-5 grid gap-3 text-sm">
                  {localizacao && (
                    <p className="flex items-baseline justify-between gap-4 border-b border-line pb-2">
                      <span className="text-gray-text shrink-0">{r.local}</span>
                      <span className="text-foreground min-w-0 text-right [overflow-wrap:anywhere]">
                        {localizacao}
                      </span>
                    </p>
                  )}
                  {cnpj && (
                    <p className="flex items-baseline justify-between gap-4 border-b border-line pb-2">
                      <span className="text-gray-text shrink-0">{r.cnpj}</span>
                      <span className="text-foreground min-w-0 text-right [overflow-wrap:anywhere]">
                        {cnpj}
                      </span>
                    </p>
                  )}
                  {email && (
                    <p className="flex items-baseline justify-between gap-4">
                      <span className="text-gray-text shrink-0">{r.contato}</span>
                      <a
                        href={`mailto:${email}`}
                        className="text-cyan hover:text-foreground focus-visible:ring-ring/50 min-w-0 rounded-sm text-right [overflow-wrap:anywhere] focus-visible:ring-[3px] focus-visible:outline-none"
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
                    className="border-line text-gray-text hover:border-cyan/60 hover:text-foreground focus-visible:ring-ring/50 rounded border px-3 py-2 text-xs transition-colors focus-visible:ring-[3px] focus-visible:outline-none"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            )}

            <div className="flex flex-col gap-3 border-line text-gray-text border-t pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
              <p>
                © {year} {nomeEmpresa}
              </p>
              <p>
                <span className="text-cyan">$</span> {r.saida}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
