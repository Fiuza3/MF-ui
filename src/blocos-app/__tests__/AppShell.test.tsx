import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { AppShell } from "../AppShell";

describe("AppShell", () => {
  it("renderiza sidebar, topbar e children", () => {
    render(
      <AppShell
        sidebar={<nav>Menu lateral</nav>}
        topbar={<div>Barra superior</div>}
      >
        <p>Conteúdo da página</p>
      </AppShell>,
    );

    expect(screen.getByText("Menu lateral")).toBeTruthy();
    expect(screen.getByText("Barra superior")).toBeTruthy();
    expect(screen.getByText("Conteúdo da página")).toBeTruthy();
  });
});
