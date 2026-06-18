import type { CollectionConfig } from '@kyro-cms/core';

export const testimonialsCollection: CollectionConfig = {
  slug: 'testimonials',
  label: 'Testimonials',
  singularLabel: 'Testimonial',
  admin: {
    useAsTitle: 'fullname',
    defaultColumns: ['fullname', 'company'],
    icon: "MessageSquare",
  },
  fields: [
    { name: 'fullname', type: 'text', label: 'Full Name', required: true },
    { name: 'company', type: 'text', label: 'Company' },
    { name: 'quote', type: 'textarea', label: 'Quote' },
    { name: 'image', type: 'upload', label: 'Image', relationTo: 'media', admin: { position: 'sidebar' } },
    { name: 'order', type: 'number', label: 'Order', admin: { position: 'sidebar' } },
  ],
};