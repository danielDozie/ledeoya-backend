import { defineConfig } from '@kyro-cms/core';
import { createDrizzleAdapter } from '@kyro-cms/core';
import { starterCollections, mediaCollections, authCollections } from '@kyro-cms/core/templates';
import { coreSettingsGlobals } from '@kyro-cms/core/templates';

export default defineConfig({
  name: 'ledeoya',
  prefix: '/api',
  adapter: createDrizzleAdapter({
    connectionString: process.env.DATABASE_URL,
  }),
  collections: [
    ...Object.values(starterCollections),
    ...Object.values(mediaCollections),
    ...Object.values(authCollections),
  ],
  globals: coreSettingsGlobals,
  auth: {
    secret: process.env.APP_SECRET,
  },
});