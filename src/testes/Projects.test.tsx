import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Projects } from "../blocos/Projects";

describe("Projects", () => {
  const projects = [
    {
      title: "Plataforma de RH",
      description: "SaaS multi-tenant para gestão.",
      tags: ["Next.js", "PostgreSQL"],
      ano: 2024,
      metrica: "12k usuários ativos",
    },
    {
      title: "API Fiscal Unificada",
      description: "Gateway para emissão de NFS-e.",
      tags: ["Node.js", "Redis"],
      ano: 2023,
    },
  ];

  it("renderiza os títulos dos dois projetos", () => {
    render(
      <Projects
        eyebrow="// shipped work"
        title={<>Cases como frames.</>}
        description="Cada projeto mostra um recorte."
        projects={projects}
      />,
    );
    expect(screen.getAllByText("Plataforma de RH").length).toBeGreaterThan(0);
    expect(screen.getAllByText("API Fiscal Unificada").length).toBeGreaterThan(0);
  });

  it("clones do carousel têm atributo inert", () => {
    render(
      <Projects
        eyebrow="// shipped work"
        title={<>Cases.</>}
        description="Cada projeto mostra um recorte."
        projects={projects}
      />,
    );
    const clones = screen.getAllByTestId("project-clone");
    clones.forEach((wrapper) => expect(wrapper).toHaveAttribute("inert"));
  });

  it("itens originais não têm atributo inert", () => {
    render(
      <Projects
        eyebrow="// shipped work"
        title={<>Cases.</>}
        description="Cada projeto mostra um recorte."
        projects={projects}
      />,
    );
    const items = screen.getAllByTestId("project-item");
    items.forEach((wrapper) => expect(wrapper).not.toHaveAttribute("inert"));
  });
});
