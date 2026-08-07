import { defineConfig } from 'astro/config';
import { kyro } from '@kyro-cms/core';
import { kyroAdmin } from "@kyro-cms/admin";
import react from '@astrojs/react';
import tailwind from '@tailwindcss/vite';
import node from '@astrojs/node';

export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
  integrations: [
    react(),
    kyro({ adminPath: '/admin', apiPath: '/api' }),
    kyroAdmin({ basePath: '/admin', apiPath: '/api' })
  ],
  vite: {
    plugins: [
      tailwind(),
    ],
    optimizeDeps: {
      include: [],
    },
    server: {
      fs: {
        strict: false,
        allow: ['..'],
      },
    },
  },
  server: {
    port: 4321,
    host: true,
  },
  security: {
    checkOrigin: false,
  }
});
