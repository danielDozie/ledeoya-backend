FROM node:22-bullseye-slim AS base

WORKDIR /app

ENV PNPM_HOME="/home/node/.local/share/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable && corepack prepare pnpm@9 --activate
RUN apt-get update \
  && apt-get install -y --no-install-recommends python3 build-essential \
  && rm -rf /var/lib/apt/lists/*

FROM base AS deps
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

FROM base AS build
COPY --from=deps /app/node_modules ./node_modules

COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm build

FROM node:22-bullseye-slim AS runtime
WORKDIR /app

ENV PNPM_HOME="/home/node/.local/share/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable && corepack prepare pnpm@9 --activate

COPY --from=build /app/dist ./dist
COPY --from=deps /app/node_modules ./node_modules

EXPOSE 4321
CMD ["pnpm", "preview", "--host", "0.0.0.0", "--port", "4321"]
