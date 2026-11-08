import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Translated entries are stored as `<slug>.en.md` and `<slug>.fr.md`
// (the layout the /admin editor writes). The id keeps the locale suffix.
const keepId = ({ entry }: { entry: string }) => entry.replace(/\.(md|ya?ml)$/, '');

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news', generateId: keepId }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    highlight: z.boolean().default(false),
    image: z.string().optional(),
    image_alt: z.string().optional(),
    link: z.string().optional(),
    link_label: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects', generateId: keepId }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    category: z.enum(['tools', 'analyses', 'apps', 'training']),
    years: z.string().optional(),
    context: z.string().optional(),
    stack: z.array(z.string()).default([]),
    code: z.string().optional(),
    demo: z.string().optional(),
    demo_label: z.string().optional(),
    download: z.string().optional(),
    download_label: z.string().optional(),
    image: z.string().optional(),
    image_alt: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(50),
  }),
});

const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications', generateId: keepId }),
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    venue: z.string(),
    year: z.number(),
    status: z.enum(['published', 'under_review', 'preprint']),
    role: z.enum(['first', 'co']),
    doi: z.string().optional(),
    code: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(50),
  }),
});

const experience = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experience', generateId: keepId }),
  schema: z.object({
    kind: z.enum(['work', 'education']),
    role: z.string(),
    org: z.string(),
    place: z.string(),
    period: z.string(),
    order: z.number().default(50),
  }),
});

export const collections = { news, projects, publications, experience };
