"use client";

import * as React from "react";

export type NodeNetworkProps = {
  /** Quantidade de nós. Default 52. */
  quantidade?: number;
  /** Distância máxima (px) para ligar dois nós com uma linha. Default 160. */
  distanciaMaxima?: number;
  /** Velocidade dos nós. Default 0.45. */
  velocidade?: number;
  /**
   * Cor das linhas e nós. Default lê o token `--cyan` em runtime,
   * acompanhando tema claro/escuro automaticamente.
   */
  cor?: string;
  className?: string;
};

type Node = { x: number; y: number; vx: number; vy: number };

function lerCor(el: HTMLElement, override?: string): string {
  if (override) return override;
  const cyan = getComputedStyle(el).getPropertyValue("--cyan").trim();
  return cyan || "#3DF2E0";
}

/**
 * Fundo decorativo: rede de partículas conectadas (canvas).
 * Lê `--cyan` em runtime e reage à troca de tema (.light/.dark no <html>).
 */
export function NodeNetwork({
  quantidade = 52,
  distanciaMaxima = 160,
  velocidade = 0.45,
  cor,
  className,
}: NodeNetworkProps) {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    const el = canvas;
    const ctx = context;

    let corAtual = lerCor(el, cor);
    const nodes: Node[] = [];
    let animId = 0;

    function resize() {
      el.width = el.offsetWidth;
      el.height = el.offsetHeight;
      nodes.length = 0;
      for (let i = 0; i < quantidade; i++) {
        nodes.push({
          x: Math.random() * el.width,
          y: Math.random() * el.height,
          vx: (Math.random() - 0.5) * velocidade,
          vy: (Math.random() - 0.5) * velocidade,
        });
      }
    }

    const ro = new ResizeObserver(resize);
    ro.observe(el);
    resize();

    // Reage à troca de tema: re-lê o token quando a classe do <html> muda.
    const mo = new MutationObserver(() => {
      corAtual = lerCor(el, cor);
    });
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    function tick() {
      const w = el.width;
      const h = el.height;
      ctx.clearRect(0, 0, w, h);

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0) n.x = w;
        else if (n.x > w) n.x = 0;
        if (n.y < 0) n.y = h;
        else if (n.y > h) n.y = 0;
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < distanciaMaxima) {
            ctx.strokeStyle = corAtual;
            ctx.globalAlpha = (1 - dist / distanciaMaxima) * 0.28;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      ctx.fillStyle = corAtual;
      for (const n of nodes) {
        ctx.globalAlpha = 0.55;
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.8, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(tick);
    }

    animId = requestAnimationFrame(tick);

    return () => {
      ro.disconnect();
      mo.disconnect();
      cancelAnimationFrame(animId);
    };
  }, [quantidade, distanciaMaxima, velocidade, cor]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
    />
  );
}
