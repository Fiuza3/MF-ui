import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Services } from "../blocos/Services";

describe("Services", () => {
  const services = [
    {
      id: "saas",
      tag: "01 / SaaS",
      title: "SaaS Products",
      description: "Build scalable SaaS platforms.",
      items: ["Multi-tenant", "Billing"],
    },
    {
      id: "apis",
      tag: "02 / API",
      title: "API Integration",
      description: "Connect systems reliably.",
      items: ["REST", "GraphQL"],
      motif: <div data-testid="m" />,
    },
  ];

  it("renderiza os títulos dos serviços e o título geral", () => {
    render(
      <Services
        eyebrow="// build modules"
        title={<>Serviços como sistemas.</>}
        description="Cada frente tem uma função clara."
        services={services}
      />,
    );

    expect(screen.getByText("SaaS Products")).toBeTruthy();
    expect(screen.getByText("API Integration")).toBeTruthy();
    expect(screen.getByText("Serviços como sistemas.")).toBeTruthy();
  });

  it("renderiza o motif quando fornecido", () => {
    render(
      <Services
        eyebrow="// build modules"
        title="Serviços"
        description="Desc"
        services={services}
      />,
    );
    expect(screen.getByTestId("m")).toBeTruthy();
  });
});
