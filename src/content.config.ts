// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { glob } from 'astro/loaders';

export const ProjectSchema = z.object({
  section: z.string(),
  image: z.string().optional(),
});

// 3. Define your collection(s)
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ProjectSchema,
});

// console.log('Projects', projects[0]);

// 4. Export a single `collections` object to register your collection(s)
export const collections = { projects };
