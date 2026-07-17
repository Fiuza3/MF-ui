import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Footer } from "../componentes/Footer";

describe("Footer", () => {
  it("renderiza a linha de CNPJ quando informado", () => {
    render(<Footer cnpj="65.019.152/0001-81" />);
    expect(screen.getByText("65.019.152/0001-81")).toBeDefined();
    expect(screen.getByText("cnpj")).toBeDefined();
  });

  it("nao renderiza a linha de CNPJ sem a prop", () => {
    render(<Footer email="dev@mf.com" />);
    expect(screen.queryByText("cnpj")).toBeNull();
  });

  it("mantem contato e localizacao junto com o CNPJ", () => {
    render(<Footer email="dev@mf.com" localizacao="BH, MG" cnpj="65.019.152/0001-81" />);
    expect(screen.getByText("dev@mf.com")).toBeDefined();
    expect(screen.getByText("BH, MG")).toBeDefined();
    expect(screen.getByText("65.019.152/0001-81")).toBeDefined();
  });
});
