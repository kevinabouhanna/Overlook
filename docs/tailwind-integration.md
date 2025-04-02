# Tailwind CSS Integration Guide

This document outlines how Tailwind CSS is integrated into our Astro project.

## Integration Method

We use the **Vite Plugin** approach for integrating Tailwind CSS with Astro. This is the recommended approach for Astro projects.

### Configuration Files

- **astro.config.mjs**: Contains the Vite plugin configuration for Tailwind
- **tailwind.config.mjs**: Contains Tailwind-specific configuration
- **postcss.config.js**: Contains PostCSS configuration (but not Tailwind-specific)

## Tailwind Version

We're using **Tailwind CSS v4**, which has some important differences from v3:

- The `@tailwind components` directive is no longer used
- `@import "tailwindcss/preflight"` is used instead of `@tailwind base`
- Some utility classes may have different behavior

## CSS Structure

Our CSS is organized into two main files:

1. **global.css**:
   - Contains Tailwind directives
   - Contains CSS variables used by shadcn/ui components
   - Should be imported first

2. **utilities.css**:
   - Contains custom utility classes
   - Organized by category (layout, spacing, typography, etc.)
   - Should be imported after global.css

## Best Practices

1. **Use Tailwind Classes First**:
   - Prefer Tailwind's built-in utility classes over custom ones
   - Only use custom utilities when Tailwind doesn't provide what you need

2. **CSS Variables**:
   - Use the CSS variables defined in global.css for theming
   - These variables are used by shadcn/ui components

3. **Component Styling**:
   - Use Tailwind classes directly in components
   - For complex components, consider using the `cn()` utility function

## Troubleshooting

If you encounter issues with Tailwind:

1. **Check the Tailwind Version**:
   - Make sure you're using v4 syntax
   - Refer to the [Tailwind v4 documentation](https://tailwindcss.com/docs)

2. **Check the Integration**:
   - Ensure the Vite plugin is properly configured
   - Check that the Tailwind directives are correctly imported

3. **Check for Conflicts**:
   - Custom utilities might conflict with Tailwind classes
   - shadcn/ui components might have their own styles

## Dependencies

- `tailwindcss`: The core Tailwind CSS package
- `@tailwindcss/vite`: Vite plugin for Tailwind CSS
- `tailwind-merge`: Used by shadcn/ui for class name merging
- `tailwindcss-animate`: Animation utilities for Tailwind
