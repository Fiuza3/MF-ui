const HEADER_BYTES = 6;
const ENTRY_BYTES = 16;

// Largura/altura 0 significa 256 no formato ICO (o campo tem 1 byte).
const dimensionByte = (size) => (size >= 256 ? 0 : size);

function entryOf({ size, png }, offset) {
  const entry = Buffer.alloc(ENTRY_BYTES);
  entry.writeUInt8(dimensionByte(size), 0);
  entry.writeUInt8(dimensionByte(size), 1);
  entry.writeUInt16LE(1, 4);
  entry.writeUInt16LE(32, 6);
  entry.writeUInt32LE(png.length, 8);
  entry.writeUInt32LE(offset, 12);
  return entry;
}

/**
 * ICO com PNGs embutidos (suportado desde o Windows Vista e por todos os navegadores).
 * @param {{ size: number, png: Buffer }[]} images
 * @returns {Buffer}
 */
export function encodeIco(images) {
  const header = Buffer.alloc(HEADER_BYTES);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(images.length, 4);
  let offset = HEADER_BYTES + ENTRY_BYTES * images.length;
  const entries = images.map((image) => {
    const entry = entryOf(image, offset);
    offset += image.png.length;
    return entry;
  });
  return Buffer.concat([header, ...entries, ...images.map((image) => image.png)]);
}
