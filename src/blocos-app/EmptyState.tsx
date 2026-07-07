import * as React from 'react'

import { cn } from '../lib/cn'

export type EmptyStateProps = {
  icon?: React.ReactNode
  title: React.ReactNode
  description?: React.ReactNode
  action?: React.ReactNode
  className?: string
}

/** Estado vazio genérico — usado por DataTable e livremente por qualquer view. */
function EmptyState({ icon, title, description, action, className }: EmptyStateProps) {
  return (
    <div
      data-slot="empty-state"
      role="status"
      className={cn(
        'flex flex-col items-center justify-center gap-3 px-6 py-16 text-center',
        className,
      )}
    >
      {icon && (
        <div data-slot="empty-state-icon" className="text-muted-foreground [&_svg]:size-10">
          {icon}
        </div>
      )}
      <p className="text-foreground text-sm font-medium">{title}</p>
      {description && (
        <p className="text-muted-foreground max-w-sm text-sm">{description}</p>
      )}
      {action && <div className="mt-2">{action}</div>}
    </div>
  )
}

export { EmptyState }
