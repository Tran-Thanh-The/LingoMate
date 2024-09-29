FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN yarn install

COPY . .

RUN yarn build

RUN yarn add pm2 -g

EXPOSE 3000

CMD ["pm2-runtime", "ecosystem.config.js"]