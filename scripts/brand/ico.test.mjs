import { describe, expect, it } from "vitest";
import { encodeIco } from "./ico.mjs";

const fakePng = (size, fill) =>
  Buffer.concat([Buffer.from([0x89, 0x50, 0x4e, 0x47]), Buffer.alloc(size, fill)]);

describe("encodeIco", () => {
  const images = [
    { size: 16, png: fakePng(10, 1) },
    { size: 32, png: fakePng(20, 2) },
    { size: 256, png: fakePng(30, 3) },
  ];
  const ico = encodeIco(images);

  it("escreve o cabeçalho ICONDIR", () => {
    expect(ico.readUInt16LE(0)).toBe(0);
    expect(ico.readUInt16LE(2)).toBe(1);
    expect(ico.readUInt16LE(4)).toBe(3);
  });

  it("aponta cada entrada para o offset certo, com tamanho e dimensões", () => {
    let expected = 6 + 16 * 3;
    images.forEach((image, index) => {
      const base = 6 + 16 * index;
      expect(ico.readUInt32LE(base + 12)).toBe(expected);
      expect(ico.readUInt32LE(base + 8)).toBe(image.png.length);
      expected += image.png.length;
    });
    expect(ico.readUInt8(6)).toBe(16);
    expect(ico.readUInt8(6 + 32)).toBe(0);
  });

  it("preserva os bytes dos PNGs", () => {
    images.forEach((image, index) => {
      const offset = ico.readUInt32LE(6 + 16 * index + 12);
      expect(ico.subarray(offset, offset + image.png.length).equals(image.png)).toBe(true);
    });
  });
});
