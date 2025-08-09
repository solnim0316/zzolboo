import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');
const publicDir = path.join(root, 'public');

const src = path.join(publicDir, 'images', 'logo', 'logo.webp');
const iconsDir = path.join(publicDir, 'icons');

async function ensureDir(dir) {
  await fsPromises.mkdir(dir, { recursive: true }).catch(() => {});
}

import { promises as fsPromises } from 'fs';

async function generate() {
  await ensureDir(iconsDir);

  const transparent = { r: 0, g: 0, b: 0, alpha: 0 };

  const tasks = [
    { out: path.join(iconsDir, 'icon-512.png'), size: 512 },
    { out: path.join(iconsDir, 'icon-192.png'), size: 192 },
    { out: path.join(iconsDir, 'favicon-32.png'), size: 32 },
    { out: path.join(iconsDir, 'favicon-16.png'), size: 16 },
    { out: path.join(publicDir, 'apple-touch-icon.png'), size: 180 },
  ];

  for (const { out, size } of tasks) {
    await sharp(src)
      .resize(size, size, { fit: 'contain', background: transparent })
      .png()
      .toFile(out);
    console.log(`✅ generated: ${path.relative(publicDir, out)} (${size}x${size})`);
  }

  console.log('🎉 all icons generated');
}

generate().catch((e) => {
  console.error('❌ icon generation failed', e);
  process.exit(1);
});


