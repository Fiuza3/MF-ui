import { act, render, screen } from "@testing-library/react";
import { CalculatorIcon, ArrowRightIcon } from "lucide-react";
import { createRef } from "react";
import { renderToString } from "react-dom/server";
import { AnimatedIcon } from "../primitivos/AnimatedIcon";

describe("AnimatedIcon", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("é decorativo sem label", () => {
    const { container } = render(<AnimatedIcon icon={CalculatorIcon} />);
    const svg = container.querySelector("svg")!;
    expect(svg).toHaveAttribute("aria-hidden", "true");
    expect(svg).toHaveAttribute("data-anim", "draw");
    expect(svg).toHaveAttribute("data-trigger", "hover");
  });

  it("vira imagem nomeada com label", () => {
    render(<AnimatedIcon icon={CalculatorIcon} label="MF Custo" />);
    expect(screen.getByRole("img", { name: "MF Custo" })).toBeInTheDocument();
  });

  it("inview: arma só depois de montar e ativa ao entrar na tela", () => {
    let callback: IntersectionObserverCallback = () => {};
    const disconnect = vi.fn();
    vi.stubGlobal(
      "IntersectionObserver",
      vi.fn(function (cb: IntersectionObserverCallback) {
        callback = cb;
        return { observe: vi.fn(), disconnect, unobserve: vi.fn(), takeRecords: vi.fn() };
      }),
    );
    const { container } = render(<AnimatedIcon icon={CalculatorIcon} trigger="inview" />);
    const svg = container.querySelector("svg")!;
    expect(svg).toHaveAttribute("data-armed", "true");
    expect(svg).not.toHaveAttribute("data-active");
    act(() => callback([{ isIntersecting: true } as IntersectionObserverEntry], {} as IntersectionObserver));
    expect(svg).toHaveAttribute("data-active", "true");
    expect(disconnect).toHaveBeenCalled();
  });

  it("sem IntersectionObserver o ícone fica ativo (nunca escondido)", () => {
    vi.stubGlobal("IntersectionObserver", undefined);
    const { container } = render(<AnimatedIcon icon={CalculatorIcon} trigger="inview" />);
    const svg = container.querySelector("svg")!;
    expect(svg).toHaveAttribute("data-active", "true");
    expect(svg).not.toHaveAttribute("data-armed");
  });

  it("SSR: o HTML do servidor mostra o ícone completo (sem armed/active)", () => {
    const html = renderToString(<AnimatedIcon icon={CalculatorIcon} trigger="inview" />);
    expect(html).not.toContain("data-armed");
    expect(html).not.toContain("data-active");
  });

  it("desmontar um ícone inview desconecta o observer", () => {
    const disconnect = vi.fn();
    vi.stubGlobal(
      "IntersectionObserver",
      vi.fn(function () {
        return { observe: vi.fn(), disconnect, unobserve: vi.fn(), takeRecords: vi.fn() };
      }),
    );
    const { unmount } = render(<AnimatedIcon icon={CalculatorIcon} trigger="inview" />);
    expect(disconnect).not.toHaveBeenCalled();
    unmount();
    expect(disconnect).toHaveBeenCalled();
  });

  it("dois ícones inview ativam de forma independente", () => {
    const callbacks: IntersectionObserverCallback[] = [];
    vi.stubGlobal(
      "IntersectionObserver",
      vi.fn(function (cb: IntersectionObserverCallback) {
        callbacks.push(cb);
        return { observe: vi.fn(), disconnect: vi.fn(), unobserve: vi.fn(), takeRecords: vi.fn() };
      }),
    );
    const { container } = render(
      <>
        <AnimatedIcon icon={CalculatorIcon} trigger="inview" />
        <AnimatedIcon icon={CalculatorIcon} trigger="inview" />
      </>,
    );
    const [primeiro, segundo] = Array.from(container.querySelectorAll("svg"));
    act(() => callbacks[0]!([{ isIntersecting: true } as IntersectionObserverEntry], {} as IntersectionObserver));
    expect(primeiro).toHaveAttribute("data-active", "true");
    expect(segundo).not.toHaveAttribute("data-active");
  });

  it("draw aplica pathLength=100 nos filhos; pulse não", () => {
    const draw = render(<AnimatedIcon icon={CalculatorIcon} animation="draw" />);
    const formasDraw = draw.container.querySelectorAll("svg > :is(path, circle, line, polyline, polygon, rect, ellipse)");
    expect(formasDraw.length).toBeGreaterThan(0);
    formasDraw.forEach((forma) => expect(forma).toHaveAttribute("pathLength", "100"));
    draw.unmount();

    const pulse = render(<AnimatedIcon icon={CalculatorIcon} animation="pulse" />);
    pulse.container.querySelectorAll("svg > *").forEach((forma) => expect(forma).not.toHaveAttribute("pathLength"));
  });

  it("ref do consumidor recebe o svg e o observer observa o mesmo svg", () => {
    const observe = vi.fn();
    vi.stubGlobal(
      "IntersectionObserver",
      vi.fn(function () {
        return { observe, disconnect: vi.fn(), unobserve: vi.fn(), takeRecords: vi.fn() };
      }),
    );
    const ref = createRef<SVGSVGElement>();
    const { container } = render(<AnimatedIcon icon={CalculatorIcon} trigger="inview" ref={ref} />);
    const svg = container.querySelector("svg")!;
    expect(ref.current).toBe(svg);
    expect(observe).toHaveBeenCalledWith(svg);
  });

  it("trocar icon antes da interseção re-observa o svg novo e reaplica pathLength", () => {
    const observe = vi.fn();
    vi.stubGlobal(
      "IntersectionObserver",
      vi.fn(function () {
        return { observe, disconnect: vi.fn(), unobserve: vi.fn(), takeRecords: vi.fn() };
      }),
    );
    const { container, rerender } = render(<AnimatedIcon icon={CalculatorIcon} trigger="inview" />);
    rerender(<AnimatedIcon icon={ArrowRightIcon} trigger="inview" />);
    const svg = container.querySelector("svg")!;
    expect(observe).toHaveBeenLastCalledWith(svg);
    const formas = svg.querySelectorAll(":scope > :is(path, circle, line, polyline, polygon, rect, ellipse)");
    expect(formas.length).toBeGreaterThan(0);
    formas.forEach((forma) => expect(forma).toHaveAttribute("pathLength", "100"));
  });
});
