---
allowed-tools: Read, Edit, MultiEdit, Write
argument-hint: [page/component to optimize]
description: Optimize pages for SEO with meta tags, structured data, and performance
---

# SEO Optimization

Optimize the following pages/components for SEO: $ARGUMENTS

## SEO Implementation Checklist

### 1. Meta Tags

For each page, implement:

```typescript
// In app/[page]/metadata.ts
export const metadata: Metadata = {
  title: 'Page Title - 60 chars max',
  description: 'Meta description - 155 chars max',
  keywords: ['relevant', 'keywords'],
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'OG Title',
    description: 'OG Description',
    type: 'website',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Twitter Title',
    description: 'Twitter Description',
  },
};
```

### 2. Structured Data (JSON-LD)

Add appropriate schema markup:

- Person schema for about section
- Article schema for blog posts
- CreativeWork schema for case studies
- Organization schema for experience

### 3. Technical SEO

- Generate dynamic sitemap.xml with all pages
- Create robots.txt with proper directives
- Implement canonical URLs for all pages
- Add hreflang tags if multi-language
- Ensure proper URL structure (kebab-case)

### 4. Content Optimization

- Use single H1 per page
- Maintain proper heading hierarchy (H1 → H2 → H3)
- Include target keywords naturally (2-3% density)
- Add alt text to all images with keywords
- Internal linking between related content
- External linking to authoritative sources

### 5. Performance SEO

- Ensure page load time < 3 seconds
- Optimize Core Web Vitals
- Implement AMP versions if applicable
- Enable compression (gzip/brotli)

### 6. Mobile SEO

- Verify mobile responsiveness
- Check touch target sizes (min 44x44px)
- Test on real devices
- Ensure readable font sizes (min 16px)

### 7. Local/Professional SEO

- Add location data for Munich/BMW context
- Include professional credentials
- Link to GitHub and LinkedIn profiles
- Implement breadcrumb navigation

## BMW PM-Specific Keywords to Target

- "technical product manager automotive"
- "developer tools product management"
- "BMW software development"
- "ADAS product management"
- "automotive software PM"

## Expected Outcomes

- Improved organic search visibility
- Rich snippets in search results
- Better social media preview cards
- Increased click-through rates
