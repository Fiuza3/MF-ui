import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Process } from "../blocos/Process";

describe("Process", () => {
  const steps = [
    {
      numero: "00",
      titulo: "Diagnóstico",
      descricao: "Reunião de 60 min para entender o problema real.",
      duracao: "1 semana",
    },
    {
      numero: "01",
      titulo: "Proposta técnica",
      descricao: "Documento com escopo e critérios de aceite.",
      duracao: "3 dias",
    },
  ];

  it("renderiza os títulos dos dois steps", () => {
    render(
      <Process
        eyebrow="// execution pipeline"
        titulo={<>Processo como pipeline.</>}
        descricao="Cinco etapas com saída verificável."
        steps={steps}
      />,
    );

    expect(screen.getByText("Diagnóstico")).toBeTruthy();
    expect(screen.getByText("Proposta técnica")).toBeTruthy();
  });
});
