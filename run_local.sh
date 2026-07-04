#!/usr/bin/env sh
set -eu

PORT="${1:-8080}"
SCRIPT_DIR="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"

cd "$SCRIPT_DIR"
echo "Serving $(pwd) at http://localhost:${PORT}"
exec python3 -m http.server "$PORT"
