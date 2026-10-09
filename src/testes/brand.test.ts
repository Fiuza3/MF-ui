import { describe, expect, it } from "vitest";
import {
  BRAND_ANIMATIONS,
  BRAND_VARIANTS,
  EASING,
  applyEasing,
  boundsOf,
  brandAnimationCss,
  buildAnimatedBrandTree,
  buildBrandTree,
  buildFrameTree,
  layoutBrand,
  prepareAnimation,
  sampleTrack,
  serializeSvg,
  timelineFor,
  type BrandTone,
  type BrandVariant,
  type SvgNode,
} from "../brand";

const svgOf = (variant: BrandVariant, tone: BrandTone) =>
  serializeSvg(buildBrandTree({ variant, tone }));

const findPart = (tree: SvgNode, id: string): SvgNode | undefined => {
  if (tree.attrs["data-part"] === id) return tree;
  for (const child of tree.children) {
    const found = findPart(child, id);
    if (found) return found;
  }
  return undefined;
};

describe("geometria da marca", () => {
  it("monta <MF/> na ordem, da esquerda para a direita, com o espaçamento ajustado", () => {
    const { parts } = layoutBrand("horizontal");
    expect(parts.map((part) => part.id)).toEqual(["lt", "m", "f", "slash", "gt"]);
    expect(parts[1].x - parts[0].x).toBe(560);
    expect(parts[4].x - parts[3].x).toBe(495);
  });

  it("a caixa da horizontal abraça os contornos sem folga", () => {
    const layout = layoutBrand("horizontal");
    expect(layout.viewBox).toEqual(boundsOf(layout.parts));
    expect(layout.tile).toBeNull();
  });

  it.each(["symbol-block", "symbol-tag", "symbol-cursor"] as const)(
    "%s cabe no bloco com margem para o recorte do ícone",
    (variant) => {
      const layout = layoutBrand(variant);
      const bounds = boundsOf(layout.parts);
      const left = layout.content.x + bounds.x * layout.content.scale;
      const right = left + bounds.width * layout.content.scale;
      const top = layout.content.y + bounds.y * layout.content.scale;
      const bottom = top + bounds.height * layout.content.scale;
      expect(layout.viewBox).toEqual({ x: 0, y: 0, width: 1000, height: 1000 });
      expect(left).toBeGreaterThanOrEqual(130);
      expect(right).toBeLessThanOrEqual(870);
      expect(top).toBeGreaterThan(0);
      expect(bottom).toBeLessThan(1000);
    },
  );
});

