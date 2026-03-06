import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional().default(false), // Útil por si quieres ocultar posts en progreso
  }),
});

export const collections = {
  'blog': blogCollection,
};