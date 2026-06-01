import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Badge } from "../primitivos/Badge";

describe("Badge", () => {
  it("renderiza com data-slot badge", () => {
    render(<Badge>novo</Badge>);
    const el = screen.getByText("novo");
    expect(el.getAttribute("data-slot")).toBe("badge");
  });
});
