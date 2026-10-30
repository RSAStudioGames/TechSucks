#!/usr/bin/env bash
set -euo pipefail
site_root=$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)
convert_build_dir=$(mktemp -d)
trap 'rm -rf "$convert_build_dir"' EXIT
revision=6ed815faf5e90d0bb3eae143f084b452e62dce83
git clone https://github.com/p2r3/convert "$convert_build_dir/source"
cd "$convert_build_dir/source"
git checkout --detach "$revision"
bun install --frozen-lockfile
bun run build:assemble --all
bun "$site_root/scripts/convert/prepare.mjs" "$PWD"
bun x tsc
bun x vite build
bun "$site_root/scripts/convert/finalize.mjs" "$PWD/dist"
cp LICENSE dist/LICENSE
mkdir -p "$site_root/static/convert"
cp -a dist/. "$site_root/static/convert/"
