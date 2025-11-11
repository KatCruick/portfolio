// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { glob } from 'astro/loaders';

export const ProjectSchema = z.object({
  title: z.string(),
  description: z.string(),
  image: z.string().optional(),
  tags: z.array(z.string()).optional(),
  hidden: z.boolean(),
});

const projects = defineCollection({
  loader: glob({
    pattern: '**/*.mdx',
    base: './src/content/projects',
  }),
  schema: ProjectSchema,
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { projects };
