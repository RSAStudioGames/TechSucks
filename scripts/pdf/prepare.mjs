import { copyFile, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = process.argv[2];
const loader = resolve(root, 'src/js/utils/libreoffice-loader.ts');
let source = await readFile(loader, 'utf8');
const target = 'const response = await fetch(url);';
if (source.split(target).length !== 2) throw new Error('LibreOffice loader changed upstream');
source = "import { fetchChunks } from './fetchChunks';\n" + source.replace(target, 'const response = await fetchChunks(url);');
await writeFile(loader, source);
await copyFile(new URL('./fetchChunks.ts', import.meta.url), resolve(root, 'src/js/utils/fetchChunks.ts'));
