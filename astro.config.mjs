// @ts-check
import mdx from '@astrojs/mdx';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';

import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  server: {
    allowedHosts: ['.localhost', '.affablegecko.net', '.ngrok-free.app'],
  },

  adapter: vercel(),
  integrations: [mdx()],

  markdown: {
    remarkRehype: {
      footnoteLabel: 'References',
      footnoteLabelTagName: 'h4',
      clobberPrefix: 'tag-',
    },
  },
});
