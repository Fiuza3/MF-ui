import { describe, expect, it } from "vitest";
import { crc32, inflateRawSync } from "node:zlib";
import { encodeZip } from "./zip.mjs";

const entries = [
  { name: "svg/horizontal-cyan.svg", data: Buffer.from("<svg/>") },
  { name: "README.md", data: Buffer.from("marca <MF/> — pacote") },
];

function centralRecords(zip) {
  const endOffset = zip.length - 22;
  const count = zip.readUInt16LE(endOffset + 10);
  let cursor = zip.readUInt32LE(endOffset + 16);
  const records = [];
  for (let index = 0; index < count; index++) {
    const nameLength = zip.readUInt16LE(cursor + 28);
    records.push({
      name: zip.subarray(cursor + 46, cursor + 46 + nameLength).toString("utf8"),
      crc: zip.readUInt32LE(cursor + 16),
      compressed: zip.readUInt32LE(cursor + 20),
      offset: zip.readUInt32LE(cursor + 42),
    });
    cursor += 46 + nameLength;
  }
  return records;
}

describe("encodeZip", () => {
  it("fecha com o registro de fim do diretório central apontando todas as entradas", () => {
    const zip = encodeZip(entries);
    expect(zip.readUInt32LE(zip.length - 22)).toBe(0x06054b50);
    expect(centralRecords(zip).map((record) => record.name)).toEqual(entries.map((entry) => entry.name));
  });

  it("cada entrada descompacta no conteúdo original e confere o CRC", () => {
    const zip = encodeZip(entries);
    centralRecords(zip).forEach((record, index) => {
      expect(zip.readUInt32LE(record.offset)).toBe(0x04034b50);
      const nameLength = zip.readUInt16LE(record.offset + 26);
      const start = record.offset + 30 + nameLength;
      const data = inflateRawSync(zip.subarray(start, start + record.compressed));
      expect(data.equals(entries[index].data)).toBe(true);
      expect(record.crc).toBe(crc32(entries[index].data));
    });
  });

  it("mesmo conteúdo gera o mesmo arquivo byte a byte", () => {
    expect(encodeZip(entries).equals(encodeZip(entries))).toBe(true);
  });
});
