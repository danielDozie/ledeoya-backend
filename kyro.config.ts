// Kyro CMS configuration for the Ledeoya site.
import { createDrizzleAdapter, templateCollections, coreGlobalSettings, defineKyroConfig } from "@kyro-cms/core";
import { messagesCollection } from "@/ledeoyaCollections/messages";
import { servicesCollection } from "@/ledeoyaCollections/services";
import { destinationsCollection } from "@/ledeoyaCollections/destination";
import { tripsCollection } from "@/ledeoyaCollections/trips";
import { AiAssistantPlugin, AiAutoSeoPlugin } from "@kyro-cms/ai";
import { createGroq } from '@ai-sdk/groq';

const groq = createGroq({
  apiKey: process.env.GROQ_API_KEY,
});

export default defineKyroConfig({
  // Adapter config: connect Kyro CMS to the database using Drizzle ORM.
  adapter: createDrizzleAdapter({
    type: 'postgres',
    connectionString: process.env.DATABASE_URL,
  }),
  admin: {
    collectionOverrides: {
      // Customize admin sidebar and field behavior for the built-in pages collection.
      pages: {
        icon: "FileText",
        fields: {
          "content.recentFeed.selectedItems": {
            relationTo: ["posts", "trips", "destinations", "services"],
          },
        },
      },
      // Set a custom icon for the posts collection in the admin sidebar.
      posts: { icon: "Newspaper" },
      // Configure menu item targets in the admin menu editor.
      menu: {
        fields: {
          "menu.menuItem.internalTarget": {
            relationTo: ["pages", "posts", "trips", "destinations", "services"],
          },
        },
      },
    },
  },
  // Register site-specific content collections visible in the Kyro admin.
  collections: [
    ...templateCollections.starter,
    tripsCollection,
    destinationsCollection,
    servicesCollection,
    messagesCollection,
  ],
  // Add global settings fields from Kyro core templates.
  // These appear in the admin globals/settings area, not inside a single collection.
  globals: [...coreGlobalSettings],
  // Auth secret for CMS session signing; backend-only and not visible in the UI.
  auth: {
    secret: process.env.APP_SECRET,
  },
  plugins: [
    new AiAutoSeoPlugin({
      collections: ['posts', 'pages'],
      provider: groq,
      modelName: 'llama-3.3-70b-versatile',
    }),
    new AiAssistantPlugin({
      provider: groq,
      modelName: 'llama-3.1-8b-instant',
    })
  ],
});
