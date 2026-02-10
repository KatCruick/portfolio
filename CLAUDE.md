# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a portfolio website for a UX designer, built with Astro 5. It showcases design projects written in Markdown/MDX with rich frontmatter metadata.

## Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Architecture

### Framework & Deployment
- **Astro 5** with MDX support for content
- **Tailwind CSS v4** (via `@tailwindcss/vite` plugin, configured in `astro.config.mjs`)
- **Vercel** adapter for deployment
- **View Transitions** enabled via Astro's `ClientRouter`

### Content System
Projects are defined as a content collection in `src/content/projects/` using `.md` and `.mdx` files. The schema is defined in `src/content.config.ts` with fields for title, description, image, tags, and an optional `overview` object containing client/role/time/tools/methods/problem/objectives/findings/implications.

Dynamic project pages are generated via `src/pages/projects/[path].astro` using `getStaticPaths()`.

### Styling
- Custom Tailwind theme in `src/styles/global.css` with brand colors (red, blue, green, yellow, cream) and typography utilities (`type-h1` through `type-sh4`, `type-body`)
- Two font families: DM Sans (sans-serif) and Editorial Old (serif)
- Prose styles for rendered markdown content

### Key Directories
- `src/components/` - Astro components including navbar, project display, and timeline components
- `src/components/project/` - Section components for project pages (SectionImage, SectionTextBoxes, SectionCarousel, etc.)
- `src/services/` - Utility functions (getProjectCollection, getVariantByIndex, constants)
- `src/assets/` - Images and icons organized by project

## Code Style

- **Prettier** with single quotes, trailing commas, and sorted imports (third-party → astro → relative → assets)
- **ESLint** with TypeScript, Astro plugin, and jsx-a11y for accessibility
- Use `clsx` for conditional class composition (integrated with Tailwind prettier plugin)
