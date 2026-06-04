import type { CollectionConfig } from "@kyro-cms/core";

export const destinationsCollection: CollectionConfig = {
  versions: {
    drafts: true,
  },
  slug: 'destinations',
  label: 'Destinations',
  singularLabel: 'Destination',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'country', 'region'],
    icon: "TentTree",
  },
  fields: [
    { name: 'title', type: 'text', label: 'Title', required: true },
    { name: 'description', type: 'textarea', label: 'Description' },
    { name: 'visa_requirements', type: 'textarea', label: 'Visa Requirements' },
    {name: 'trips', type: 'relationship', label: 'Trips', relationTo: 'trips', hasMany: true },
    {name: 'slug', type: 'text', label: 'Slug', required: true, admin: { position: 'sidebar', autoGenerate: 'title' } },
    {name: 'featured', type: 'checkbox', label: 'Featured', admin: { position: 'sidebar' }},
    {name: 'image', type: 'upload', label: 'Image', relationTo: 'media', admin: { position: 'sidebar' }},
    { name: 'gallery', type: 'upload', label: 'Gallery', relationTo: 'media', hasMany: true, admin: { position: 'sidebar' }},
    { name: 'region', type: 'select', label: 'Region', admin: { position: 'sidebar' }, options: [{ label: 'North America', value: 'north-america' }, { label: 'Europe', value: 'europe' }, { label: 'Asia', value: 'asia' }, {label: 'South America', value: 'south-america' }, { label: 'Africa', value: 'africa' }, { label: 'Oceania', value: 'oceania'}] },
    {name: 'country', type: 'select', label: 'Country', admin: { position: 'sidebar' }, options: [{ label: 'United States', value: 'united-states' }, { label: 'Canada', value: 'canada' }, { label: 'United Kingdom', value: 'united-kingdom' }, {label: 'Germany', value: 'germany' }, { label: 'France', value: 'france' }, { label: 'Japan', value: 'japan'}, { label: 'Australia', value: 'australia'}, { label: 'South Africa', value: 'south-africa'}, { label: 'Brazil', value: 'brazil'}, {label: 'Argentina', value: 'argentina'}, { label: 'Chile', value: 'chile'}, { label: 'Colombia', value: 'colombia'}, { label: 'Mexico', value: 'mexico'}, { label: 'India', value: 'india'}, { label: 'China', value: 'china'}, { label: 'South Korea', value: 'south-korea'}, { label: 'Thailand', value: 'thailand'}] },
  ],
};