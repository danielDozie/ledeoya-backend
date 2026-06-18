// Kyro CMS configuration for the Ledeoya site.
// Defines the Drizzle adapter, admin overrides, collections, globals, and auth settings.
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
    // Adapter config: connect Kyro CMS to the database using Drizzle ORM.
    adapter: createDrizzleAdapter({
      // This is backend-only and is not shown in the admin UI.
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
      //testimonialsCollection,
      messagesCollection,
    ],
    // Add global settings fields from Kyro core templates.
    // These appear in the admin globals/settings area, not inside a single collection.
    globals: [...coreSettingsGlobals],
    // Auth secret for CMS session signing; backend-only and not visible in the UI.
    auth: {
      secret: process.env.APP_SECRET,
    },
});
