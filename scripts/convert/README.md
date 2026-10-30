# Converter build

The converter at `/convert/` is built from p2r3/convert revision
`6ed815faf5e90d0bb3eae143f084b452e62dce83`.

Requirements: Git, Bun 1.4.0 or compatible, internet access, and the native
archive utilities used by upstream's assembly scripts. Build from the site root:

```sh
bash scripts/convert/build.sh
```

This installs locked upstream dependencies in a temporary directory, downloads
pinned conversion engines, applies `prepare.mjs`, runs TypeScript and Vite,
splits the three large assets into 20 MiB pieces, verifies SHA-256 reconstruction
and the 25 MiB per-file limit, and copies output into `static/convert/`.
Hugo copies that directory to `public/convert/` on the next site build.
The normal Hugo build does not rebuild the converter.

`fetchChunks.ts` reconstructs each asset as a response stream. Typst and Pandoc
consume WASM responses; LLVM decompresses the reconstructed gzip stream before
compilation. Failed chunk requests fail the load rather than supplying partial
bytes. Relative chunk URLs preserve hosting under `/convert/`.

Upstream includes a service worker for cross-origin isolation. Serve over HTTPS
or localhost. Format cache generation remains optional, as in upstream.

Upstream source and license:
https://github.com/p2r3/convert/tree/6ed815faf5e90d0bb3eae143f084b452e62dce83

The original GPL-2.0 license is included in `static/convert/LICENSE`. Local
loader code and modifications in this directory are distributed under GPL-2.0.
The local adaptation was implemented with Codex.
