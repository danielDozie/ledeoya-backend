import { defineConfig } from 'astro/config';
import { kyro } from '@kyro-cms/core';
import { kyroAdmin } from '@kyro-cms/admin';
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
    kyro({ adminPath: '/admin', apiPath: '/api', enableGraphQL: true, enableTRPC: true, enableWebSocket: true }), 
    kyroAdmin({ basePath: '/admin', apiPath: '/api' })
  ],
  vite: {
    plugins: [
      tailwind()
    ],
  },
  server: {
    port: 4321,
    host: true,
  },
});
