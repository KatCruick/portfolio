// 1. Import utilities from `astro:content`
import { type ImageFunction, defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { glob } from 'astro/loaders';

export const getProjectSchema = (image: ImageFunction) =>
  z.object({
    title: z.string(),
    description: z.string(),
    image: image().optional(),
    tags: z.array(z.string()).optional(),
    hidden: z.boolean(),
    overview: z
      .object({
        client: z.string().optional(),
        role: z.string().optional(),
        time: z.string().optional(),
        tools: z.string().optional(),
        methods: z.string().optional(),
        problem: z.string().optional(),
        objectives: z.string().optional(),
        findings: z.string().optional(),
        implications: z.string().optional(),
      })
      .optional(),
  });

const projects = defineCollection({
  loader: glob({
    pattern: ['*.md', '*.mdx'],
    base: './src/content/projects',
  }),
  schema: ({ image }) => getProjectSchema(image),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { projects };
