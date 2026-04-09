# AGENTS.md — Slamdunk Project

## Project Overview

Slam Dunk manga testimonial website — a React SPA where fans can read and submit testimonials about how the manga impacted them. Built with React 19 + TypeScript + Vite + React Router. The visual design follows the Ferrari-inspired design system in `DESIGN.md` with basketball-themed orange accents.

## Build / Dev / Test Commands

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Lint
npm run lint

# Type check (equivalent to npm run typecheck)
npx tsc -b

# Build for production (runs tsc -b && vite build)
npm run build

# Preview production build
npm run preview
```

> **Note:** No test runner is configured yet. Add one (Vitest recommended) and update this section.

## Design System Reference

The complete design specification is in `DESIGN.md`. Key principles:

- **Chiaroscuro rhythm**: Alternate between absolute black (`#000000`) cinematic sections and pure white (`#FFFFFF`) editorial sections
- **Ferrari Red** (`#DA291C`) is used with extreme sparseness — only for primary CTAs and brand-critical moments
- **Typography**: FerrariSans for headings/content (weight 500 default), Body-Font for uppercase labels with 1px letter-spacing
- **Border radius**: 2px default for interactive elements — precision, not friendliness
- **No box-shadows** on cards or containers; depth comes from surface color contrast and photography
- **Yellow accents** (`#FFF200`, `#F6E500`) are reserved strictly for motorsport/racing heritage contexts

### Color Quick Reference

| Token | Hex | Role |
|-------|-----|------|
| Ferrari Red | `#DA291C` | Primary CTA accent (use sparingly) |
| Pure White | `#FFFFFF` | Light surfaces, editorial panels |
| Absolute Black | `#000000` | Hero sections, cinematic backgrounds |
| Dark Surface | `#303030` | Footer, layered dark panels |
| Near Black | `#181818` | Body text on light surfaces |
| Dark Gray | `#666666` | Secondary text |
| Mid Gray | `#8F8F8F` | Tertiary text, metadata |
| Border Gray | `#CCCCCC` | Input borders |
| Button Hover Teal | `#1EAEDB` | Button hover state |
| Link Hover Blue | `#3860BE` | Interactive hover only |
| Warning | `#F13A2C` | Semantic warning (NOT brand red) |
| Success | `#03904A` | Semantic success |
| Info | `#4C98B9` | Semantic info |

## Code Style Guidelines

### Imports

- Group imports in this order: (1) framework/external libraries, (2) internal modules/components, (3) types, (4) styles
- Use named imports where possible; avoid wildcard imports
- Use absolute path aliases (e.g., `@/components/`) over relative paths when crossing directory boundaries
- Keep import blocks separated by a blank line between each group

### Formatting

- 2-space indentation (no tabs)
- Single quotes for strings
- Trailing commas in multi-line structures
- Max line length: 100 characters
- No semicolons (unless the project settles on a different convention once ESLint/Prettier is configured)
- One component per file; filename must match the exported component name

### TypeScript / Types

- Strict mode enabled; no `any` types without explicit justification
- Prefer `interface` for object shapes; `type` for unions and utility types
- Use descriptive names: `VehicleCardProps`, not `Props`
- Export types colocated with the components or in a dedicated `types/` directory
- Use CSS custom properties (design tokens) rather than hardcoded color values

### Naming Conventions

- Components: PascalCase (`VehicleLineup.tsx`)
- Utilities / helpers: camelCase (`formatPrice.ts`)
- CSS custom properties: `--f-color-accent-100`, `--f-color-ui-0` (follow DESIGN.md token names)
- Directories: kebab-case (`vehicle-lineup/`)
- Test files: `*.test.ts` or `*.test.tsx`, colocated with source
- Constants: UPPER_SNAKE_CASE for true constants; camelCase for config objects

### Component Structure

```tsx
// 1. Imports
import { useState } from 'react'
import { Button } from '@/components/button'

import type { CardProps } from './types'

// 2. Types
interface Props {
  title: string
  subtitle?: string
}

// 3. Component
export function EditorialCard({ title, subtitle }: Props) {
  // hooks at top
  // event handlers
  // render
}
```

### Error Handling

- Use try/catch for async operations; surface user-facing errors gracefully
- Never expose stack traces or internal details in the UI
- Prefer early returns over nested conditionals
- Use semantic colors for error states: `#F13A2C` (warning), `#03904A` (success), `#4C98B9` (info)
- Do not use Ferrari Red (`#DA291C`) for error states — it is a brand color, not a semantic color

### CSS / Styling

- Use CSS custom properties defined in DESIGN.md for all color, spacing, and typography values
- Never hardcode hex values in component styles — reference the token system
- Maintain the 8px base spacing unit
- Responsive breakpoints: 375px, 600px, 768px, 960px, 1280px, 1920px
- Mobile-first approach: write base styles for mobile, then add `min-width` media queries
- Minimum touch target: 44×44px for all interactive elements

### Testing

- Write tests for components, utilities, and critical user flows
- Use descriptive test names: `"renders vehicle name and price"` not `"works"`
- Test accessibility: keyboard navigation, ARIA labels, color contrast
- Run lint and typecheck before committing: `npm run lint && npm run typecheck`

## Key Constraints

1. **Ferrari Red appears ONCE per screen at most** — if red is used in more than one place, it loses authority
2. **No rounded corners beyond 2px** on interactive elements — the precision aesthetic is non-negotiable
3. **No shadows on content cards** — depth comes from black/white surface contrast
4. **No gradients on UI elements** — photographic depth only
5. **Every image must be editorial quality** — no placeholder or low-res imagery
6. **Do not mix FerrariSans and Body-Font in the same text block** — they serve separate hierarchical roles
7. **Semantic colors are distinct from brand colors** — warning red (`#F13A2C`) ≠ Ferrari Red (`#DA291C`)

## File Structure (Target)

```
src/
  components/       # Reusable UI components
    button/
    card/
    carousel/
    navigation/
  styles/           # Global styles, tokens, themes
  hooks/            # Custom React hooks
  utils/            # Utility functions
  types/            # Shared TypeScript types
  assets/           # Images, fonts, static assets
  pages/            # Route-level page components
```
