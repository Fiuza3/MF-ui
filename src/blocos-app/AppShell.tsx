import * as React from 'react'

import { cn } from '../lib/cn'

export type AppShellProps = {
  sidebar: React.ReactNode
  topbar: React.ReactNode
  children: React.ReactNode
  className?: string
}

/**
 * Shell genérico de painel: sidebar fixa em telas largas, topbar sticky,
 * conteúdo scrollável. Sidebar/topbar/children são 100% controlados por props —
 * este bloco não conhece nada do domínio da aplicação que o consome.
 */
function AppShell({ sidebar, topbar, children, className }: AppShellProps) {
  return (
    <div className={cn('bg-background text-foreground flex min-h-svh w-full', className)}>
      <aside
        data-slot="app-shell-sidebar"
        className="border-border bg-card hidden w-64 shrink-0 border-r lg:block"
      >
        {sidebar}
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header
          data-slot="app-shell-topbar"
          className="border-border bg-card/80 sticky top-0 z-40 border-b backdrop-blur"
        >
          {topbar}
        </header>

        <main data-slot="app-shell-content" className="flex-1 overflow-x-hidden">
          {children}
        </main>
      </div>
    </div>
  )
}

export { AppShell }
