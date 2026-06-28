import type { CollectionConfig } from "@kyro-cms/core";

export const servicesCollection: CollectionConfig = {
  versions: {
    drafts: true,
  },
  seo: true,
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
    {
      name: 'stats', type: 'array', label: 'Statistics', fields: [
        { name: 'value', type: 'text', label: 'Value', required: true },
        { name: 'label', type: 'text', label: 'Label', required: true },
      ]
    },
    {
      name: 'ServiceDetails', type: 'group', label: 'Service Details', fields: [
        {
          name: 'serviceItems', type: 'array', label: 'Service Items', fields: [
            { name: 'title', type: 'text', label: 'Title' },
            { name: 'content', type: 'textarea', label: 'Content' },
            { name: 'icon', type: 'text', label: 'Icon' },
          ]
        },
      ]
    },
    {
      name: 'processSteps', type: 'array', label: 'Process Steps', fields: [
        { name: 'stepNumber', type: 'text', label: 'Step Number' },
        { name: 'title', type: 'text', label: 'Title' },
        { name: 'description', type: 'textarea', label: 'Description' },
      ]
    },
    {
      name: 'cta', type: 'group', label: 'Call To Action', fields: [
        { name: 'subtitle', type: 'text', label: 'Subtitle' },
        { name: 'title', type: 'text', label: 'Title' },
        { name: 'primaryButtonLabel', type: 'text', label: 'Primary Button Label' },
        { name: 'primaryButtonLink', type: 'text', label: 'Primary Button Link' },
        { name: 'secondaryButtonLabel', type: 'text', label: 'Secondary Button Label' },
        { name: 'secondaryButtonLink', type: 'text', label: 'Secondary Button Link' },
      ]
    },
    { name: 'slug', type: 'text', label: 'Slug', required: true, admin: { position: 'sidebar', autoGenerate: 'title' } },
    { name: 'image', type: 'upload', label: 'Image', relationTo: 'media', admin: { position: 'sidebar' } },
    { name: 'gallery', type: 'upload', label: 'Gallery', hasMany: true, relationTo: 'media', admin: { position: 'sidebar' } },
  ],
};  