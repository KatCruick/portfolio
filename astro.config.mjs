// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import vercel from '@astrojs/vercel';

import mdx from '@astrojs/mdx';

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
});
