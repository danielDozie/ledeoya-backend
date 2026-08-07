import { defineConfig } from 'astro/config';
import { kyro } from '@kyro-cms/core';
import { kyroAdmin } from "@kyro-cms/admin";
import react from '@astrojs/react';
import tailwind from '@tailwindcss/vite';
import node from '@astrojs/node';

// Vite plugin to fix CommonJS module.exports in @kyro-cms/admin virtual debug module for ES Module SSR target
const fixKyroDebugCjsPlugin = {
  name: 'fix-kyro-debug-cjs',
  enforce: 'pre',
  resolveId(id) {
    if (id === 'debug' || id.includes('debug/src/browser.js') || id === '\0debug-browser') {
      return '\0debug-browser-fixed';
    }
  },
  load(id) {
    if (id === '\0debug-browser-fixed') {
      return `
var module = { exports: {} };
function debug(namespace) {
  function d(...args) {}
  d.enabled = false;
  return d;
}
debug.enable = function() {};
debug.disable = function() {};
debug.enabled = function() { return false; };
debug.default = debug;
module.exports = debug;
export default debug;
`;
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
      fixKyroDebugCjsPlugin,
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
