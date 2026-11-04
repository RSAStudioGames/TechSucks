import { readFileSync, writeFileSync, copyFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const source = resolve(process.argv[2]);
const scripts = dirname(fileURLToPath(import.meta.url));
const loader = resolve(source, 'src/js/utils/libreoffice-loader.ts');
let text = readFileSync(loader, 'utf8');
if (!text.includes("import { fetchChunkedAsset }")) {
  if (!text.includes('const response = await fetch(url);')) throw new Error('Upstream loader changed');
  text = "import { fetchChunkedAsset } from './fetch-chunks.js';\n" + text.replace('const response = await fetch(url);', 'const response = await fetchChunkedAsset(url);');
  writeFileSync(loader, text);
}
copyFileSync(resolve(scripts, 'fetch-chunks.ts'), resolve(source, 'src/js/utils/fetch-chunks.ts'));
