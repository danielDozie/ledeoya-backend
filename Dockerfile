FROM node:22-bullseye-slim AS base

WORKDIR /app

ENV PNPM_HOME="/home/node/.local/share/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable && corepack prepare pnpm@9 --activate

FROM base AS build
RUN apt-get update \
  && apt-get install -y --no-install-recommends python3 build-essential \
  && rm -rf /var/lib/apt/lists/*

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm build
RUN pnpm prune --prod

FROM node:22-bullseye-slim AS runtime
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=4321
ENV HOST=0.0.0.0

COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules

EXPOSE 4321
CMD ["node", "dist/server/entry.mjs"]
