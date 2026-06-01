import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Card, CardTitle, CardContent } from "../primitivos/Card";

describe("Card", () => {
  it("renderiza título e conteúdo", () => {
    render(
      <Card>
        <CardTitle>Olá</CardTitle>
        <CardContent>corpo</CardContent>
      </Card>,
    );
    expect(screen.getByText("Olá")).toBeTruthy();
    expect(screen.getByText("corpo")).toBeTruthy();
  });
});
