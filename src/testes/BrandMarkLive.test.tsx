import { act, fireEvent, render } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { prepareAnimation } from "../brand";
import { BrandMarkLive } from "../componentes/BrandMarkLive";

const DRAW_LENGTH = prepareAnimation("horizontal", "draw").timeline.length;

const hostOf = (container: HTMLElement): HTMLElement => {
  const host = container.firstElementChild;
  if (!(host instanceof HTMLElement)) throw new Error("wrapper ausente");
  return host;
};

const animationOf = (container: HTMLElement) => {
  const svg = container.querySelector("svg");
  if (!svg) throw new Error("svg ausente");
  return svg.getAttribute("class") ?? "";
};

describe("BrandMarkLive", () => {
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => vi.useRealTimers());

  it("em repouso as letras brincam", () => {
    const { container } = render(<BrandMarkLive />);
    expect(animationOf(container)).toContain("mf-brand--bounce");
  });

  it("no hover se redesenha e, ao sair depois do traço, volta a brincar", () => {
    const { container } = render(<BrandMarkLive />);
    const host = hostOf(container);
    fireEvent.pointerEnter(host);
    expect(animationOf(container)).toContain("mf-brand--draw");
    fireEvent.pointerLeave(host);
    expect(animationOf(container)).toContain("mf-brand--draw");
    act(() => vi.advanceTimersByTime(DRAW_LENGTH));
    expect(animationOf(container)).toContain("mf-brand--bounce");
  });

  it("mouse parado em cima mantém a marca desenhada até sair", () => {
    const { container } = render(<BrandMarkLive />);
    const host = hostOf(container);
    fireEvent.pointerEnter(host);
    act(() => vi.advanceTimersByTime(DRAW_LENGTH));
    expect(animationOf(container)).toContain("mf-brand--draw");
    fireEvent.pointerLeave(host);
    expect(animationOf(container)).toContain("mf-brand--bounce");
  });
});
