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
    kyro({ adminPath: '/admin', apiPath: '/api'}), 
    kyroAdmin({ basePath: '/admin', apiPath: '/api' })
  ],
  vite: {
    plugins: [
      tailwind()
    ],
    ssr: {
      noExternal: [
        "@tiptap/core", "@tiptap/react", "@tiptap/pm", "@tiptap/starter-kit",
        "@tiptap/extension-link", "@tiptap/extension-image", "@tiptap/extension-text-align",
        "@tiptap/extension-underline", "@tiptap/extension-highlight",
        "@tiptap/extension-task-list", "@tiptap/extension-task-item",
        "@tiptap/extension-text-style", "@tiptap/extension-color",
        "prosemirror-model", "prosemirror-state", "prosemirror-view",
        "prosemirror-schema-list", "prosemirror-commands", "prosemirror-keymap",
        "prosemirror-transform", "prosemirror-inputrules",
      ],
      external: ["better-sqlite3", "pg", "mongodb", "ioredis", "sharp"],
    },
    optimizeDeps: {
      include: [
        "@kyro-cms/admin",
        "lowlight", "highlight.js", "highlight.js/lib/core", "highlight.js/lib/languages/*",
      ],
    },
  },
  server: {
    port: 4321,
    host: true,
  },
});
