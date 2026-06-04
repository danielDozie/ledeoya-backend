import type { CollectionConfig } from "@kyro-cms/core";

export const servicesCollection: CollectionConfig = {
  versions: {
    drafts: true,
  },
  slug: 'services',
  label: 'Services',
  singularLabel: 'Service',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug'],
    icon: "Boxes",
  },
  fields: [
    { name: 'title', type: 'text', label: 'Title', required: true },
    { name: 'description', type: 'textarea', label: 'Description' },
    { name: 'ServiceDetails', type: 'group', label: 'Service Details', fields: [
      { name: 'serviceItems', type: 'array', label: 'Service Items', fields: [
        { name: 'title', type: 'text', label: 'Title' },
        { name: 'content', type: 'textarea', label: 'Content' },
      ] },
    ] },
    { name: 'slug', type: 'text', label: 'Slug', required: true, admin: { position: 'sidebar', autoGenerate: 'title' } },
    { name: 'image', type: 'upload', label: 'Image', relationTo: 'media', admin: { position: 'sidebar' } },
     {name: 'gallery', type: 'upload', label: 'Gallery', hasMany: true, relationTo: 'media', admin: { position: 'sidebar' }},
  ],
};  