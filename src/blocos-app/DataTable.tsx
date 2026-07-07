import * as React from 'react'

import { cn } from '../lib/cn'
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '../primitivos/Table'
import { Skeleton } from '../primitivos/Skeleton'
import { PaginationControl } from '../primitivos/Pagination'
import { EmptyState, type EmptyStateProps } from './EmptyState'

export type DataTableColumn<TRow> = {
  key: string
  header: React.ReactNode
  render: (row: TRow) => React.ReactNode
  className?: string
}

export type DataTableProps<TRow> = {
  columns: DataTableColumn<TRow>[]
  rows: TRow[]
  /** Extrai uma key estável de cada linha. Padrão: índice (usar quando possível uma key real). */
  getRowKey?: (row: TRow, index: number) => React.Key
  loading?: boolean
  /** Quantidade de linhas de skeleton exibidas durante `loading`. Padrão: 5. */
  loadingRowCount?: number
  emptyState?: React.ReactNode | EmptyStateProps
  page?: number
  totalPages?: number
  onPageChange?: (page: number) => void
  className?: string
}

function isEmptyStateProps(value: unknown): value is EmptyStateProps {
  return typeof value === 'object' && value !== null && 'title' in value
}

/**
 * Tabela de dados genérica sobre o primitivo Table: colunas/linhas via props,
 * skeleton de carregamento, estado vazio e paginação integrada.
 */
function DataTable<TRow>({
  columns,
  rows,
  getRowKey,
  loading = false,
  loadingRowCount = 5,
  emptyState,
  page,
  totalPages,
  onPageChange,
  className,
}: DataTableProps<TRow>) {
  const mostrarPaginacao = page !== undefined && totalPages !== undefined && onPageChange

  return (
    <div data-slot="data-table" className={cn('flex flex-col gap-4', className)}>
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((coluna) => (
              <TableHead key={coluna.key} className={coluna.className}>
                {coluna.header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {loading &&
            Array.from({ length: loadingRowCount }, (_, index) => (
              <TableRow key={`skeleton-${index}`}>
                {columns.map((coluna) => (
                  <TableCell key={coluna.key}>
                    <Skeleton className="h-4 w-full max-w-40" />
                  </TableCell>
                ))}
              </TableRow>
            ))}

          {!loading &&
            rows.map((row, index) => (
              <TableRow key={getRowKey ? getRowKey(row, index) : index}>
                {columns.map((coluna) => (
                  <TableCell key={coluna.key} className={coluna.className}>
                    {coluna.render(row)}
                  </TableCell>
                ))}
              </TableRow>
            ))}
        </TableBody>
      </Table>

      {!loading && rows.length === 0 && emptyState && (
        isEmptyStateProps(emptyState) ? <EmptyState {...emptyState} /> : emptyState
      )}

      {mostrarPaginacao && (
        <PaginationControl page={page} totalPages={totalPages} onPageChange={onPageChange} />
      )}
    </div>
  )
}

export { DataTable }
