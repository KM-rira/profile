#!/usr/bin/env bash
set -euo pipefail

: "${MY_DOMAIN:?MY_DOMAIN is required (e.g. kmdigital.xyz)}"

SRC_DIR="${HOME}/repo/profile"
DST_DIR="/var/www/${MY_DOMAIN}/profile"

echo "[deploy] sync ${SRC_DIR} -> ${DST_DIR}"

sudo mkdir -p "${DST_DIR}"

# index.html を原子的に反映
tmp="$(mktemp)"
cp "${SRC_DIR}/index.html" "${tmp}"
sudo mv "${tmp}" "${DST_DIR}/index.html"

# assets があれば同期
if [ -d "${SRC_DIR}/assets" ]; then
  sudo mkdir -p "${DST_DIR}/assets"
  sudo rsync -av --delete "${SRC_DIR}/assets/" "${DST_DIR}/assets/"
fi

# 権限
sudo chown -R caddy:caddy "/var/www/${MY_DOMAIN}" || true
sudo find "/var/www/${MY_DOMAIN}" -type d -exec chmod 755 {} \;
sudo find "/var/www/${MY_DOMAIN}" -type f -exec chmod 644 {} \;

# Caddy設定反映
sudo caddy fmt --overwrite /etc/caddy/Caddyfile
sudo caddy validate --config /etc/caddy/Caddyfile
sudo systemctl reload caddy

echo "[deploy] done"
echo "https://${MY_DOMAIN}/profile/"
