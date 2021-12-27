FROM mcr.microsoft.com/playwright:focal

USER pwuser
RUN mkdir /home/pwuser/app
RUN chown pwuser /home/pwuser/app
WORKDIR /home/pwuser/app

COPY --chown=pwuser package*.json ./

RUN npm install --no-fund --no-audit

COPY --chown=pwuser ./ ./

CMD ["npm", "test", "--", "--config=playwright.ci.config.ts"]
