import { describe, expect, it } from "vitest";
import { frameDelays, frameTimes, mergeIdenticalFrames, targetSize } from "./animated-raster.mjs";

describe("frameTimes", () => {
  it("mount inclui os 1200ms segurando o quadro final", () => {
    const { times, total } = frameTimes({ trigger: "mount", length: 1000 }, 30);
    expect(total).toBe(2200);
    expect(times[0]).toBe(0);
    expect(times.length).toBe(Math.ceil(2200 / (1000 / 30)));
    expect(times.at(-1)).toBeGreaterThan(1000);
    expect(times.at(-1)).toBeLessThan(2200);
  });

  it("pulse cobre exatamente um ciclo sem repetir o quadro inicial", () => {
    const { times, total } = frameTimes({ trigger: "loop", length: 1000 }, 20);
    expect(total).toBe(1000);
    expect(times).toHaveLength(20);
    expect(times.at(-1)).toBe(950);
  });
});

describe("frameDelays", () => {
  it("soma exatamente a duração total, sem deriva de arredondamento", () => {
    const { times, total } = frameTimes({ trigger: "loop", length: 1000 }, 30);
    const delays = frameDelays(times, total);
    expect(delays.reduce((a, b) => a + b, 0)).toBe(1000);
    expect(new Set(delays)).toEqual(new Set([33, 34]));
  });
});

describe("mergeIdenticalFrames", () => {
  it("funde consecutivos iguais somando os atrasos", () => {
    const a = Buffer.from([1]);
    const b = Buffer.from([2]);
    const merged = mergeIdenticalFrames([
      { data: a, delay: 33 },
      { data: Buffer.from([1]), delay: 33 },
      { data: b, delay: 33 },
      { data: Buffer.from([1]), delay: 34 },
    ]);
    expect(merged.map((frame) => frame.delay)).toEqual([66, 33, 34]);
  });
});

describe("targetSize", () => {
  it("horizontal tem 640 de largura e altura proporcional; símbolo é 512x512", () => {
    expect(targetSize("horizontal", { width: 1000, height: 250 })).toEqual({ width: 640, height: 160 });
    expect(targetSize("symbol-block", { width: 1, height: 1 })).toEqual({ width: 512, height: 512 });
  });
});
