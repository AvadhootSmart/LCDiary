FROM ghcr.io/puppeteer/puppeteer:19.7.2

# Environment variables for Puppeteer
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/google-chrome-stable

WORKDIR /usr/src/app

COPY --chown=pptruser:pptruser package*.json ./

USER pptruser

RUN npm install && npm ci

COPY --chown=pptruser:pptruser . .


EXPOSE 3000 

CMD [ "node", "index.js" ]
