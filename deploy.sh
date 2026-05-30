#!/usr/bin/env bash
#
# deploy.sh — push the bikefit.me static site to a server and serve it with nginx.
#
# Run this from your OWN machine (it needs an ssh client + your private key).
# It cannot run from the Claude Code web container, which has no ssh client
# and no outbound network access.
#
# Usage:
#   chmod +x deploy.sh
#   ./deploy.sh
#
# Override any of these with environment variables, e.g.:
#   HOST=185.227.111.59 PORT=8822 USER=root KEY=~/.ssh/id_ed25519 ./deploy.sh
#
set -euo pipefail

HOST="${HOST:-185.227.111.59}"
PORT="${PORT:-8822}"
USER="${USER:-root}"
KEY="${KEY:-$HOME/.ssh/bikefit_deploy}"   # path to your private key
WEBROOT="${WEBROOT:-/var/www/bikefit}"
SERVER_NAME="${SERVER_NAME:-_}"            # e.g. bikefit.me — defaults to catch-all

SSH="ssh -i $KEY -p $PORT -o StrictHostKeyChecking=accept-new $USER@$HOST"
SCP="scp -i $KEY -P $PORT -o StrictHostKeyChecking=accept-new"

here="$(cd "$(dirname "$0")" && pwd)"

echo ">> Creating web root $WEBROOT on $HOST ..."
$SSH "mkdir -p '$WEBROOT'"

echo ">> Copying site files ..."
$SCP "$here/index.html" "$here/styles.css" "$here/script.js" "$USER@$HOST:$WEBROOT/"

echo ">> Installing & configuring nginx ..."
$SSH "bash -s" <<EOF
set -e
if ! command -v nginx >/dev/null 2>&1; then
  if command -v apt-get >/dev/null 2>&1; then
    apt-get update -y && apt-get install -y nginx
  elif command -v dnf >/dev/null 2>&1; then
    dnf install -y nginx
  elif command -v yum >/dev/null 2>&1; then
    yum install -y nginx
  fi
fi

cat > /etc/nginx/conf.d/bikefit.conf <<NGINX
server {
    listen 80;
    listen [::]:80;
    server_name $SERVER_NAME;
    root $WEBROOT;
    index index.html;
    location / { try_files \\\$uri \\\$uri/ /index.html; }
}
NGINX

# Drop the stock default site if present so ours wins on port 80.
rm -f /etc/nginx/sites-enabled/default 2>/dev/null || true

nginx -t
systemctl enable nginx 2>/dev/null || true
systemctl restart nginx 2>/dev/null || service nginx restart || nginx -s reload

# Open the firewall for HTTP if a firewall is active.
if command -v ufw >/dev/null 2>&1 && ufw status | grep -qi active; then
  ufw allow 80/tcp || true
fi
if command -v firewall-cmd >/dev/null 2>&1 && firewall-cmd --state >/dev/null 2>&1; then
  firewall-cmd --permanent --add-service=http || true
  firewall-cmd --reload || true
fi
EOF

echo ">> Done. Visit: http://$HOST/"
