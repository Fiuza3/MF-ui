import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Skeleton } from "../primitivos/Skeleton";

describe("Skeleton", () => {
  it("renderiza com data-slot=skeleton", () => {
    const { container } = render(<Skeleton />);
    expect(container.querySelector('[data-slot="skeleton"]')).toBeTruthy();
  });

  it("aceita className extra", () => {
    const { container } = render(<Skeleton className="h-4 w-32" />);
    const el = container.querySelector('[data-slot="skeleton"]');
    expect(el?.classList.contains('h-4')).toBe(true);
    expect(el?.classList.contains('w-32')).toBe(true);
  });
});
