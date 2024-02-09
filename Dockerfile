FROM node:18.19.0-alpine

RUN addgroup -S microfront && adduser -S user -G microfront
RUN apk add --no-cache tzdata
ENV TZ=Europe/Paris

WORKDIR /usr/src

COPY ./cra ./cra
COPY ./cypress-e2e ./cypress-e2e
COPY package.json .
COPY *.yaml .

RUN npm install -g pnpm \ 
    && pnpm install

WORKDIR /usr/src/cra

USER user
CMD ["pnpm", "start"]