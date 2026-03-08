#!/usr/bin/env bash
set -euo pipefail

: "${MY_DOMAIN:?MY_DOMAIN is required (e.g. kmdigital.xyz)}"

APP_DIR="${HOME}/repo/profile"
BUILD_DIR="${APP_DIR}/dist"
DST_DIR="/var/www/${MY_DOMAIN}/profile"

echo "[deploy] build React app"
cd "${APP_DIR}"
bun run build

echo "[deploy] sync ${BUILD_DIR} -> ${DST_DIR}"
sudo mkdir -p "${DST_DIR}"

sudo rsync -av --delete "${BUILD_DIR}/" "${DST_DIR}/"

# 権限
sudo chown -R caddy:caddy "/var/www/${MY_DOMAIN}" || true
sudo find "/var/www/${MY_DOMAIN}" -type d -exec chmod 755 {} \;
sudo find "/var/www/${MY_DOMAIN}" -type f -exec chmod 644 {} \;

# Caddy設定反映
sudo caddy fmt --overwrite /etc/caddy/Caddyfile
sudo caddy validate --config /etc/caddy/Caddyfile
sudo systemctl reload caddy

echo "[deploy] done"
echo "${MY_DOMAIN_URL}/profile/"
