FROM node:20-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 8080

USER node

CMD [ "node", "server.js" ]
