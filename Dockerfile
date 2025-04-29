FROM node:23-slim

RUN mkdir /app
WORKDIR /app

COPY ea-graveyard/package.json /app/

RUN npm install -g npm@11.3.0

ENV NODE_ENV=development
EXPOSE 8080
EXPOSE 9323
RUN npm install
CMD ["npm", "run","dev"]