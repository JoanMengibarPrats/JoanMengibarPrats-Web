import sharp from 'sharp';
import { statSync, renameSync } from 'node:fs';

const WIDTH = 1200;
const HEIGHT = 630;
const MAX_BYTES = 300 * 1024;

const targets = [
  {
    src: 'public/og-bascula.jpg',
    out: 'public/og-bascula.jpg',
    label: 'og-bascula',
  },
  {
    src: 'src/assets/Firmware_extraction.webp',
    out: 'public/og-firmware.jpg',
    label: 'og-firmware',
  },
  {
    src: 'public/Foto_Perfil_About.webp',
    out: 'public/og-home.jpg',
    label: 'og-home',
  },
];

let failed = false;

for (const { src, out, label } of targets) {
  const tmp = `${out}.tmp`;

  await sharp(src)
    .resize(WIDTH, HEIGHT, { fit: 'cover', position: 'attention' })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(tmp);

  renameSync(tmp, out);

  const { width, height } = await sharp(out).metadata();
  const bytes = statSync(out).size;
  const ok = width === WIDTH && height === HEIGHT && bytes < MAX_BYTES;

  console.log(
    `${ok ? 'OK' : 'FAIL'} ${label}: ${width}x${height}, ${(bytes / 1024).toFixed(1)} KB`
  );

  if (!ok) failed = true;
}

if (failed) {
  console.error('Alguna imagen no cumple 1200x630 o supera los 300 KB');
  process.exit(1);
}
