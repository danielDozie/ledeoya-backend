// kyro.config.ts
import { defineKyroConfig } from "@kyro-cms/core";
import { templateCollections } from "@kyro-cms/core/templates";
import { createDrizzleAdapter } from "@kyro-cms/core";
import { coreSettingsGlobals } from "@kyro-cms/core/templates";

// src/ledeoyaCollections/messages.ts
var messagesCollection = {
  slug: "messages",
  label: "Messages",
  singularLabel: "Message",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "email", "subject"],
    icon: "MessageCircle"
  },
  access: {
    read: true,
    // Public/users can read
    create: false,
    // Disable creation
    update: false,
    // Disable updating
    delete: false
    // Disable deletion
  },
  fields: [
    { name: "name", type: "text", label: "Name", required: true, admin: { readOnly: true } },
    { name: "email", type: "email", label: "Email", required: true, admin: { readOnly: true } },
    { name: "subject", type: "text", label: "Subject", required: true, admin: { readOnly: true } },
    { name: "phone", type: "text", label: "Phone", admin: { readOnly: true } },
    { name: "message", type: "textarea", label: "Message", required: true, admin: { readOnly: true } },
    { name: "user_agent", type: "text", label: "User Agent", admin: { position: "sidebar", readOnly: true } }
  ]
};

// src/ledeoyaCollections/testimonials.ts
var testimonialsCollection = {
  slug: "testimonials",
  label: "Testimonials",
  singularLabel: "Testimonial",
  access: {
    read: true,
    // Public/users can read
    create: false,
    // Disable creation
    update: false,
    // Disable updating
    delete: false
    // Disable deletion
  },
  admin: {
    useAsTitle: "fullname",
    defaultColumns: ["fullname", "company"],
    icon: "MessageSquare"
  },
  fields: [
    { name: "fullname", type: "text", label: "Full Name", required: true },
    { name: "company", type: "text", label: "Company" },
    { name: "quote", type: "textarea", label: "Quote" },
    { name: "image", type: "upload", label: "Image", relationTo: "media", admin: { position: "sidebar" } },
    { name: "order", type: "number", label: "Order", admin: { position: "sidebar" } }
  ]
};

// src/ledeoyaCollections/services.ts
var servicesCollection = {
  versions: {
    drafts: true
  },
  slug: "services",
  label: "Services",
  singularLabel: "Service",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug"],
    icon: "Boxes"
  },
  fields: [
    { name: "title", type: "text", label: "Title", required: true },
    { name: "description", type: "textarea", label: "Description" },
    { name: "ServiceDetails", type: "group", label: "Service Details", fields: [
      { name: "serviceItems", type: "array", label: "Service Items", fields: [
        { name: "title", type: "text", label: "Title" },
        { name: "content", type: "textarea", label: "Content" }
      ] }
    ] },
    { name: "slug", type: "text", label: "Slug", required: true, admin: { position: "sidebar", autoGenerate: "title" } },
    { name: "image", type: "upload", label: "Image", relationTo: "media", admin: { position: "sidebar" } },
    { name: "gallery", type: "upload", label: "Gallery", hasMany: true, relationTo: "media", admin: { position: "sidebar" } }
  ]
};

