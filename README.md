Set up new server
==================

## Install NodeJS v16.x
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs

## Install the Yarn package manager, run:
curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | gpg --dearmor | sudo tee /usr/share/keyrings/yarnkey.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/yarnkey.gpg] https://dl.yarnpkg.com/debian stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update && sudo apt-get install yarn

## Install Pg for nodejs
yarn add pg
text-to-svg
yarn global add pm2

# Install PostgresSQL
sudo apt install postgresql postgresql-contrib
sudo systemctl start postgresql.service
pg_ctlcluster 12 main start

sudo -i -u postgres
psql
ALTER USER postgres PASSWORD 'Gadetrung123!@#';
\q
createdb strapi

# Install Strapi
yarn build
pm2 start ecosystem.config.js

# Build and rund NextJS
yarn & yarn build
## Add production cho nextjs in next.config.js eslint
pm2 start yarn --name "nextjs" --interpreter bash -- start