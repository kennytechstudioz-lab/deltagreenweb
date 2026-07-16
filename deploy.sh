#!/bin/bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

echo "Deploying Delta Web..."
npm install
npm run build
pm2 restart delta-web || pm2 start npm --name "delta-web" -- run start
echo "Delta Web deployed successfully!"
