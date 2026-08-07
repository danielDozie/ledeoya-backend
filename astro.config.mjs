import { defineConfig } from 'astro/config';
import { kyro } from '@kyro-cms/core';
import { kyroAdmin } from "@kyro-cms/admin";
import react from '@astrojs/react';
import tailwind from '@tailwindcss/vite';
import node from '@astrojs/node';

// Vite plugin to fix CommonJS module.exports in @kyro-cms/admin virtual debug module for ES Module SSR target
const fixKyroDebugCjsPlugin = {
  name: 'fix-kyro-debug-cjs',
  renderChunk(code) {
    if (code.includes('module.exports = debug;')) {
      return {
        code: code.replace(
          'module.exports = debug;',
          'if (typeof module !== "undefined" && module.exports) { module.exports = debug; } export default debug;'
        ),
        map: null,
      };
    }
  },
};

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
      fixKyroDebugCjsPlugin,
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
