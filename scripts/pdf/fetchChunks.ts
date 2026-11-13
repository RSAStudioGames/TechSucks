export async function fetchChunks(url: string): Promise<Response> {
  const manifestResponse = await fetch(`${url}.chunks.json`);
  if (!manifestResponse.ok) throw new Error(`Failed to load chunks for ${url}.`);
  const manifest: { parts: string[]; type: string } = await manifestResponse.json();
  const base = new URL(url, globalThis.location.href);
  let index = 0;
  let reader: ReadableStreamDefaultReader<Uint8Array> | undefined;
  const abort = new AbortController();
  const body = new ReadableStream<Uint8Array>({
    async pull(controller) {
      try {
        while (true) {
          if (!reader) {
            if (index === manifest.parts.length) {
              controller.close();
              return;
            }
            const partUrl = new URL(manifest.parts[index++], base);
            const response = await fetch(partUrl, { signal: abort.signal });
            if (!response.ok || !response.body) throw new Error(`Failed to load ${partUrl}.`);
            reader = response.body.getReader();
          }
          const { done, value } = await reader.read();
          if (done) {
            reader.releaseLock();
            reader = undefined;
          } else {
            controller.enqueue(value);
            return;
          }
        }
      } catch (error) {
        abort.abort();
        controller.error(error);
      }
    },
    async cancel(reason) {
      abort.abort();
      await reader?.cancel(reason);
    },
  });
  return new Response(body, { headers: { 'Content-Type': manifest.type } });
}
