"use client";

import * as React from "react";
import { ChevronLeftIcon, ChevronRightIcon, MoreHorizontalIcon } from "lucide-react";

import { cn } from "../lib/cn";

function Pagination({ className, ...props }: React.ComponentProps<"nav">) {
  return (
    <nav
      aria-label="Paginação"
      data-slot="pagination"
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    />
  );
}

function PaginationContent({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn("flex flex-row items-center gap-1", className)}
      {...props}
    />
  );
}

function PaginationItem({ ...props }: React.ComponentProps<"li">) {
  return <li data-slot="pagination-item" {...props} />;
}

type PaginationLinkProps = {
  isActive?: boolean;
} & React.ComponentProps<"button">;

function PaginationLink({ className, isActive, ...props }: PaginationLinkProps) {
  return (
    <button
      type="button"
      aria-current={isActive ? "page" : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      className={cn(
        "inline-flex h-9 min-w-9 items-center justify-center rounded-md px-2 text-sm font-medium tabular-nums transition-colors",
        "hover:bg-foreground/10 hover:text-foreground",
        "focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50",
        "disabled:pointer-events-none disabled:opacity-50",
        isActive && "bg-primary text-primary-foreground hover:bg-primary/90",
        className,
      )}
      {...props}
    />
  );
}

function PaginationPrevious({ className, ...props }: React.ComponentProps<"button">) {
  return (
    <PaginationLink
      aria-label="Página anterior"
      className={cn("gap-1 px-2.5", className)}
      {...props}
    >
      <ChevronLeftIcon className="size-4" />
      <span className="hidden sm:inline">Anterior</span>
    </PaginationLink>
  );
}

function PaginationNext({ className, ...props }: React.ComponentProps<"button">) {
  return (
    <PaginationLink
      aria-label="Próxima página"
      className={cn("gap-1 px-2.5", className)}
      {...props}
    >
      <span className="hidden sm:inline">Próxima</span>
      <ChevronRightIcon className="size-4" />
    </PaginationLink>
  );
}

function PaginationEllipsis({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      aria-hidden="true"
      data-slot="pagination-ellipsis"
      className={cn("flex h-9 min-w-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontalIcon className="size-4" />
      <span className="sr-only">Mais páginas</span>
    </span>
  );
}

/** Gera a lista de páginas a exibir, com elipses quando o total for grande. */
function gerarPaginasVisiveis(paginaAtual: number, totalPaginas: number): (number | "ellipsis")[] {
  const MAX_VISIVEIS = 7;
  if (totalPaginas <= MAX_VISIVEIS) {
    return Array.from({ length: totalPaginas }, (_, i) => i + 1);
  }

  const paginas: (number | "ellipsis")[] = [1];
  const inicio = Math.max(2, paginaAtual - 1);
  const fim = Math.min(totalPaginas - 1, paginaAtual + 1);

  if (inicio > 2) paginas.push("ellipsis");
  for (let p = inicio; p <= fim; p++) paginas.push(p);
  if (fim < totalPaginas - 1) paginas.push("ellipsis");
  paginas.push(totalPaginas);

  return paginas;
}

export type PaginationControlProps = {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
};

// Onde cada item aparece. Abaixo de sm cabem ~7 itens em 320px (setas incluídas):
// até 5 páginas mostra tudo; acima disso fica "1 … atual … última", para o usuário
// não perder a noção do total.
type Onde = "sempre" | "desktop" | "mobile";

type ItemPaginacao =
  { tipo: "pagina"; pagina: number; onde: Onde } | { tipo: "elipse"; chave: string; onde: Onde };

const CLASSE_POR_ONDE: Record<Onde, string | undefined> = {
  sempre: undefined,
  desktop: "hidden sm:block",
  mobile: "sm:hidden",
};

const MAX_PAGINAS_NO_MOBILE = 5;

function montarItens(paginaAtual: number, totalPaginas: number): ItemPaginacao[] {
  const lista = gerarPaginasVisiveis(paginaAtual, totalPaginas);
  const cabeTudo = lista.length <= MAX_PAGINAS_NO_MOBILE;
  const noMobile = new Set([1, paginaAtual, totalPaginas]);
  const itens: ItemPaginacao[] = [];
  let ultimaNoMobile = 0;

  for (const p of lista) {
    if (p === "ellipsis") {
      itens.push({
        tipo: "elipse",
        chave: `e${itens.length}`,
        onde: cabeTudo ? "sempre" : "desktop",
      });
    } else if (cabeTudo || !noMobile.has(p)) {
      itens.push({ tipo: "pagina", pagina: p, onde: cabeTudo ? "sempre" : "desktop" });
    } else {
      if (ultimaNoMobile && p > ultimaNoMobile + 1) marcarElipseNoMobile(itens, ultimaNoMobile);
      itens.push({ tipo: "pagina", pagina: p, onde: "sempre" });
      ultimaNoMobile = p;
    }
  }
  return itens;
}

/** Reaproveita a elipse do desktop no trecho pulado; se não houver, cria uma só do mobile. */
function marcarElipseNoMobile(itens: ItemPaginacao[], desde: number) {
  const inicio = itens.findIndex((i) => i.tipo === "pagina" && i.pagina === desde) + 1;
  const elipse = itens.slice(inicio).find((i) => i.tipo === "elipse");
  if (elipse) {
    elipse.onde = "sempre";
    return;
  }
  itens.push({ tipo: "elipse", chave: `m${desde}`, onde: "mobile" });
}

/** Paginação completa e controlada — usada diretamente ou via DataTable. */
function PaginationControl({ page, totalPages, onPageChange, className }: PaginationControlProps) {
  if (totalPages <= 1) return null;

  return (
    <Pagination className={className}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious disabled={page <= 1} onClick={() => onPageChange(page - 1)} />
        </PaginationItem>

        {montarItens(page, totalPages).map((item) =>
          item.tipo === "elipse" ? (
            <PaginationItem key={item.chave} className={CLASSE_POR_ONDE[item.onde]}>
              <PaginationEllipsis />
            </PaginationItem>
          ) : (
            <PaginationItem key={item.pagina} className={CLASSE_POR_ONDE[item.onde]}>
              <PaginationLink
                isActive={item.pagina === page}
                onClick={() => onPageChange(item.pagina)}
              >
                {item.pagina}
              </PaginationLink>
            </PaginationItem>
          ),
        )}

        <PaginationItem>
          <PaginationNext disabled={page >= totalPages} onClick={() => onPageChange(page + 1)} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
  PaginationControl,
};
