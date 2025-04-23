FROM node:23-slim

RUN mkdir /app
WORKDIR /app

ENV NODE_ENV=development
EXPOSE 8080
RUN npm install -g npm@11.3.0