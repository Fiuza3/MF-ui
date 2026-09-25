"use client";

import * as React from "react";

import { lerToken } from "../lib/token";
import { tokensDeCor } from "../tokens/cores";

export type NodeNetworkProps = {
  /** Quantidade de nós. Padrão: 52. */
  count?: number;
  /** Distância máxima (px) para ligar dois nós com uma linha. Padrão: 160. */
  maxDistance?: number;
  /** Velocidade dos nós. Padrão: 0.45. */
  speed?: number;
  /**
   * Cor das linhas e nós. Por padrão lê o token `--primary` em runtime,
   * acompanhando tema claro/escuro automaticamente.
   */
  color?: string;
  className?: string;
};

/* Nome com prefixo porque `Node` sozinho sombreia o tipo global do DOM. */
type NetworkNode = { x: number; y: number; vx: number; vy: number };

function lerCor(el: HTMLElement, override?: string): string {
  return override ?? lerToken(el, tokensDeCor.primaria);
}

/**
 * Fundo decorativo: rede de partículas conectadas (canvas).
 * Lê `--primary` em runtime e reage à troca de tema (.light/.dark no <html>).
 */
export function NodeNetwork({
  count = 52,
  maxDistance = 160,
  speed = 0.45,
  color,
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

    // Movimento reduzido: quadro estático, redesenhado a cada resize e troca de tema
    // — mudar el.width apaga o canvas, e sem o loop ninguém repinta.
    const reduzido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let corAtual = lerCor(el, color);
    let largura = 0;
    let altura = 0;
    let animId = 0;
    const nodes: NetworkNode[] = [];

    function resize() {
      // Buffer em pixels físicos e transform no DPR: sem isso o traço de 0.8px
      // fica borrado em tela retina.
      const dpr = window.devicePixelRatio || 1;
      largura = el.offsetWidth;
      altura = el.offsetHeight;
      el.width = largura * dpr;
      el.height = altura * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      nodes.length = 0;
      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * largura,
          y: Math.random() * altura,
          vx: (Math.random() - 0.5) * speed,
          vy: (Math.random() - 0.5) * speed,
        });
      }
      if (reduzido) desenhar();
    }

    function mover() {
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0) n.x = largura;
        else if (n.x > largura) n.x = 0;
        if (n.y < 0) n.y = altura;
        else if (n.y > altura) n.y = 0;
      }
    }

    function desenharLigacoes() {
      ctx.strokeStyle = corAtual;
      ctx.lineWidth = 0.8;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist >= maxDistance) continue;
          ctx.globalAlpha = (1 - dist / maxDistance) * 0.28;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }
    }

    function desenharNos() {
      ctx.fillStyle = corAtual;
      ctx.globalAlpha = 0.55;
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.8, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    }

    function desenhar() {
      ctx.clearRect(0, 0, largura, altura);
      desenharLigacoes();
      desenharNos();
    }

    function tick() {
      mover();
      desenhar();
      animId = requestAnimationFrame(tick);
    }

    const ro = new ResizeObserver(resize);
    ro.observe(el);
    resize();

    // Reage à troca de tema: re-lê o token quando a classe do <html> muda.
    const mo = new MutationObserver(() => {
      corAtual = lerCor(el, color);
      if (reduzido) desenhar();
    });
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    if (!reduzido) animId = requestAnimationFrame(tick);

    return () => {
      ro.disconnect();
      mo.disconnect();
      if (animId) cancelAnimationFrame(animId);
    };
  }, [count, maxDistance, speed, color]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    />
  );
}
