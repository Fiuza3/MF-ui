import * as React from 'react'

import { cn } from '../lib/cn'

export type PageHeaderBreadcrumbItem = {
  label: React.ReactNode
  href?: string
}

export type PageHeaderProps = {
  title: React.ReactNode
  breadcrumb?: PageHeaderBreadcrumbItem[]
  actions?: React.ReactNode
  className?: string
}

/** Cabeçalho de página genérico: breadcrumb opcional, título e slot de ações. */
function PageHeader({ title, breadcrumb, actions, className }: PageHeaderProps) {
  return (
    <div
      data-slot="page-header"
      className={cn(
        'flex flex-col gap-4 border-b border-border px-6 py-5 sm:flex-row sm:items-center sm:justify-between',
        className,
      )}
    >
      <div className="flex min-w-0 flex-col gap-1.5">
        {breadcrumb && breadcrumb.length > 0 && (
          <nav aria-label="Breadcrumb">
            <ol className="text-muted-foreground flex flex-wrap items-center gap-1.5 text-xs">
              {breadcrumb.map((item, index) => {
                const isLast = index === breadcrumb.length - 1
                return (
                  <li key={index} className="flex items-center gap-1.5">
                    {item.href && !isLast ? (
                      <a href={item.href} className="hover:text-foreground transition-colors">
                        {item.label}
                      </a>
                    ) : (
                      <span
                        aria-current={isLast ? 'page' : undefined}
                        className={isLast ? 'text-foreground' : undefined}
                      >
                        {item.label}
                      </span>
                    )}
                    {!isLast && <span aria-hidden="true">/</span>}
                  </li>
                )
              })}
            </ol>
          </nav>
        )}
        <h1 className="text-foreground truncate text-xl font-semibold">{title}</h1>
      </div>

      {actions && (
        <div data-slot="page-header-actions" className="flex shrink-0 items-center gap-2">
          {actions}
        </div>
      )}
    </div>
  )
}

export { PageHeader }
