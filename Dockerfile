FROM node:16-alpine as base

USER node:node
RUN mkdir /home/node/app
RUN chown node:node /home/node/app
WORKDIR /home/node/app

COPY --chown=node ./package*.json ./
ARG INSTALL_ARGS="--production --no-fund --no-audit"
RUN npm clean-install $INSTALL_ARGS

FROM base as build
ARG INSTALL_DEV_ARGS="--no-fund --no-audit"
RUN npm install $INSTALL_DEV_ARGS
COPY --chown=node ./ ./
RUN npm run build:ssr

FROM base as app
COPY --from=build --chown=node /home/node/app/dist ./dist
EXPOSE 4000
ENTRYPOINT npm run serve:ssr
