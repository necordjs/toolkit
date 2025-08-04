FROM node:24-alpine AS builder

WORKDIR /sources

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN npm run build

FROM node:24-alpine AS staging

WORKDIR /app

COPY --from=builder /sources/package.json /sources/yarn.lock ./
COPY --from=builder /sources/tsconfig.json /sources/tsconfig.build.json ./
COPY --from=builder /sources/dist ./dist

ENV NODE_ENV=development

RUN yarn install --frozen-lockfile

EXPOSE 8080

CMD ["node", "./dist/main.js"]

FROM node:24-alpine AS production

WORKDIR /app

COPY --from=builder /sources/package.json /sources/yarn.lock ./
COPY --from=builder /sources/tsconfig.json /sources/tsconfig.build.json ./
COPY --from=builder /sources/dist ./dist

ENV NODE_ENV=production

RUN yarn install --frozen-lockfile --production && \
	yarn cache clean --force && \
	rm -rf /tmp/* /var/tmp/* /var/cache/*

EXPOSE 8080

CMD ["node", "./dist/main.js"]
