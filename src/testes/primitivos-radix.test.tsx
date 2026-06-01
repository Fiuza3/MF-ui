import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../primitivos/Accordion";

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
});
