import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Checkbox } from "../primitivos/Checkbox";

describe("Checkbox", () => {
  it("renderiza com role=checkbox", () => {
    render(<Checkbox aria-label="recorrente" />);
    expect(screen.getByRole("checkbox")).toBeTruthy();
  });

  it("renderiza desabilitado com atributo disabled", () => {
    render(<Checkbox aria-label="recorrente" disabled />);
    const el = screen.getByRole("checkbox");
    expect(el.hasAttribute("disabled") || el.getAttribute("data-disabled") !== null).toBe(true);
  });
});
