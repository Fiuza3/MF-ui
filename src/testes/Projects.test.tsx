import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Projects } from "../blocos/Projects";

describe("Projects", () => {
  const projects = [
    {
      titulo: "Plataforma de RH",
      descricao: "SaaS multi-tenant para gestão.",
      tags: ["Next.js", "PostgreSQL"],
      ano: 2024,
      metrica: "12k usuários ativos",
    },
    {
      titulo: "API Fiscal Unificada",
      descricao: "Gateway para emissão de NFS-e.",
      tags: ["Node.js", "Redis"],
      ano: 2023,
    },
  ];

  it("renderiza os títulos dos dois projetos", () => {
    render(
      <Projects
        eyebrow="// shipped work"
        titulo={<>Cases como frames.</>}
        descricao="Cada projeto mostra um recorte."
        projects={projects}
      />,
    );

    expect(screen.getAllByText("Plataforma de RH").length).toBeGreaterThan(0);
    expect(screen.getAllByText("API Fiscal Unificada").length).toBeGreaterThan(0);
  });
});
