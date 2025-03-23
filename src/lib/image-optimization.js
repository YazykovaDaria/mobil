import sharp from 'sharp';
import { readdirSync } from 'fs';
import { join, extname, basename, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const inputDir = join(__dirname, './img');
const outputDir = join(__dirname, '../../public/images');


async function optimizeImages() {
  const files = readdirSync(inputDir);

  for (const file of files) {
    const filePath = join(inputDir, file);
    const ext = extname(file).toLowerCase();

    if (['.jpg', '.jpeg', '.png'].includes(ext)) {
      const fileName = basename(file, ext);

      await sharp(filePath)
        .webp({ quality: 80 })
        .toFile(join(outputDir, `${fileName}.webp`));

      await sharp(filePath)
        .avif({ quality: 80 })
        .toFile(join(outputDir, `${fileName}.avif`));

        await sharp(filePath)
        .resize(1200)
        .jpeg({ quality: 80 })
        .toFile(join(outputDir, `${fileName}.jpg`));
    }
  }
}

optimizeImages().catch(console.error);
