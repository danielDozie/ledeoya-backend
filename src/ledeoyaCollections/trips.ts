import type { CollectionConfig } from "@kyro-cms/core";

export const tripsCollection: CollectionConfig = {
  versions: {
    drafts: true,
  },
  slug: 'trips',
  label: 'Trips',
  singularLabel: 'Trip',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'category', 'price', 'start_date', 'end_date'],
    icon: "PlaneTakeoff",
  },
  fields: [
    { name: 'title', type: 'text', label: 'Title', required: true },
    { name: 'description', type: 'textarea', label: 'Description' },
    { name: 'itinerary', type: 'array', label: 'Itinerary', fields: [{ name: 'day', type: 'number', label: 'Day' }, { name: 'activities', type: 'textarea', label: 'Activities' }], admin: { position: 'main' } },
    { name: 'highlights', type: 'list', label: 'Highlights',  admin: { position: 'main' } },
    { name: 'inclusions', type: 'list', label: 'Inclusions',  admin: { position: 'main' } },
    { name: 'exclusions', type: 'list', label: 'Exclusions', admin: { position: 'main' } },
    { name: 'price', type: 'number', label: 'Price', admin: { position: 'main' } },
    { name: 'slug', type: 'text', label: 'Slug', required: true, admin: { position: 'sidebar', autoGenerate: 'title' } },
    { name: 'category', type: 'select', label: 'Category', admin: { position: 'sidebar' }, options: [{ label: 'Adventure', value: 'adventure' }, { label: 'Cultural', value: 'cultural' }, { label: 'Relaxation', value: 'relaxation' }, { label: 'Family', value: 'family' }, { label: 'Romantic', value: 'romantic' }] },
    { name: 'featured', type: 'checkbox', label: 'Featured', admin: { position: 'sidebar' } },
    {name: 'marketing_label', type: 'select', label: 'Marketing Label', admin: { position: 'sidebar' }, options: [{ label: 'Best Seller', value: 'best-seller' }, { label: 'New Places', value: 'new-places' }, {label: 'Top Rated', value: 'top-rated'}, {label: 'Popular', value: 'popular'}, { label: 'Limited Time Offer', value: 'limited-time-offer' }, { label: 'Trending', value: 'trending' }] },
    { name: 'image', type: 'upload', label: 'Image', relationTo: 'media', admin: { position: 'sidebar', } },
    { name: 'gallery', type: 'upload', label: 'Gallery', relationTo: 'media', hasMany: true, admin: { position: 'sidebar' } },
    { name: 'destinations', type: 'relationship', label: 'Destinations', relationTo: 'destinations', hasMany: true },
    { name: 'start_date', type: 'date', label: 'Start Date', admin: { position: 'sidebar' } },
    { name: 'end_date', type: 'date', label: 'End Date', admin: { position: 'sidebar' } },
  ],
};