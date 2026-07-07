import * as React from 'react'
import { ChevronLeftIcon, ChevronRightIcon, MoreHorizontalIcon } from 'lucide-react'

import { cn } from '../lib/cn'

function Pagination({ className, ...props }: React.ComponentProps<'nav'>) {
  return (
    <nav
      aria-label="Paginação"
      data-slot="pagination"
      className={cn('mx-auto flex w-full justify-center', className)}
      {...props}
    />
  )
}

function PaginationContent({ className, ...props }: React.ComponentProps<'ul'>) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn('flex flex-row items-center gap-1', className)}
      {...props}
    />
  )
}

function PaginationItem({ ...props }: React.ComponentProps<'li'>) {
  return <li data-slot="pagination-item" {...props} />
}

type PaginationLinkProps = {
  isActive?: boolean
} & React.ComponentProps<'button'>

function PaginationLink({ className, isActive, ...props }: PaginationLinkProps) {
  return (
    <button
      type="button"
      aria-current={isActive ? 'page' : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      className={cn(
        'inline-flex size-9 items-center justify-center rounded-md text-sm font-medium transition-colors',
        'hover:bg-accent hover:text-accent-foreground',
        'focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50',
        'disabled:pointer-events-none disabled:opacity-50',
        isActive && 'bg-primary text-primary-foreground hover:bg-primary/90',
        className,
      )}
      {...props}
    />
  )
}

function PaginationPrevious({ className, ...props }: React.ComponentProps<'button'>) {
  return (
    <PaginationLink
      aria-label="Página anterior"
      className={cn('gap-1 px-2.5', className)}
      {...props}
    >
      <ChevronLeftIcon className="size-4" />
      <span className="hidden sm:inline">Anterior</span>
    </PaginationLink>
  )
}

function PaginationNext({ className, ...props }: React.ComponentProps<'button'>) {
  return (
    <PaginationLink
      aria-label="Próxima página"
      className={cn('gap-1 px-2.5', className)}
      {...props}
    >
      <span className="hidden sm:inline">Próxima</span>
      <ChevronRightIcon className="size-4" />
    </PaginationLink>
  )
}

function PaginationEllipsis({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      aria-hidden="true"
      data-slot="pagination-ellipsis"
      className={cn('flex size-9 items-center justify-center', className)}
      {...props}
    >
      <MoreHorizontalIcon className="size-4" />
      <span className="sr-only">Mais páginas</span>
    </span>
  )
}

/** Gera a lista de páginas a exibir, com elipses quando o total for grande. */
function gerarPaginasVisiveis(paginaAtual: number, totalPaginas: number): (number | 'ellipsis')[] {
  const MAX_VISIVEIS = 7
  if (totalPaginas <= MAX_VISIVEIS) {
    return Array.from({ length: totalPaginas }, (_, i) => i + 1)
  }

  const paginas: (number | 'ellipsis')[] = [1]
  const inicio = Math.max(2, paginaAtual - 1)
  const fim = Math.min(totalPaginas - 1, paginaAtual + 1)

  if (inicio > 2) paginas.push('ellipsis')
  for (let p = inicio; p <= fim; p++) paginas.push(p)
  if (fim < totalPaginas - 1) paginas.push('ellipsis')
  paginas.push(totalPaginas)

  return paginas
}

export type PaginationControlProps = {
  page: number
  totalPages: number
  onPageChange: (page: number) => void
  className?: string
}

/** Paginação completa e controlada — usada diretamente ou via DataTable. */
function PaginationControl({ page, totalPages, onPageChange, className }: PaginationControlProps) {
  if (totalPages <= 1) return null

  const paginasVisiveis = gerarPaginasVisiveis(page, totalPages)

  return (
    <Pagination className={className}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            disabled={page <= 1}
            onClick={() => onPageChange(page - 1)}
          />
        </PaginationItem>

        {paginasVisiveis.map((p, index) =>
          p === 'ellipsis' ? (
            <PaginationItem key={`ellipsis-${index}`}>
              <PaginationEllipsis />
            </PaginationItem>
          ) : (
            <PaginationItem key={p}>
              <PaginationLink isActive={p === page} onClick={() => onPageChange(p)}>
                {p}
              </PaginationLink>
            </PaginationItem>
          ),
        )}

        <PaginationItem>
          <PaginationNext
            disabled={page >= totalPages}
            onClick={() => onPageChange(page + 1)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
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
}
