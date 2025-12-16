# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at localhost:3000
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

This is a Next.js 16 project using the App Router with TypeScript and Tailwind CSS v4.

- **app/**: App Router directory containing pages and layouts
  - `layout.tsx`: Root layout with Geist font configuration
  - `page.tsx`: Home page component
  - `globals.css`: Global styles and Tailwind CSS v4 theme configuration
- **public/**: Static assets (SVGs, images)

## Key Conventions

- Path alias `@/*` maps to the project root
- Tailwind CSS v4 uses `@theme inline` directive for CSS variables
- Dark mode is handled via `prefers-color-scheme` media query and Tailwind's `dark:` variant
- Geist fonts are loaded via `next/font/google` with CSS variable injection
