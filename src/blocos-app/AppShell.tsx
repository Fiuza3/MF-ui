"use client";

import * as React from "react";
import { MenuIcon } from "lucide-react";

import { cn } from "../lib/cn";
import { Button } from "../primitivos/Button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../primitivos/Sheet";

export type AppShellProps = {
  sidebar: React.ReactNode;
  topbar: React.ReactNode;
  children: React.ReactNode;
  className?: string;
};

/**
 * Shell genérico de painel: sidebar fixa em telas largas, topbar sticky,
 * conteúdo scrollável. Sidebar/topbar/children são 100% controlados por props —
 * este bloco não conhece nada do domínio da aplicação que o consome.
 */
function AppShell({ sidebar, topbar, children, className }: AppShellProps) {
  return (
    <div className={cn("bg-background text-foreground flex min-h-svh w-full", className)}>
      <aside
        data-slot="app-shell-sidebar"
        className="border-border bg-card sticky top-0 hidden h-svh w-64 shrink-0 overflow-y-auto border-r lg:block"
      >
        {sidebar}
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header
          data-slot="app-shell-topbar"
          className="border-border bg-card/80 sticky top-0 z-40 flex h-14 items-center gap-2 border-b px-4 backdrop-blur lg:px-6"
        >
          <MenuMobile sidebar={sidebar} />
          <div className="flex min-w-0 flex-1 items-center">{topbar}</div>
        </header>

        <main data-slot="app-shell-content" className="flex-1 overflow-x-clip">
          {children}
        </main>
      </div>
    </div>
  );
}

function MenuMobile({ sidebar }: { sidebar: React.ReactNode }) {
  const [aberto, setAberto] = React.useState(false);

  // A sidebar é do consumidor e não sabe que está num painel: sem fechar ao
  // seguir um link, o menu ficaria aberto por cima da página nova no celular.
  function fecharAoNavegar(event: React.MouseEvent) {
    if (event.target instanceof Element && event.target.closest("a[href]")) setAberto(false);
  }

  return (
    <Sheet open={aberto} onOpenChange={setAberto}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Abrir menu" className="-ml-2 lg:hidden">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        aria-describedby={undefined}
        className="bg-card w-64 gap-0 p-0"
        onClickCapture={fecharAoNavegar}
      >
        <SheetTitle className="sr-only">Menu</SheetTitle>
        {sidebar}
      </SheetContent>
    </Sheet>
  );
}

export { AppShell };
