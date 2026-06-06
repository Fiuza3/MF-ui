import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Switch } from "../primitivos/Switch";

describe("Switch", () => {
  it("renderiza com role=switch", () => {
    render(<Switch aria-label="ativar modo" />);
    expect(screen.getByRole("switch")).toBeTruthy();
  });

  it("renderiza com aria-checked=false por padrão", () => {
    render(<Switch aria-label="ativar modo" />);
    const el = screen.getByRole("switch");
    expect(el.getAttribute("aria-checked")).toBe("false");
  });
});
