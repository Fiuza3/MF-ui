import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../primitivos/Accordion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../primitivos/Dialog";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "../primitivos/Sheet";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "../primitivos/Tooltip";

describe("primitivos radix", () => {
  it("Accordion renderiza o trigger", () => {
    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="a">
          <AccordionTrigger>Pergunta</AccordionTrigger>
          <AccordionContent>Resposta</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );
    expect(screen.getByText("Pergunta")).toBeTruthy();
  });

  it("Dialog aberto expoe o conteudo com nome acessivel", () => {
    render(
      <Dialog open>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirmar acao</DialogTitle>
            <DialogDescription>Isso nao pode ser desfeito.</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>,
    );

    expect(screen.getByRole("dialog", { name: /confirmar acao/i })).toBeInTheDocument();
    expect(screen.getByText("Isso nao pode ser desfeito.")).toBeTruthy();
  });

  it("Dialog fechado nao renderiza o conteudo", () => {
    render(
      <Dialog open={false}>
        <DialogContent>
          <DialogTitle>Escondido</DialogTitle>
        </DialogContent>
      </Dialog>,
    );

    expect(screen.queryByRole("dialog")).toBeNull();
    expect(screen.queryByText("Escondido")).toBeNull();
  });

  it("Sheet aberto renderiza o painel no lado pedido", () => {
    render(
      <Sheet open>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Filtros</SheetTitle>
            <SheetDescription>Refine a busca.</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>,
    );

    const painel = screen.getByRole("dialog", { name: /filtros/i });
    expect(painel).toBeInTheDocument();
    expect(painel.getAttribute("data-slot")).toBe("sheet-content");
  });

  it("Tooltip aberto expoe o conteudo", () => {
    render(
      <TooltipProvider>
        <Tooltip open>
          <TooltipTrigger>Ajuda</TooltipTrigger>
          <TooltipContent>Texto de ajuda</TooltipContent>
        </Tooltip>
      </TooltipProvider>,
    );

    expect(screen.getAllByText("Texto de ajuda").length).toBeGreaterThan(0);
  });
});
