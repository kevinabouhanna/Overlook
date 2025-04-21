# Overlook Sales Consulting Website

A modern, SEO-optimized website for Overlook Sales Consulting built with Astro. This project was migrated from React to Astro to improve performance, SEO, and maintainability.

## 🚀 Tech Stack

- **Framework**: [Astro](https://astro.build)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) with Vite plugin integration
- **UI Components**: Custom components with [shadcn/ui](https://ui.shadcn.com) integration
- **Animations**: [Framer Motion](https://www.framer.com/motion/) for interactive animations
- **Deployment**: [Netlify](https://netlify.com)

## 📂 Project Structure

```text
/
├── public/              # Static assets
│   ├── _headers         # Custom headers for Netlify (caching, security)
│   └── ...              # Other static assets (favicon, robots.txt, etc.)
├── src/
│   ├── assets/          # Local images and assets
│   │   └── images/      # Optimized images used throughout the site
│   ├── components/      # Reusable UI components
│   │   ├── common/      # Common components (ResponsiveImage, OptimizedImage)
│   │   ├── ui/          # shadcn/ui components
│   │   └── ...          # Other components (Navbar, Footer, BackgroundPaths, etc.)
│   ├── data/            # Data files (services.js, etc.)
│   ├── layouts/         # Layout components
│   │   └── MainLayout.astro
│   ├── pages/           # Page components (file-based routing)
│   │   ├── legal/       # Legal pages
│   │   ├── services/    # Service pages including dynamic [serviceId].astro
│   │   └── ...          # Other pages
│   └── styles/          # Global styles
│       ├── global.css   # Tailwind directives and CSS variables
│       ├── colors.css   # Color-specific styles
│       └── utilities.css # Custom utility classes
├── netlify.toml         # Netlify configuration (redirects, headers, build settings)
└── package.json
```

## 🗺️ Site Map

### Main Pages

- **Home** (`/`)
- **About** (`/about`)
- **Services** (`/services`)
- **Contact** (`/contact`)

### Dynamic Pages

- **Service Detail Pages** (`/services/[serviceId]`)
  - Sales Hiring
  - Sales Training
  - Sales Process
  - Performance Metrics

### Legal Pages

- **Privacy Policy** (`/legal/privacy-policy`)
- **Terms of Service** (`/legal/terms`)
- **Cookie Policy** (`/legal/cookies`)

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:4321`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |

## 🚢 Deployment

This site is deployed on Netlify with the following configuration:

- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **Branch**: main

## 🧩 Web Architecture

- **Routing**: Astro's file-based routing system
- **Dynamic Routes**: Using `[serviceId].astro` for service detail pages
- **Static Generation**: All pages pre-rendered at build time
- **Islands Architecture**: Interactive components using React and Framer Motion
- **Client Directives**: Using `client:load` for interactive components

## 🎨 CSS Architecture

- **Tailwind Integration**: Using Vite plugin for optimal performance
- **CSS Structure**:
  - `global.css` - Tailwind directives and CSS variables
  - `colors.css` - Color-specific styles and feedback states
  - `utilities.css` - Custom utility classes organized by category
- **shadcn/ui Integration**: Using CSS variables for theming with the 'new-york' style variant
- **Responsive Design**: Mobile-first approach with tailored experiences for all device sizes

## � Key Features

### Performance Optimizations

- Efficient caching policies for static assets and Google Fonts
- Image optimization with proper loading strategies (eager for above-the-fold, lazy for below)
- Minimal JavaScript with islands architecture for interactive components

### Visual Enhancements

- Animated hero section using Framer Motion with floating path animations
- Consistent white gradient overlays with radial gradients across hero sections and cards
- Scroll-triggered animations for content sections
- Responsive design with mobile-first approach

### SEO Implementation

- Static HTML generation for better search engine indexing
- Schema.org JSON-LD markup for Organization, Services, Testimonials, BreadcrumbList, and FAQs
- Proper metadata and Open Graph tags
- Proper heading structure and semantic HTML
- Descriptive link text instead of generic "Learn More" links
- Automatically generated sitemap
- Configured robots.txt
- Optimized caching for Google Fonts and static assets
- Proper image optimization with eager loading for above-the-fold content

### Accessibility Features

- Proper heading hierarchy for screen readers
- Descriptive alt text for all images
- Keyboard navigable interface
- Form labels and autocomplete attributes
- Sufficient color contrast ratios

### Content Organization

- Clear navigation structure
- Service-specific detail pages
- Consistent styling across all pages
- Testimonials with proper attribution

## 🔮 Future Improvements

- Replace stock images with compressed JPGs or Webp
- Update meta image, favicon and logo (Brand Identity)
- Integrate Netlify's contact form submissions (Accessibility)

  - Test form submissions on production with an email

- Features:

  - Contact form netlify setup
  - AI Chat bot, strictly on business topic
  - Add WhatsApp button
  - Add dark mode support
  - Add Google Calendar integration for scheduling
  - Add a blur-up placeholder effect for lazy-loaded images
  - Testimonial carousel [Repo](https://github.com/johanguse/shadcn-carousel-testimonials)
  - Interactive FAQ accordion
  - Add breadcrumbs to Service page
  - Email and mobile links should be clickable
  - Change Performance Metrics card's image

- Dev Features:
  - Use Partytown for GTM + Hotjar integration (helps with multithreading)
    - Use simple cookie consent [Repo](https://github.com/orestbida/cookieconsent), with Cookie preferences in the footer
  - Setup Decap CMS with admin authentication to edit testimonials
  - Move component-specific styles to their components
    - Move SVGs to assets, don't add SVG in the html, import it instead
  - Add primary, secondary and tertiary to colors
    - Use Panda CSS (supports tokenization)
    - Tokenize the design system
  - Use Google's Rich Results Test or Schema Markup Validator to verify your schema markup
  - Update pipeline using axe-core and/or lighthouse linter
