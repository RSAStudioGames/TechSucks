#!/usr/bin/env bash
set -euo pipefail
site_root=$(cd "$(dirname "$0")/../.." && pwd)
pdf_build_dir=$(mktemp -d)
trap 'rm -rf "$pdf_build_dir"' EXIT
git clone https://github.com/alam00000/bentopdf.git "$pdf_build_dir/source"
cd "$pdf_build_dir/source"
git checkout cc97429413ee13fa977d18627003b9b69e1787e6
npm ci --no-audit --no-fund --allow-remote=all
node "$site_root/scripts/pdf/prepare.mjs" "$PWD"
BASE_URL=/pdf/ npm run build
node "$site_root/scripts/pdf/finalize.mjs" "$PWD/dist"
mkdir -p "$site_root/static/pdf"
cp -a dist/. "$site_root/static/pdf/"
cp LICENSE "$site_root/static/pdf/LICENSE"
cp "$site_root/scripts/pdf/SOURCE.txt" "$site_root/static/pdf/SOURCE.txt"
cp dist/_headers "$site_root/static/_headers"