describe("SVG da marca", () => {
  it.each(BRAND_VARIANTS)("%s é só contorno — nunca depende de fonte", (variant) => {
    const svg = svgOf(variant, "cyan");
    expect(svg).not.toContain("<text");
    expect(svg).toContain("<path");
    expect(svg).toContain("<title>MF Desenvolvimento</title>");
  });

  it("ciano esmaece os colchetes em 58% e mantém o MF cheio", () => {
    const svg = svgOf("horizontal", "cyan");
    expect(svg.match(/fill-opacity="0.58"/g)).toHaveLength(3);
  });

  it("sobre fundo claro troca o ciano pelo teal legível", () => {
    const svg = svgOf("horizontal", "ink");
    expect(svg).toContain("#0A6E6A");
    expect(svg).not.toContain("#3DF2E0");
  });

  it("uma cor só vaza as letras do bloco em vez de pintar com segunda cor", () => {
    const svg = svgOf("symbol-block", "solid-black");
    expect(svg).toContain("<mask");
    expect(svg).not.toMatch(/fill="#(?!000000|fff|000)/i);
  });

  it("escapa o título fornecido", () => {
    const svg = serializeSvg(
      buildBrandTree({ variant: "monogram", tone: "cyan", title: "A & <B>" }),
    );
    expect(svg).toContain("<title>A &amp; &lt;B&gt;</title>");
  });
});

describe("linhas do tempo", () => {
  it("toda animação existe para toda variante", () => {
    for (const variant of BRAND_VARIANTS) {
      for (const animation of BRAND_ANIMATIONS) {
        expect(prepareAnimation(variant, animation).timeline.tracks.length).toBeGreaterThan(0);
      }
    }
  });

  it("montagem: o < parte de fora e transparente e termina em repouso", () => {
    const { timeline } = prepareAnimation("horizontal", "assemble");
    const lt = timeline.tracks.find((track) => track.part === "lt");
    if (!lt) throw new Error("trilha do < ausente");
    expect(sampleTrack(lt, 0, timeline.trigger)).toMatchObject({ opacity: 0, x: -220 });
    expect(sampleTrack(lt, lt.delay + lt.duration, timeline.trigger)).toMatchObject({
      opacity: 1,
      x: 0,
    });
    const middle = sampleTrack(lt, lt.delay + lt.duration / 2, timeline.trigger);
    expect(middle.x).toBeGreaterThan(-220);
    expect(middle.x).toBeLessThan(0);
  });

  it("pulso é contínuo: um ciclo depois volta ao mesmo quadro", () => {
    const { timeline } = prepareAnimation("horizontal", "pulse");
    const track = timeline.tracks[0];
    expect(sampleTrack(track, 700, "loop")).toEqual(
      sampleTrack(track, 700 + track.duration, "loop"),
    );
  });

  it("digitação some com o cursor provisório na horizontal e mantém o do bloco", () => {
    const horizontal = prepareAnimation("horizontal", "type");
    const block = prepareAnimation("symbol-block", "type");
    const cursorEnd = (prepared: typeof horizontal) => {
      const cursor = prepared.timeline.tracks.find((track) => track.part === "cursor");
      if (!cursor) throw new Error("trilha do cursor ausente");
      return sampleTrack(cursor, prepared.timeline.length, "mount");
    };
    expect(cursorEnd(horizontal)).toMatchObject({ opacity: 0, x: 0 });
    expect(cursorEnd(block)).toMatchObject({ opacity: 1, x: 0 });
  });

  it("abertura no hover só afasta os colchetes", () => {
    const { tracks } = timelineFor("spread", layoutBrand("horizontal"));
    expect(tracks.map((track) => track.part)).toEqual(["lt", "slash", "gt"]);
  });
});

describe("CSS das animações", () => {
  it("só anima com movimento liberado e nomeia keyframes por variante", () => {
    const { timeline } = prepareAnimation("symbol-tag", "assemble");
    const css = brandAnimationCss(timeline, "symbol-tag");
    expect(css).toContain("@media (prefers-reduced-motion:no-preference)");
    expect(css).toContain("@keyframes mf-brand-symbol-tag-assemble-lt");
    expect(css.indexOf(".mf-brand-transient{opacity:0}")).toBeLessThan(css.indexOf("@media"));
  });

  it("hover reage ao próprio svg e ao link que o envolve", () => {
    const { timeline } = prepareAnimation("horizontal", "spread");
    const css = brandAnimationCss(timeline, "horizontal");
    expect(css).toContain(".mf-brand--horizontal.mf-brand--spread:hover .mf-brand-part--lt");
    expect(css).toContain(
      ":focus-visible>.mf-brand--horizontal.mf-brand--spread .mf-brand-part--lt",
    );
  });

  it("o traço desenha contorno e preenchimento em camadas próprias", () => {
    const svg = serializeSvg(
      buildAnimatedBrandTree({ variant: "horizontal", tone: "cyan", animation: "draw" }),
    );
    expect(svg).toContain('class="mf-brand-stroke"');
    expect(svg).toContain('class="mf-brand-fill"');
    expect(svg).toContain("mf-brand-horizontal-draw-m-stroke");
  });
});

describe("quadros para PNG animado", () => {
  it("no instante zero da montagem o < está invisível; no fim, inteiro", () => {
    const options = { variant: "horizontal", tone: "cyan", animation: "assemble" } as const;
    expect(findPart(buildFrameTree(options, 0), "lt")?.attrs.opacity).toBe(0);
    expect(findPart(buildFrameTree(options, 5000), "lt")?.attrs.opacity).toBe(1);
  });
});

describe("easing", () => {
  it("expo-out vai de 0 a 1 sem voltar", () => {
    const samples = [0, 0.1, 0.3, 0.5, 0.8, 1].map((t) => applyEasing(EASING.expoOut, t));
    expect(samples[0]).toBeCloseTo(0);
    expect(samples[5]).toBeCloseTo(1);
    samples
      .slice(1)
      .forEach((value, index) => expect(value).toBeGreaterThanOrEqual(samples[index]));
  });

  it("step-end só salta no fim do segmento", () => {
    expect(applyEasing(EASING.stepEnd, 0.99)).toBe(0);
    expect(applyEasing(EASING.stepEnd, 1)).toBe(1);
  });
});

describe("cor livre", () => {
  it("pinta com a cor dada e preserva o esmaecido dos colchetes", () => {
    const svg = serializeSvg(
      buildBrandTree({ variant: "horizontal", tone: "cyan", color: "currentColor" }),
    );
    expect(svg).not.toContain("#3DF2E0");
    expect(svg.match(/fill="currentColor"/g)).toHaveLength(5);
    expect(svg.match(/fill-opacity="0.58"/g)).toHaveLength(3);
  });
});
