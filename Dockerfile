FROM node:17-alpine as base

USER node:node
RUN mkdir /home/node/app
RUN chown node:node /home/node/app
WORKDIR /home/node/app

COPY --chown=node ./package*.json ./
ARG INSTALL_ARGS="--production --no-fund --no-audit --ignore-scripts"
RUN npm clean-install $INSTALL_ARGS

FROM base as build
ARG INSTALL_DEV_ARGS="--no-fund --no-audit --ignore-scripts"
RUN npm install $INSTALL_DEV_ARGS
COPY --chown=node ./ ./
RUN npm run build:ssr

FROM base as app
COPY --from=build --chown=node /home/node/app/dist ./dist
HEALTHCHECK --interval=5s --timeout=5s --retries=3 \
    CMD wget -nv -t1 --spider 'http://localhost:4000/health' || exit 1
EXPOSE 4000
ENTRYPOINT ["npm", "run", "serve:ssr"]
