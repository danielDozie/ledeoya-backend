import type { CollectionConfig } from "@kyro-cms/core";

export const messagesCollection: CollectionConfig = {
  slug: 'messages',
  label: 'Messages',
  singularLabel: 'Message',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'subject'],
    icon: "MessageCircle",
  },
    access: {
    read: true,      // Public/users can read
    create: false,   // Disable creation
    update: false,   // Disable updating
    delete: false,   // Disable deletion
  },
  fields: [
    { name: 'name', type: 'text', label: 'Name', required: true, admin: { readOnly: true } },
    { name: 'email', type: 'email', label: 'Email', required: true, admin: { readOnly: true } },
    {name: 'subject', type: 'text', label: 'Subject', required: true, admin: { readOnly: true } },
    {name: 'phone', type: 'text', label: 'Phone', admin: { readOnly: true } },
    { name: 'message', type: 'textarea', label: 'Message', required: true, admin: { readOnly: true } },
    {name: 'user_agent', type: 'text', label: 'User Agent', admin: { position: 'sidebar', readOnly: true } },
  ],
};