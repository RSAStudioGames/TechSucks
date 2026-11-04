#!/usr/bin/env bash
set -euo pipefail
site_root=$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)
source_dir=${BENTOPDF_SOURCE:-"$site_root/bentopdf"}
revision=ce634e174cfdb73e2ec48adc5e7c8e589b85621e
if [[ ! -d "$source_dir" ]]; then
  git clone https://github.com/alam00000/bentopdf.git "$source_dir"
  git -C "$source_dir" checkout --detach "$revision"
fi
cd "$source_dir"
if [[ ! -d node_modules ]]; then
  npm ci --allow-remote=root
fi
node "$site_root/scripts/pdf/prepare.mjs" "$source_dir"
BASE_URL=/pdf/ SIMPLE_MODE=true COMPRESSION_MODE=o npm run build
node "$site_root/scripts/pdf/finalize.mjs" "$source_dir/dist"
# Keep license, exact upstream revision, and the local adaptations available.
cp LICENSE dist/LICENSE
mkdir -p dist/source
cp "$site_root/scripts/pdf/"{build.sh,prepare.mjs,finalize.mjs,fetch-chunks.ts} dist/source/
git rev-parse HEAD > dist/source/upstream-revision.txt
# Cloudflare consumes headers at the deployment root, scoped to this app.
python3 - "$site_root" "$source_dir" <<'PY'
from pathlib import Path
import sys
site, source = map(Path, sys.argv[1:])
headers = site / 'static/_headers'
start, end = '# BEGIN BENTOPDF', '# END BENTOPDF'
old = headers.read_text() if headers.exists() else ''
if start in old:
    before, rest = old.split(start, 1)
    _, after = rest.split(end, 1)
    old = before + after.lstrip('\n')
rules = (source / 'dist/_headers').read_text().splitlines()
rules = ['/pdf' + line if line.startswith('/') else line for line in rules]
headers.write_text(old.rstrip() + '\n' + start + '\n' + '\n'.join(rules) + '\n' + end + '\n')
(source / 'dist/_headers').unlink()
PY
# Replace only this generated application's output to avoid stale chunks.
node - "$site_root/static/pdf" "$source_dir/dist" <<'JS'
const fs = require('node:fs');
const [dest, source] = process.argv.slice(2);
fs.rmSync(dest, { recursive: true, force: true });
fs.cpSync(source, dest, { recursive: true });
JS
printf 'BentoPDF published to %s/static/pdf/; Hugo copies it to public/pdf/.\n' "$site_root"
