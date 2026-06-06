import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Process } from "../blocos/Process";

describe("Process", () => {
  const steps = [
    {
      numero: "00",
      title: "Diagnóstico",
      description: "Reunião de 60 min para entender o problema real.",
      duracao: "1 semana",
    },
    {
      numero: "01",
      title: "Proposta técnica",
      description: "Documento com escopo e critérios de aceite.",
      duracao: "3 dias",
    },
  ];

  it("renderiza os títulos dos dois steps", () => {
    render(
      <Process
        eyebrow="// execution pipeline"
        title={<>Processo como pipeline.</>}
        description="Cinco etapas com saída verificável."
        steps={steps}
      />,
    );

    expect(screen.getByText("Diagnóstico")).toBeTruthy();
    expect(screen.getByText("Proposta técnica")).toBeTruthy();
  });
});
