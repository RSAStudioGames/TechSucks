import { readFileSync, writeFileSync, readdirSync, statSync, unlinkSync } from 'node:fs';
import { resolve, basename } from 'node:path';
import { createHash } from 'node:crypto';
const dist = resolve(process.argv[2]);
const hash = bytes => createHash('sha256').update(bytes).digest('hex');
for (const name of ['soffice.wasm.gz', 'soffice.data.gz']) {
  const file = resolve(dist, 'libreoffice-wasm', name);
  const data = readFileSync(file);
  const chunks = [];
  const restored = [];
  for (let offset = 0; offset < data.length; offset += 20 * 1024 * 1024) {
    const part = `${file}.part${chunks.length}`;
    writeFileSync(part, data.subarray(offset, offset + 20 * 1024 * 1024));
    const bytes = readFileSync(part);
    restored.push(bytes);
    chunks.push({ name: basename(part), size: bytes.length });
  }
  if (hash(Buffer.concat(restored)) !== hash(data)) throw new Error(`Reassembly failed: ${name}`);
  writeFileSync(`${file}.chunks.json`, JSON.stringify({ sha256: hash(data), chunks }));
  unlinkSync(file);
  console.log(`${name}: ${chunks.length} chunks, SHA-256 verified`);
}
function check(dir) {
  for (const name of readdirSync(dir)) {
    const file = resolve(dir, name);
    if (statSync(file).isDirectory()) check(file);
    else if (statSync(file).size > 25 * 1024 * 1024) throw new Error(`Exceeds 25 MiB: ${file}`);
  }
}
check(dist);
console.log('All PDF assets are within the 25 MiB limit.');
