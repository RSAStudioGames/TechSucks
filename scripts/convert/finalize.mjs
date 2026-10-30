import { readdir, readFile, writeFile, unlink, stat } from 'node:fs/promises';
import { join, basename } from 'node:path';
import { createHash } from 'node:crypto';
const root = process.argv[2];
const chunkSize = 20 * 1024 * 1024;
const limit = 25 * 1024 * 1024;
const expected = /^(typst_ts_web_compiler_bg-.*\.wasm|pandoc-.*\.wasm|llvm\.wasm-.*\.gz)$/;
let count = 0;
for (const entry of await readdir(join(root, 'assets'))) {
  if (!expected.test(entry)) continue;
  const path = join(root, 'assets', entry);
  const bytes = await readFile(path);
  const parts = [];
  const hash = createHash('sha256');
  for (let offset = 0; offset < bytes.length; offset += chunkSize) {
    const name = `${entry}.part${parts.length}.bin`;
    const partPath = join(root, 'assets', name);
    await writeFile(partPath, bytes.subarray(offset, offset + chunkSize));
    hash.update(await readFile(partPath));
    parts.push(name);
  }
  const sha256 = createHash('sha256').update(bytes).digest('hex');
  if (hash.digest('hex') !== sha256) throw new Error(`Reconstruction mismatch: ${entry}`);
  await writeFile(`${path}.chunks.json`, JSON.stringify({ parts, type: entry.endsWith('.gz') ? 'application/octet-stream' : 'application/wasm', size: bytes.length, sha256 }));
  await unlink(path);
  console.log(`${basename(path)}: ${parts.length} chunks, SHA-256 verified`);
  count++;
}
if (count !== 3) throw new Error(`Expected three split assets, got ${count}`);
async function check(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) await check(path);
    else if ((await stat(path)).size > limit) throw new Error(`Asset exceeds 25 MiB: ${path}`);
  }
}
await check(root);
console.log('All output assets fit the 25 MiB limit.');
