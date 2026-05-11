FROM node:26-alpine AS builder

WORKDIR /sources

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM node:26-alpine AS staging

WORKDIR /app

COPY --from=builder /sources/package.json /sources/package-lock.json ./
COPY --from=builder /sources/tsconfig.json /sources/tsconfig.build.json ./
COPY --from=builder /sources/dist ./dist

ENV NODE_ENV=development

RUN npm ci

EXPOSE 8080

CMD ["node", "./dist/main.js"]

FROM node:26-alpine AS production

WORKDIR /app

COPY --from=builder /sources/package.json /sources/package-lock.json ./
COPY --from=builder /sources/tsconfig.json /sources/tsconfig.build.json ./
COPY --from=builder /sources/dist ./dist

ENV NODE_ENV=production

RUN npm ci --omit=dev && \
	npm cache clean --force && \
	rm -rf /tmp/* /var/tmp/* /var/cache/*

EXPOSE 8080

CMD ["node", "./dist/main.js"]
