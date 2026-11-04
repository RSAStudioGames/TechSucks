// SPDX-License-Identifier: AGPL-3.0-only
export async function fetchChunkedAsset(url: string): Promise<Response> {
  const metadata = await fetch(`${url}.chunks.json`);
  if (!metadata.ok) throw new Error(`Failed to fetch ${url} manifest: HTTP ${metadata.status}`);
  const { chunks } = await metadata.json() as { chunks: { name: string; size: number }[] };
  if (!Array.isArray(chunks) || chunks.length === 0) throw new Error(`Invalid chunk manifest: ${url}`);
  const parts: Blob[] = [];
  for (const chunk of chunks) {
    if (!/^[\w.-]+$/.test(chunk.name) || !Number.isSafeInteger(chunk.size) || chunk.size <= 0) {
      throw new Error(`Invalid chunk entry: ${url}`);
    }
    const partUrl = url.slice(0, url.lastIndexOf('/') + 1) + chunk.name;
    const response = await fetch(partUrl);
    if (!response.ok) throw new Error(`Failed to fetch ${partUrl}: HTTP ${response.status}`);
    const part = await response.blob();
    if (part.size !== chunk.size) throw new Error(`Incomplete chunk: ${partUrl}`);
    parts.push(part);
  }
  return new Response(new Blob(parts));
}
