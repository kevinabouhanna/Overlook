// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
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
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': '/src'
      }
    }
  }
});