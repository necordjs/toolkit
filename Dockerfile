FROM node:16-alpine3.14 as base

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile \
    && yarn cache clean

COPY . .

ENTRYPOINT ["yarn", "start"]
