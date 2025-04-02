# Styles Directory

This directory contains the CSS files for the Overlook project.

## File Structure

- **global.css**: Contains Tailwind directives and CSS variables
- **utilities.css**: Contains custom utility classes

## Import Order

When importing these files, always import them in this order:

1. global.css
2. utilities.css

Example:
```astro
---
import '../styles/global.css';
import '../styles/utilities.css';
---
```

## CSS Variables

The CSS variables defined in global.css are used by shadcn/ui components. These variables follow a specific naming convention:

```css
--primary: 0 0% 0%;        /* HSL values without the hsl() wrapper */
--primary-foreground: 0 0% 100%;
```

To use these variables in your CSS:

```css
.my-element {
  background-color: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
}
```

## Custom Utilities

The utilities.css file contains custom utility classes organized by category:

- Layout utilities
- Spacing utilities
- Typography utilities
- Visual elements
- Interactive elements
- Animations
- Component-specific styles
- Responsive utilities

When possible, prefer using Tailwind's built-in utility classes over custom ones.

## Tailwind Integration

We use Tailwind CSS v4 with the Vite plugin integration. See the [Tailwind Integration Guide](../../docs/tailwind-integration.md) for more details.
