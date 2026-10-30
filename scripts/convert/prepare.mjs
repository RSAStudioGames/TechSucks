import { readFile, writeFile, copyFile } from 'node:fs/promises';
import { resolve } from 'node:path';
const root = process.argv[2];
async function replace(path, before, after) {
  const target = resolve(root, path);
  const text = await readFile(target, 'utf8');
  if (text.split(before).length !== 2) throw new Error(`Expected one match in ${path}`);
  await writeFile(target, text.replace(before, after));
}
await copyFile(new URL('./fetchChunks.ts', import.meta.url), resolve(root, 'src/common/fetchChunks.ts'));
await replace('src/common/index.ts', 'export async function fetchGzip(url: string, type = ""): Promise<Response> {\n  const response = await fetch(url);', 'export async function fetchGzip(url: string, type = "", fetcher: (url: string) => Promise<Response> = fetch): Promise<Response> {\n  const response = await fetcher(url);');
await replace('src/handlers/clang.ts', 'import Formats from "src/Formats.ts";', 'import Formats from "src/Formats.ts";\nimport { fetchChunks } from "src/common/fetchChunks.ts";');
await replace('src/handlers/clang.ts', 'fetchGzip(wasmUrl, "application/wasm")', 'fetchGzip(wasmUrl, "application/wasm", fetchChunks)');
await replace('src/handlers/typst.ts', 'import Formats from "src/Formats.ts";', 'import Formats from "src/Formats.ts";\nimport { fetchChunks } from "src/common/fetchChunks.ts";');
await replace('src/handlers/typst.ts', 'getModule: () => typstCompilerWasmUrl,', 'getModule: () => fetchChunks(typstCompilerWasmUrl),');
await replace('built/pandoc-js/pandoc.js', 'import pandocWasmUrl from "built/pandoc/pandoc.wasm?url";', 'import pandocWasmUrl from "built/pandoc/pandoc.wasm?url";\nimport { fetchChunks } from "../../src/common/fetchChunks.ts";');
await replace('built/pandoc-js/pandoc.js', 'fetch(pandocWasmUrl)', 'fetchChunks(pandocWasmUrl)');
