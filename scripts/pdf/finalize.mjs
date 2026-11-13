import { readdir, readFile, writeFile, unlink, stat } from 'node:fs/promises';
import { join } from 'node:path';
import { createHash } from 'node:crypto';

const root = process.argv[2];
for (const file of ['soffice.wasm.gz', 'soffice.data.gz']) {
  const path = join(root, 'libreoffice-wasm', file);
  const bytes = await readFile(path);
  const parts = [];
  const hash = createHash('sha256');
  for (let offset = 0; offset < bytes.length; offset += 20 * 1024 * 1024) {
    const name = `${file}.part${parts.length}.bin`;
    const part = join(root, 'libreoffice-wasm', name);
    await writeFile(part, bytes.subarray(offset, offset + 20 * 1024 * 1024));
    hash.update(await readFile(part));
    parts.push(name);
  }
  const sha256 = createHash('sha256').update(bytes).digest('hex');
  if (hash.digest('hex') !== sha256) throw new Error(`Reconstruction failed: ${file}`);
  await writeFile(`${path}.chunks.json`, JSON.stringify({ parts, type: 'application/octet-stream', size: bytes.length, sha256 }));
  await unlink(path);
  console.log(`${file}: reconstruction verified`);
}
const headers = join(root, '_headers');
await writeFile(headers, (await readFile(headers, 'utf8')).replace(/^\/\*$/m, '/pdf/*').replace(/^\/docs/gm, '/pdf/docs'));
let count = 0;
async function check(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) await check(path);
    else {
      if (entry.name.endsWith('.html')) {
        const html = await readFile(path, 'utf8');
        await writeFile(path, html.replaceAll('/pdf/docs/self-hosting', 'https://www.bentopdf.com/docs/self-hosting'));
      }
      count++;
      if ((await stat(path)).size > 25 * 1024 * 1024) throw new Error(`Asset exceeds 25 MiB: ${path}`);
    }
  }
}
await check(root);
console.log(`${count} files verified below 25 MiB`);
