FROM node:26-alpine AS builder

WORKDIR /sources

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:26-alpine AS runtime

WORKDIR /app

COPY --from=builder /sources/package.json /sources/package-lock.json ./
COPY --from=builder /sources/dist ./dist

EXPOSE 8080
CMD ["node", "./dist/main.js"]

FROM runtime AS staging

ENV NODE_ENV=development

RUN npm ci --ignore-scripts && \
	npm cache clean --force

FROM runtime AS production

ENV NODE_ENV=production

RUN npm ci --omit=dev --ignore-scripts && \
	npm cache clean --force && \
	rm -rf /tmp/* /var/tmp/* /var/cache/*
