FROM node:22-bullseye-slim AS build

WORKDIR /app

ENV PNPM_HOME="/home/node/.local/share/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN apt-get update \
  && apt-get install -y --no-install-recommends python3 build-essential \
  && rm -rf /var/lib/apt/lists/*

RUN corepack enable && corepack prepare pnpm@9 --activate

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --no-frozen-lockfile

COPY . .
RUN pnpm build

FROM node:22-bullseye-slim AS runtime
WORKDIR /app

ENV PNPM_HOME="/home/node/.local/share/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

COPY --from=build /app /app

ENV NODE_ENV=production

EXPOSE 4321
CMD ["pnpm", "preview", "--host", "0.0.0.0", "--port", "4321"]
