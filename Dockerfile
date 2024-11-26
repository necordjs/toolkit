FROM node:20-alpine3.18 as base

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile \
    && yarn cache clean

COPY . .

ENTRYPOINT ["yarn", "start"]
