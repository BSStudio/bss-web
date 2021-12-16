FROM node:16-alpine

USER node:node
WORKDIR /home/node

COPY --chown=node ./package*.json ./
ARG INSTALL_ARGS="--no-fund --no-audit"
RUN npm clean-install $INSTALL_ARGS

COPY --chown=node ./ ./
RUN npm run build:ssr

EXPOSE 4000
ENTRYPOINT npm run serve:ssr
