# Ledeoya

A small Astro site scaffolded with Kyro CMS helpers and Tailwind/Vite tooling.

## Overview

This repository contains the `ledeoya` website built with Astro. It integrates with a local Kyro CMS (referenced via `file:../kyro-cms`) and defines content collections under `src/ledeoyaCollections` for destinations, testimonials, trips, messages, and services.

## Quick Start

### Requirements

- Node.js 18+ (or a compatible version for your environment)
- pnpm (preferred; `pnpm-lock.yaml` is included)

### Install

Install dependencies with pnpm:

```bash
pnpm install
```

If you prefer `npm` or `yarn`, use `npm install` or `yarn` instead.

### Development

Start the local dev server:

```bash
pnpm dev
```

Run the Kyro CMS dev server (for local kyro packages):

```bash
pnpm run kyro:dev
```

Generate Kyro types/content during development:

```bash
pnpm run kyro:generate
```

## Admin Dashboard

Visit [http://localhost:4321/admin](http://localhost:4321/admin) to access the admin UI. The first user to register will automatically be granted super admin privileges.

## Build & Preview

Build the site for production:

```bash
pnpm build
```

Preview the production build locally:

```bash
pnpm preview
```

## Project structure

- `astro.config.mjs` — Astro configuration
- `src/pages` — Astro pages (site routes)
- `src/styles/main.css` — Global styles
- `src/ledeoyaCollections/*` — Content collection definitions used by Kyro/collections
- `public/uploads/Gratis/` — Static upload folder (images, assets)
- `kyro.config.ts` — Kyro configuration (CMS)

## Notes on Kyro integration

This project references local Kyro packages:

- `@kyro-cms/admin` and `@kyro-cms/core` are locally linked via `file:../kyro-cms` in `package.json`.

When working with Kyro locally, ensure the `../kyro-cms` path exists and is built/linked appropriately.

## Contributing

- Open an issue or create a PR for fixes and enhancements.
- If you modify collection types in `src/ledeoyaCollections`, run `pnpm run kyro:generate` to keep generated types in sync.

## License

Add your project license here.

## Acknowledgements

Built with Astro, Tailwind, and Kyro CMS.
