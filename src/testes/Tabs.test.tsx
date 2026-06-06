import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../primitivos/Tabs";

describe("Tabs", () => {
  it("renderiza os triggers com role=tab", () => {
    render(
      <Tabs defaultValue="receitas">
        <TabsList>
          <TabsTrigger value="receitas">Receitas</TabsTrigger>
          <TabsTrigger value="despesas">Despesas</TabsTrigger>
        </TabsList>
        <TabsContent value="receitas">Conteúdo receitas</TabsContent>
        <TabsContent value="despesas">Conteúdo despesas</TabsContent>
      </Tabs>
    );
    expect(screen.getAllByRole("tab").length).toBe(2);
  });

  it("renderiza o conteúdo da tab ativa", () => {
    render(
      <Tabs defaultValue="receitas">
        <TabsList>
          <TabsTrigger value="receitas">Receitas</TabsTrigger>
        </TabsList>
        <TabsContent value="receitas">Conteúdo visível</TabsContent>
      </Tabs>
    );
    expect(screen.getByText("Conteúdo visível")).toBeTruthy();
  });
});
