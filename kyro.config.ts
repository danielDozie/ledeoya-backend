import { defineKyroConfig } from "@kyro-cms/core";
import { templateCollections } from "@kyro-cms/core/templates";
import { createDrizzleAdapter } from "@kyro-cms/core";
import { coreSettingsGlobals } from "@kyro-cms/core/templates";
import { messagesCollection } from "@/ledeoyaCollections/messages";
import { testimonialsCollection } from "@/ledeoyaCollections/testimonials";
import { servicesCollection } from "@/ledeoyaCollections/services";
import { destinationsCollection } from "@/ledeoyaCollections/destination";
import { tripsCollection } from "@/ledeoyaCollections/trips";

export default defineKyroConfig({
    adapter: createDrizzleAdapter({
    connectionString: process.env.DATABASE_URL,
  }),
  admin: {
    collectionOverrides: {
      pages: { icon: "FileText"},
      posts: { icon: "Newspaper"},
      menu: {
      fields: {
        "menu.menu_item.internal_target": {
          relationTo: ["pages", "posts", "trips", "destinations", "services"]
        }
      }
    }
    },
  },
  collections: [
    ...templateCollections.starter,
    tripsCollection,
    destinationsCollection,
    servicesCollection,
    testimonialsCollection,
    messagesCollection
],
  globals: [
    ...coreSettingsGlobals, 
  ],
  auth: {
    secret: process.env.APP_SECRET,
  },
});
