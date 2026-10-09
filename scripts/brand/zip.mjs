import { crc32, deflateRawSync } from "node:zlib";

// ZIP mínimo (deflate, sem criptografia, sem zip64) escrito à mão: o pacote de
// download da marca é o único uso, e uma dependência de zip só para isto é
// mais superfície do que 60 linhas de formato documentado (APPNOTE.TXT).

/** @typedef {{ name: string, data: Buffer }} ZipEntry */

const UTF8_NAMES = 0x0800;
const DEFLATE = 8;
// Data fixa (2026-01-01 00:00): o mesmo conteúdo gera o mesmo .zip byte a byte.
const DOS_DATE = ((2026 - 1980) << 9) | (1 << 5) | 1;
const DOS_TIME = 0;

function localHeader(name, crc, compressed, size) {
  const header = Buffer.alloc(30);
  header.writeUInt32LE(0x04034b50, 0);
  header.writeUInt16LE(20, 4);
  header.writeUInt16LE(UTF8_NAMES, 6);
  header.writeUInt16LE(DEFLATE, 8);
  header.writeUInt16LE(DOS_TIME, 10);
  header.writeUInt16LE(DOS_DATE, 12);
  header.writeUInt32LE(crc, 14);
  header.writeUInt32LE(compressed, 18);
  header.writeUInt32LE(size, 22);
  header.writeUInt16LE(name.length, 26);
  return Buffer.concat([header, name]);
}

function centralHeader(name, crc, compressed, size, offset) {
  const header = Buffer.alloc(46);
  header.writeUInt32LE(0x02014b50, 0);
  header.writeUInt16LE(20, 4);
  header.writeUInt16LE(20, 6);
  header.writeUInt16LE(UTF8_NAMES, 8);
  header.writeUInt16LE(DEFLATE, 10);
  header.writeUInt16LE(DOS_TIME, 12);
  header.writeUInt16LE(DOS_DATE, 14);
  header.writeUInt32LE(crc, 16);
  header.writeUInt32LE(compressed, 20);
  header.writeUInt32LE(size, 24);
  header.writeUInt16LE(name.length, 28);
  header.writeUInt32LE(offset, 42);
  return Buffer.concat([header, name]);
}

function endOfCentral(count, size, offset) {
  const end = Buffer.alloc(22);
  end.writeUInt32LE(0x06054b50, 0);
  end.writeUInt16LE(count, 8);
  end.writeUInt16LE(count, 10);
  end.writeUInt32LE(size, 12);
  end.writeUInt32LE(offset, 16);
  return end;
}

/** @param {ZipEntry[]} entries */
export function encodeZip(entries) {
  const locals = [];
  const centrals = [];
  let offset = 0;
  for (const entry of entries) {
    const name = Buffer.from(entry.name.replace(/\\/g, "/"), "utf8");
    const body = deflateRawSync(entry.data, { level: 9 });
    const crc = crc32(entry.data);
    const local = Buffer.concat([localHeader(name, crc, body.length, entry.data.length), body]);
    centrals.push(centralHeader(name, crc, body.length, entry.data.length, offset));
    locals.push(local);
    offset += local.length;
  }
  const central = Buffer.concat(centrals);
  return Buffer.concat([...locals, central, endOfCentral(entries.length, central.length, offset)]);
}
