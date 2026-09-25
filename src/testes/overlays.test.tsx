import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../primitivos/Dialog";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "../primitivos/Sheet";
import { ToastComponentProvider, useToast } from "../primitivos/Toast";
import { useEffect } from "react";

function classes(el: Element): string[] {
  return el.className.split(/\s+/);
}

function DialogAberto() {
  return (
    <Dialog open>
      <DialogContent aria-describedby={undefined}>
        <DialogHeader>
          <DialogTitle>Título longo o bastante para chegar até o botão de fechar</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

function SheetAberto({ side }: { side: "right" | "bottom" }) {
  return (
    <Sheet open>
      <SheetContent side={side} aria-describedby={undefined}>
        <SheetHeader>
          <SheetTitle>Filtros</SheetTitle>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

describe("Dialog e Sheet", () => {
  it("o botão de fechar fala português", () => {
    const { unmount } = render(<DialogAberto />);
    expect(screen.getByRole("button", { name: "Fechar" })).toBeInTheDocument();
    unmount();

    render(<SheetAberto side="right" />);
    expect(screen.getByRole("button", { name: "Fechar" })).toBeInTheDocument();
  });

  // WCAG 2.5.8: alvo mínimo de 24×24. O X solto tinha 16px.
  it("o botão de fechar tem alvo de toque de 32px e anel só no teclado", () => {
    render(<DialogAberto />);
    const fechar = screen.getByRole("button", { name: "Fechar" });

    expect(classes(fechar)).toContain("size-8");
    expect(fechar.className).not.toMatch(/(^|\s)focus:ring/);
  });

  it("conteúdo longo rola dentro da tela em vez de vazar", () => {
    const { unmount } = render(<DialogAberto />);
    const dialog = screen.getByRole("dialog");
    expect(classes(dialog)).toContain("overflow-y-auto");
    expect(dialog.className).toMatch(/max-h-\[calc\(100dvh/);
    unmount();

    render(<SheetAberto side="bottom" />);
    const sheet = screen.getByRole("dialog");
    expect(classes(sheet)).toContain("overflow-y-auto");
    expect(sheet.className).toMatch(/max-h-\[/);
  });

  it("o cabeçalho reserva espaço para o botão de fechar", () => {
    render(<DialogAberto />);
    const dialog = screen.getByRole("dialog");

    // Simétrico no celular, onde o cabeçalho é centralizado; só à direita a partir de sm.
    expect(dialog.className).toMatch(/(^|\s)\[&_\[data-slot=dialog-header\]\]:px-/);
    expect(dialog.className).toMatch(/sm:\[&_\[data-slot=dialog-header\]\]:pl-0/);
  });
});

function DispararToast({ variant }: { variant: "default" | "destructive" }) {
  const { toast } = useToast();
  useEffect(() => {
    toast({ title: "Falha no envio", description: "Instância desconectada.", variant });
  }, [toast, variant]);
  return null;
}

describe("Toast", () => {
  // Em tela de toque não existe hover: opacity-0 puro escondia o X para sempre.
  it("o fechar só se esconde em dispositivo com ponteiro fino", async () => {
    render(
      <ToastComponentProvider>
        <DispararToast variant="default" />
      </ToastComponentProvider>,
    );
    const fechar = await screen.findByRole("button", { name: "Fechar" });

    expect(classes(fechar)).not.toContain("opacity-0");
    expect(classes(fechar)).toContain("pointer-fine:opacity-0");
  });

  // Sem âncora horizontal abaixo de sm, o viewport ficava na posição estática do pai
  // e o toast saía da tela pela direita no celular.
  it("o viewport fica ancorado nas duas bordas no celular", async () => {
    render(
      <ToastComponentProvider>
        <DispararToast variant="default" />
      </ToastComponentProvider>,
    );
    await screen.findByRole("button", { name: "Fechar" });
    const viewport = document.querySelector("[data-slot=toast-viewport]");

    expect(viewport?.className.split(/\s+/)).toContain("inset-x-0");
  });

  it("no destrutivo, descrição e fechar herdam a cor do par destrutivo", async () => {
    render(
      <ToastComponentProvider>
        <DispararToast variant="destructive" />
      </ToastComponentProvider>,
    );
    const descricao = await screen.findByText("Instância desconectada.");
    const raiz = descricao.closest("[data-slot=toast]");
    const fechar = screen.getByRole("button", { name: "Fechar" });

    expect(raiz?.className).toMatch(
      /\[&_\[data-slot=toast-description\]\]:text-destructive-foreground/,
    );
    expect(classes(fechar)).toContain("text-current");
  });
});
