import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
  }),
});

const accomplishments = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/accomplishments' }),
  schema: z.object({
    title: z.string(),
    issuer: z.string(),
    date: z.coerce.date(),
    category: z.enum([
      'tech',
      'education',
      'professional',
      'personal',
      'language',
      'other',
    ]),
    url: z.url().optional(),
    credentialId: z.string().optional(),
    summary: z.string().optional(),
    award: z.string().optional(),
    image: z.string().optional(),
  }),
});

export const collections = { blog, accomplishments };
