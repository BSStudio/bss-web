FROM mcr.microsoft.com/playwright:focal

USER pwuser
RUN mkdir /home/pwuser/app
RUN chown pwuser /home/pwuser/app
WORKDIR /home/pwuser/app

COPY --chown=pwuser package*.json ./

ARG INSTALL_ARGS="--no-fund --no-audit --loglevel warn"
RUN npm install $INSTALL_ARGS

COPY --chown=pwuser ./ ./

CMD ["npm", "test", "--", "--config=playwright.ci.config.ts"]
