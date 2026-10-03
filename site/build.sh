#!/usr/bin/env bash
# Builds the notes website with Quartz (https://quartz.jzhao.xyz).
#
#   site/build.sh            build into site/.build/quartz/public
#   site/build.sh --serve    build and serve at http://localhost:8080
#
# Quartz is downloaded into site/.build on first run. The vault itself is never
# modified: notes and images are staged into a copy that Quartz builds from.
set -euo pipefail

QUARTZ_VERSION="v4.5.2"

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SITE="$ROOT/site"
QUARTZ="$SITE/.build/quartz"

node_major="$(node -p 'process.versions.node.split(".")[0]' 2>/dev/null || echo 0)"
if [ "$node_major" -lt 22 ]; then
  echo "Quartz needs Node.js 22 or newer (found: $(node -v 2>/dev/null || echo none))." >&2
  exit 1
fi

if [ "$(cat "$QUARTZ/.version" 2>/dev/null)" != "$QUARTZ_VERSION" ]; then
  echo "Downloading Quartz $QUARTZ_VERSION"
  rm -rf "$QUARTZ"
  git clone --quiet --depth 1 --branch "$QUARTZ_VERSION" -c advice.detachedHead=false \
    https://github.com/jackyzha0/quartz.git "$QUARTZ"
  (cd "$QUARTZ" && npm ci --no-audit --no-fund)
  echo "$QUARTZ_VERSION" > "$QUARTZ/.version"
fi

cp "$SITE/quartz.config.ts" "$SITE/quartz.layout.ts" "$QUARTZ/"
cp "$SITE"/components/*.tsx "$QUARTZ/quartz/components/"
cp "$SITE/custom.scss" "$QUARTZ/quartz/styles/custom.scss"

# Used for "Edit on GitHub" links and links to PDFs. CI sets both; locally
# they are read from the git remote.
if [ -z "${SITE_REPO:-}" ]; then
  SITE_REPO="$(git -C "$ROOT" remote get-url origin 2>/dev/null | sed -E 's#^.*github\.com[:/]##; s#\.git$##')"
fi
if [ -z "${SITE_BRANCH:-}" ]; then
  SITE_BRANCH="$(git -C "$ROOT" symbolic-ref --short refs/remotes/origin/HEAD 2>/dev/null | sed 's#^origin/##')"
fi
export SITE_REPO="${SITE_REPO:-danieltyukov/tue-notes}"
export SITE_BRANCH="${SITE_BRANCH:-master}"

node "$SITE/prepare-content.mjs" "$ROOT" "$QUARTZ/content"

cd "$QUARTZ"
npx quartz build -d content "$@"
