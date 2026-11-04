import assert from 'node:assert/strict';
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { resolve } from 'node:path';
import { createServer } from 'node:http';
import { createHash } from 'node:crypto';
import { createRequire } from 'node:module';
const site = resolve(import.meta.dirname, '../..');
const require = createRequire(resolve(site, 'bentopdf/package.json'));
const ts = require('typescript');
const js = ts.transpileModule(readFileSync(resolve(import.meta.dirname, 'fetch-chunks.ts'), 'utf8'), { compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ES2022 } }).outputText;
const { fetchChunkedAsset } = await import(`data:text/javascript;base64,${Buffer.from(js).toString('base64')}`);
let failure = '';
const server = createServer((req, res) => {
  const path = resolve(site, 'static', '.' + req.url);
  if (failure === 'missing' && req.url.endsWith('.part1')) { res.writeHead(404); res.end(); return; }
  if (!existsSync(path)) { res.writeHead(404); res.end(); return; }
  const data = readFileSync(path);
  res.end(failure === 'truncated' && req.url.endsWith('.part1') ? data.subarray(0, 10) : data);
});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
try {
  const origin = `http://127.0.0.1:${server.address().port}`;
  for (const name of ['soffice.wasm.gz', 'soffice.data.gz']) {
    const response = await fetchChunkedAsset(`${origin}/pdf/libreoffice-wasm/${name}`);
    const rebuilt = Buffer.from(await response.arrayBuffer());
    const original = readFileSync(resolve(site, 'bentopdf/public/libreoffice-wasm', name));
    assert.equal(createHash('sha256').update(rebuilt).digest('hex'), createHash('sha256').update(original).digest('hex'));
    const stream = new Blob([rebuilt]).stream().pipeThrough(new DecompressionStream('gzip'));
    let bytes = 0;
    for await (const part of stream) bytes += part.length;
    assert(bytes > rebuilt.length);
    console.log(`${name}: HTTP reassembly matches original, browser gzip decompression passes (${bytes} bytes)`);
  }
  const url = `${origin}/pdf/libreoffice-wasm/soffice.data.gz`;
  failure = 'missing';
  await assert.rejects(fetchChunkedAsset(url), /HTTP 404/);
  failure = 'truncated';
  await assert.rejects(fetchChunkedAsset(url), /Incomplete chunk/);
  console.log('Missing and truncated chunks correctly fail.');
  function check(dir) {
    for (const name of readdirSync(dir)) {
      const file = resolve(dir, name);
      if (statSync(file).isDirectory()) check(file);
      else assert(statSync(file).size <= 25 * 1024 * 1024, `Oversized file: ${file}`);
    }
  }
  check(resolve(site, 'static/pdf'));
  const html = readFileSync(resolve(site, 'static/pdf/index.html'), 'utf8');
  for (const [, url] of html.matchAll(/(?:src|href)="(\/pdf\/assets\/[^"?#]+)"/g)) {
    assert(existsSync(resolve(site, 'static', '.' + url)), `Missing entry asset: ${url}`);
  }
  console.log('File limits and /pdf/ entry asset paths pass.');
} finally {
  server.closeAllConnections();
  await new Promise(resolve => server.close(resolve));
}
