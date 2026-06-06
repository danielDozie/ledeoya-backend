FROM node:20-bullseye-slim AS build

WORKDIR /app

ENV PNPM_HOME="/home/node/.local/share/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable && corepack prepare pnpm@latest --activate

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm build

EXPOSE 4321
CMD ["pnpm", "preview", "--host", "0.0.0.0", "--port", "4321"]
