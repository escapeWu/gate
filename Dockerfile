# Install dependencies only when needed
FROM node:18.20.0-alpine AS deps

WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npx pnpm install

# Rebuild the source code only when needed
# This is where because may be the case that you would try
# to build the app based on some `X_TAG` in my case (Git commit hash)
# but the code hasn't changed.
FROM node:18.20.0-alpine AS builder

ENV NODE_ENV=production
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build

# Production image, copy all the files and run next
FROM node:18.20.0-alpine AS runner

ARG X_TAG
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
CMD ["node_modules/.bin/next", "start"]