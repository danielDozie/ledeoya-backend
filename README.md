# Ledeoya

A custom Astro site with Kyro CMS integration, React support, Tailwind CSS, and Vite.

## Overview

`ledeoya` is an Astro project that uses Kyro CMS for data management and content collections. The site runs on `localhost:4321` and exposes a CMS admin dashboard at `/admin`.

### Key features

- Astro with React support via `@astrojs/react`
- Tailwind CSS integration with Vite
- Kyro CMS admin and API powered by `@kyro-cms/core` and `@kyro-cms/admin`
- Custom content collections in `src/ledeoyaCollections`
- Local Kyro package references using `file:../kyro-cms`

## Requirements

- Node.js 18+ (or compatible)
- `pnpm` (preferred)
- A valid `DATABASE_URL` and `APP_SECRET` for Kyro CMS

## Installation

Install dependencies:

```bash
pnpm install
```

If you do not have `pnpm` installed, use:

```bash
npm install -g pnpm
``` 

## Environment

Create a `.env` file in the repository root with at least the following variables:

```env
DATABASE_URL="your-database-connection-string"
APP_SECRET="your-application-secret"
```

Kyro uses these variables for database access and auth.

## Development

Start the Astro development server:

```bash
pnpm dev
```

If the Kyro packages are available locally, you can also start the Kyro dev tooling:

```bash
pnpm run kyro:dev
```

Generate types and content artifacts from Kyro configuration:

```bash
pnpm run kyro:generate
```

## Admin dashboard

Open the admin UI in a browser:

```text
http://localhost:4321/admin
```

The Kyro admin is configured with:

- `adminPath: '/admin'`
- `apiPath: '/api'`
- GraphQL, tRPC, and WebSocket support enabled

## Build & preview

Build the production site:

```bash
pnpm build
```

Preview the generated build locally:

```bash
pnpm preview
```

## Project structure

- `astro.config.mjs` — Astro configuration and Kyro integration
- `kyro.config.ts` — Kyro CMS configuration and collection registration
- `src/pages` — Astro page routes
- `src/styles/main.css` — Global CSS
- `src/ledeoyaCollections` — Kyro collection definitions
- `public/uploads/Gratis/` — Static upload assets

## Content collections

The project includes these Kyro collections:

- `trips`
- `destinations`
- `services`
- `testimonials`
- `messages`

It also uses starter content templates from Kyro.

## Kyro integration notes

The project depends on local Kyro packages in `package.json`:

- `@kyro-cms/admin: file:../kyro-cms/admin`
- `@kyro-cms/core: file:../kyro-cms`

If these paths do not exist, install or link them before running the site.

## Contributing

- Update collection definitions in `src/ledeoyaCollections` as needed.
- Run `pnpm run kyro:generate` after modifying collections.
- Use `pnpm dev` for local development and `pnpm build` before creating production artifacts.

## License

Add your project license here.

## Acknowledgements

Built with Astro, Tailwind CSS, React, and Kyro CMS.
