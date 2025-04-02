// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
// Import Tailwind CSS Vite plugin for integration
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Set the site URL for sitemap and canonical URLs
  site: 'https://overlook-sales.com',

  integrations: [
    // React integration for interactive components
    react(),

    // Sitemap for better SEO
    sitemap({
      // Customize the sitemap configuration
      filter: (page) => page !== 'https://overlook-sales.com/admin',
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    })
  ],

  // Vite configuration
  vite: {
    // Use Tailwind CSS via the Vite plugin (preferred over PostCSS)
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': '/src'
      }
    }
  }
});