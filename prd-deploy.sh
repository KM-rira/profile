#!/usr/bin/env bash
set -euo pipefail

: "${MY_DOMAIN:?MY_DOMAIN is required (e.g. kmdigital.xyz)}"

SRC="${HOME}/repo/profile/index.html"
DST_DIR="/var/www/${MY_DOMAIN}/profile"
DST="${DST_DIR}/index.html"

echo "[deploy] copy ${SRC} -> ${DST}"

# ディレクトリが無いと cp が落ちるので作る
sudo mkdir -p "${DST_DIR}"

# 原子コピー（途中で壊れたファイルが出ない）
tmp="$(mktemp)"
cp "${SRC}" "${tmp}"
sudo mv "${tmp}" "${DST}"

# 権限：全部chown/chmodするとデカい構成で遅いので必要最小限
sudo chown -R caddy:caddy "/var/www/${MY_DOMAIN}" || true

# 755を丸ごとは雑に強いので、dirだけ755、ファイルは644がおすすめ
sudo find "/var/www/${MY_DOMAIN}" -type d -exec chmod 755 {} \;
sudo find "/var/www/${MY_DOMAIN}" -type f -exec chmod 644 {} \;

# Caddy設定反映
sudo caddy fmt --overwrite /etc/caddy/Caddyfile
sudo caddy validate --config /etc/caddy/Caddyfile
sudo systemctl reload caddy

echo "[deploy] done"
echo "${MY_DOMAIN_URL}/profile"
