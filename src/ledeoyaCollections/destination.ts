import type { CollectionConfig } from "@kyro-cms/core";

import { RegionField, CountryField } from "kyro-field-locations";

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
    {name: 'badge', type: 'select', label: 'Badge', options: [{ label: 'Popular', value: 'popular' }, { label: 'New', value: 'new'},{label: 'Top Rated', value: 'top-rated'}, {label: 'Trending', value: 'trending'} ], admin: { position: 'sidebar' }},
    { name: 'gallery', type: 'upload', label: 'Gallery', relationTo: 'media', hasMany: true, admin: { position: 'sidebar' }},
    { ...RegionField({ name: 'region', label: 'Region' }), admin: { position: 'sidebar' } },
    { ...CountryField({ name: 'country', dependsOn: 'region', label: 'Country' }), admin: { position: 'sidebar' } },
  ],
};