// src/ledeoyaCollections/destination.ts
var destinationsCollection = {
  versions: {
    drafts: true
  },
  slug: "destinations",
  label: "Destinations",
  singularLabel: "Destination",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "country", "region"],
    icon: "TentTree"
  },
  fields: [
    { name: "title", type: "text", label: "Title", required: true },
    { name: "description", type: "textarea", label: "Description" },
    { name: "visa_requirements", type: "textarea", label: "Visa Requirements" },
    { name: "trips", type: "relationship", label: "Trips", relationTo: "trips", hasMany: true },
    { name: "slug", type: "text", label: "Slug", required: true, admin: { position: "sidebar", autoGenerate: "title" } },
    { name: "featured", type: "checkbox", label: "Featured", admin: { position: "sidebar" } },
    { name: "image", type: "upload", label: "Image", relationTo: "media", admin: { position: "sidebar" } },
    { name: "gallery", type: "upload", label: "Gallery", relationTo: "media", hasMany: true, admin: { position: "sidebar" } },
    { name: "region", type: "select", label: "Region", admin: { position: "sidebar" }, options: [{ label: "North America", value: "north-america" }, { label: "Europe", value: "europe" }, { label: "Asia", value: "asia" }, { label: "South America", value: "south-america" }, { label: "Africa", value: "africa" }, { label: "Oceania", value: "oceania" }] },
    { name: "country", type: "select", label: "Country", admin: { position: "sidebar" }, options: [{ label: "United States", value: "united-states" }, { label: "Canada", value: "canada" }, { label: "United Kingdom", value: "united-kingdom" }, { label: "Germany", value: "germany" }, { label: "France", value: "france" }, { label: "Japan", value: "japan" }, { label: "Australia", value: "australia" }, { label: "South Africa", value: "south-africa" }, { label: "Brazil", value: "brazil" }, { label: "Argentina", value: "argentina" }, { label: "Chile", value: "chile" }, { label: "Colombia", value: "colombia" }, { label: "Mexico", value: "mexico" }, { label: "India", value: "india" }, { label: "China", value: "china" }, { label: "South Korea", value: "south-korea" }, { label: "Thailand", value: "thailand" }] }
  ]
};

// src/ledeoyaCollections/trips.ts
var tripsCollection = {
  versions: {
    drafts: true
  },
  slug: "trips",
  label: "Trips",
  singularLabel: "Trip",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "category", "price", "start_date", "end_date"],
    icon: "PlaneTakeoff"
  },
  fields: [
    { name: "title", type: "text", label: "Title", required: true },
    { name: "description", type: "textarea", label: "Description" },
    { name: "itinerary", type: "array", label: "Itinerary", fields: [{ name: "day", type: "number", label: "Day" }, { name: "activities", type: "textarea", label: "Activities" }], admin: { position: "main" } },
    { name: "highlights", type: "list", label: "Highlights", admin: { position: "main" } },
    { name: "inclusions", type: "list", label: "Inclusions", admin: { position: "main" } },
    { name: "exclusions", type: "list", label: "Exclusions", admin: { position: "main" } },
    { name: "price", type: "number", label: "Price", admin: { position: "main" } },
    { name: "slug", type: "text", label: "Slug", required: true, admin: { position: "sidebar", autoGenerate: "title" } },
    { name: "category", type: "select", label: "Category", admin: { position: "sidebar" }, options: [{ label: "Adventure", value: "adventure" }, { label: "Cultural", value: "cultural" }, { label: "Relaxation", value: "relaxation" }, { label: "Family", value: "family" }, { label: "Romantic", value: "romantic" }] },
    { name: "featured", type: "checkbox", label: "Featured", admin: { position: "sidebar" } },
    { name: "marketing_label", type: "select", label: "Marketing Label", admin: { position: "sidebar" }, options: [{ label: "Best Seller", value: "best-seller" }, { label: "New Places", value: "new-places" }, { label: "Top Rated", value: "top-rated" }, { label: "Popular", value: "popular" }, { label: "Limited Time Offer", value: "limited-time-offer" }, { label: "Trending", value: "trending" }] },
    { name: "image", type: "upload", label: "Image", relationTo: "media", admin: { position: "sidebar" } },
    { name: "gallery", type: "upload", label: "Gallery", relationTo: "media", hasMany: true, admin: { position: "sidebar" } },
    { name: "destinations", type: "relationship", label: "Destinations", relationTo: "destinations", hasMany: true },
    { name: "start_date", type: "date", label: "Start Date", admin: { position: "sidebar" } },
    { name: "end_date", type: "date", label: "End Date", admin: { position: "sidebar" } }
  ]
};

// kyro.config.ts
var kyro_config_default = defineKyroConfig({
  adapter: createDrizzleAdapter({
    connectionString: process.env.DATABASE_URL
  }),
  admin: {
    collectionOverrides: {
      pages: { icon: "FileText" },
      posts: { icon: "Newspaper" },
      menu: {
        fields: {
          "menu.menu_item.internal_target": {
            relationTo: ["pages", "posts", "trips", "destinations", "services"]
          }
        }
      }
    }
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
    ...coreSettingsGlobals
  ],
  auth: {
    secret: process.env.APP_SECRET
  }
});
export {
  kyro_config_default as default
};
