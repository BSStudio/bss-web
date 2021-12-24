FROM node:16-alpine as base

USER node:node
WORKDIR /home/node

COPY --chown=node ./package*.json ./
ARG INSTALL_ARGS="--no-fund --no-audit --production"
RUN npm clean-install $INSTALL_ARGS

FROM base as build
RUN npm install --no-fund --no-audit
COPY --chown=node ./ ./
RUN npm run build:ssr

FROM base
COPY --from=build /home/node/dist ./dist
EXPOSE 4000
ENTRYPOINT npm run serve:ssr
