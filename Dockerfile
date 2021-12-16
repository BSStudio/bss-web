FROM node:16-alpine

WORKDIR /home/node/app

COPY ./package*.json ./
RUN npm install

COPY ./ ./
RUN npm run build:ssr

EXPOSE 4000
ENTRYPOINT npm run serve:ssr
