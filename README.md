# Overlook Sales Consulting Website

A modern, SEO-optimized website for Overlook Sales Consulting built with Astro. This project was migrated from React to Astro to improve performance, SEO, and maintainability.

## 🚀 Tech Stack

- **Framework**: [Astro](https://astro.build) (migrated from React)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) with Vite plugin integration
- **UI Components**: Custom components with [shadcn/ui](https://ui.shadcn.com) integration
- **Deployment**: [Netlify](https://netlify.com)

## 📂 Project Structure

```text
/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── ui/          # shadcn/ui components
│   │   └── ...          # Other components (Navbar, Footer, etc.)
│   ├── data/            # Data files (services.js, etc.)
│   ├── layouts/         # Layout components
│   │   └── MainLayout.astro
│   ├── pages/           # Page components (file-based routing)
│   │   ├── legal/       # Legal pages
│   │   ├── services/    # Service pages including dynamic [serviceId].astro
│   │   └── ...          # Other pages
│   └── styles/          # Global styles
│       ├── global.css   # Tailwind directives and CSS variables
│       └── utilities.css # Custom utility classes
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

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:4321`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |

## 🚢 Deployment

This site is deployed on Netlify with the following configuration:

- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **Branch**: main

## 🧩 Web Architecture

- **Routing**: Astro's file-based routing system
- **Dynamic Routes**: Using `[serviceId].astro` for service detail pages
- **Static Generation**: All pages pre-rendered at build time
- **Minimal JavaScript**: Only where needed for interactivity

## � SEO Enhancements

- Static HTML generation for better search engine indexing
- Proper metadata and Open Graph tags
- Automatically generated sitemap
- Configured robots.txt

## 🎨 CSS Architecture

- **Tailwind Integration**: Using Vite plugin for optimal performance
- **CSS Structure**:
  - `global.css` - Tailwind directives and CSS variables
  - `utilities.css` - Custom utility classes organized by category
- **shadcn/ui Integration**: Using CSS variables for theming
- **Documentation**: See [Tailwind Integration Guide](docs/tailwind-integration.md)

## �🔮 Future Improvements

- Add a blog section for content marketing
- Implement image optimization with Astro's built-in tools
- Add structured data (JSON-LD) for services
- Implement more comprehensive testing

## 📝 License

This project is free to use.
