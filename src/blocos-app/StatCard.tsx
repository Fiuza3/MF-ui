import * as React from 'react'

import { cn } from '../lib/cn'
import { Card, CardContent } from '../primitivos/Card'

export type StatCardDelta = {
  value: React.ReactNode
  direction?: 'up' | 'down' | 'neutral'
}

export type StatCardProps = {
  label: React.ReactNode
  value: React.ReactNode
  icon?: React.ReactNode
  delta?: StatCardDelta
  className?: string
}

const deltaCorPorDirecao: Record<NonNullable<StatCardDelta['direction']>, string> = {
  up: 'text-primary',
  down: 'text-destructive',
  neutral: 'text-muted-foreground',
}

/** Cartão de métrica única (label + valor + variação opcional) para dashboards. */
function StatCard({ label, value, icon, delta, className }: StatCardProps) {
  const direcao = delta?.direction ?? 'neutral'

  return (
    <Card className={cn('gap-1 py-5', className)}>
      <CardContent className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 flex-col gap-1">
          <p className="text-muted-foreground text-xs font-medium uppercase tracking-wide">
            {label}
          </p>
          <p className="text-foreground text-2xl font-semibold tabular-nums">{value}</p>
          {delta && (
            <p className={cn('text-xs font-medium', deltaCorPorDirecao[direcao])}>
              {delta.value}
            </p>
          )}
        </div>
        {icon && (
          <div
            data-slot="stat-card-icon"
            className="bg-accent/10 text-accent flex size-9 shrink-0 items-center justify-center rounded-md [&_svg]:size-4.5"
          >
            {icon}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export { StatCard }
