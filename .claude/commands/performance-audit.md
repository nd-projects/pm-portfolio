---
allowed-tools: Bash(npm *, lighthouse *), Read, WebFetch
description: Conduct a comprehensive performance audit of the PM portfolio site
---

# Performance Audit

Conduct a comprehensive performance audit of the PM portfolio site.

## Audit Checklist

### 1. Bundle Size Analysis

- Run `npm run analyze` to generate bundle analysis
- Identify components/libraries over 50KB
- Find duplicate dependencies
- Check for unnecessary polyfills
- Review tree-shaking effectiveness

### 2. Core Web Vitals

Measure and optimize:

- **LCP (Largest Contentful Paint)**: Target < 2.5s
  - Optimize hero image loading
  - Preload critical fonts
  - Reduce server response time
- **FID (First Input Delay)**: Target < 100ms
  - Minimize JavaScript execution time
  - Break up long tasks
- **CLS (Cumulative Layout Shift)**: Target < 0.1
  - Set explicit dimensions for images
  - Reserve space for dynamic content
  - Audit Framer Motion animations

### 3. Image Optimization

- Convert all images to WebP format
- Implement blur placeholders for Next.js Image components
- Ensure responsive images with srcset
- Lazy load below-the-fold images
- Optimize image sizes (max 200KB for hero, 100KB for others)

### 4. Code Splitting & Lazy Loading

- Implement dynamic imports for heavy components
- Lazy load case study content
- Code-split by route
- Defer non-critical JavaScript

### 5. Animation Performance

- Audit all Framer Motion animations
- Ensure GPU-accelerated properties only (transform, opacity)
- Add will-change CSS where appropriate
- Implement reduced motion preferences
- Remove animations causing reflows

### 6. Caching Strategy

- Configure proper cache headers
- Implement service worker for offline support
- Use ISR (Incremental Static Regeneration) for blog posts
- Cache API responses appropriately

### 7. Third-party Scripts

- Audit impact of analytics scripts
- Defer non-critical third-party code
- Use facade pattern for heavy embeds

## Deliverables

1. Performance report with current metrics
2. Prioritized list of optimizations with impact estimates
3. Before/after Lighthouse scores
4. Specific code changes to implement

## Tools to Use

- Lighthouse CI
- WebPageTest
- Chrome DevTools Performance tab
- Next.js Bundle Analyzer
- Vercel Analytics (if available)
