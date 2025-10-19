# VYOMA3D - 3D Printing & Engineering Services Website

A production-ready, multi-page marketing website for a 3D printing company offering CAD/CAE services, 3D printing products, and professional training.

## Features

- **12+ Pages**: Home, Services (4 sub-pages), Products, Training, Workshops, Industries (5 dedicated pages), Case Studies, Gallery, Blog, About, Contact, Legal
- **Modern Tech Stack**: React 18 + TypeScript + Vite + TailwindCSS
- **Animations**: Framer Motion with accessibility support (respects prefers-reduced-motion)
- **Forms**: React Hook Form + Zod validation
- **Routing**: React Router with code-splitting for optimal performance
- **Dark/Light Mode**: Theme toggle with localStorage persistence
- **SEO Optimized**: Meta tags, JSON-LD schema, Open Graph, Twitter Cards
- **Responsive**: Mobile-first design with Tailwind breakpoints
- **Performance**: Lazy loading, code splitting, optimized images

## Color Palette

- Primary: Electric Violet `#7C3AED`
- Secondary: Cyan `#06B6D4`
- Accent: Signal Orange `#F97316`
- Neutral Dark: `#0B0F19` / `#111827`
- Neutral Light: `#F9FAFB` / `#E5E7EB`

## Typography

- UI Font: Inter (300, 400, 500, 600, 700)
- Display Font: Space Grotesk (400, 500, 600, 700)

## Quick Start

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Opens at `http://localhost:5173`

### Build

```bash
npm run build
```

Outputs to `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

### Type Checking

```bash
npm run typecheck
```

### Linting

```bash
npm run lint
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── SEO.tsx
│   ├── SectionHeader.tsx
│   ├── LogoTicker.tsx
│   └── IndustryTemplate.tsx
├── pages/              # Route-based pages
│   ├── Home.tsx
│   ├── Services*.tsx
│   ├── Products.tsx
│   ├── Training.tsx
│   ├── Workshops.tsx
│   ├── Industry*.tsx
│   ├── CaseStudies.tsx
│   ├── Gallery.tsx
│   ├── Blog.tsx
│   ├── GetQuote.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Privacy.tsx
│   ├── Terms.tsx
│   └── NotFound.tsx
├── config/             # Site configuration
│   └── site.config.ts
├── hooks/              # Custom React hooks
│   └── useDarkMode.ts
├── lib/                # Utilities
│   ├── seo.ts
│   └── validators.ts
├── App.tsx             # Main app with routing
├── main.tsx            # Entry point
└── index.css           # Global styles
```

## Pages Overview

### Core Pages
- **Home** (`/`): Hero, services, industries, process, testimonials, CTA
- **Services** (`/services`): Overview with links to sub-services
- **Get a Quote** (`/get-a-quote`): Multi-step form (CAD/CAE or 3D Printing)
- **Contact** (`/contact`): Contact form with business info

### Services Sub-Pages
- CAD Services (`/services/cad`)
- CAE Services (`/services/cae`)
- 3D Printing (`/services/3d-printing`)
- Specialized Consulting (`/services/specialized`)

### Training & Workshops
- Training Programs (`/training`)
- Workshops (`/workshops`)

### Industries (5 dedicated pages)
- Aerospace & Defense (`/industries/aerospace-defense`)
- Automotive (`/industries/automotive`)
- Healthcare (`/industries/healthcare`)
- Industrial Manufacturing (`/industries/industrial-manufacturing`)
- Research & Development (`/industries/research-development`)

### Resources
- Case Studies (`/case-studies`): Filterable project showcase
- Gallery (`/gallery`): Masonry grid with lightbox
- Blog (`/blog`): Articles with tags

### Company
- About Us (`/about`): Mission, team, timeline
- Privacy Policy (`/privacy`)
- Terms of Service (`/terms`)

## Customization

### Brand Configuration

Edit `src/config/site.config.ts` to customize:
- Company name
- Contact information
- Social media links
- Navigation structure

### Colors

Modify `tailwind.config.js` and component gradient classes.

### Content

All page content is inline for easy editing. For a CMS-driven approach, extract content to `src/content/` directory.

## Performance

Current bundle sizes:
- Main JS: ~314 KB (102 KB gzipped)
- CSS: ~25 KB (5.4 KB gzipped)
- Code-split pages: 1-11 KB each

Lighthouse targets: ≥90 for Performance, SEO, Accessibility, Best Practices.

## Browser Support

Modern browsers supporting ES2020+:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## License

MIT

## Support

For questions or issues, contact: info@vyoma3d.com
