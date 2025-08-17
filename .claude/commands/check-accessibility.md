---
allowed-tools: Bash(npm *, pa11y *, lighthouse *), Read
argument-hint: [component/page to audit]
description: Perform comprehensive accessibility audit for components and pages
---

# Accessibility Audit

Perform comprehensive accessibility audit for: $ARGUMENTS

## WCAG 2.1 AA Compliance Checklist

### 1. Keyboard Navigation

Test and ensure:

- All interactive elements reachable via Tab
- Visible focus indicators (outline or border)
- Logical tab order (left-to-right, top-to-bottom)
- Skip links for repetitive content
- No keyboard traps
- Escape key closes modals/overlays

Implementation:

```tsx
// Ensure all custom buttons are keyboard accessible
<button
  onClick={handleClick}
  onKeyDown={(e) => e.key === 'Enter' && handleClick()}
  tabIndex={0}
  aria-label="Descriptive action"
>
```

### 2. Screen Reader Support

Verify:

- Semantic HTML elements used appropriately
- ARIA labels for interactive elements
- ARIA live regions for dynamic content
- Alternative text for all images
- Form labels associated with inputs
- Error messages linked to fields

```tsx
// Proper ARIA implementation
<nav aria-label="Main navigation">
<main role="main" aria-labelledby="page-title">
<section aria-labelledby="section-heading">
```

### 3. Color Contrast

Check ratios:

- Normal text: 4.5:1 minimum
- Large text (18pt+): 3:1 minimum
- Interactive elements: 3:1 minimum
- Focus indicators: 3:1 minimum

Tools to use:

- Chrome DevTools Lighthouse
- axe DevTools extension
- WAVE evaluation tool

### 4. Responsive and Zoom

Ensure:

- Content readable at 200% zoom
- No horizontal scrolling at 320px width
- Touch targets minimum 44x44px
- Sufficient spacing between interactive elements

### 5. Motion and Animation

Implement:

```css
/* Respect user preferences */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### 6. Forms and Inputs

Verify:

- Clear labels for all inputs
- Required fields marked appropriately
- Error messages are descriptive
- Success messages announced
- Proper fieldset/legend for groups

### 7. Content Structure

Check:

- Single H1 per page
- Proper heading hierarchy
- Lists marked up correctly
- Tables have headers
- Language attribute set

## Testing Protocol

### Manual Testing

1. Navigate using only keyboard
2. Test with screen reader (NVDA/JAWS/VoiceOver)
3. Check with browser zoom at 200%
4. Disable CSS and verify content order
5. Test with Windows High Contrast mode

### Automated Testing

Run these tools:

```bash
# Install and run axe-core
npm install --save-dev @axe-core/react
npm run test:a11y

# Lighthouse CI
lighthouse --only-categories=accessibility http://localhost:3000
```

## BMW Portfolio Specific Concerns

- Metric animations must have text alternatives
- Code snippets need proper syntax highlighting for color blind users
- Case study images need detailed alt text
- Interactive timeline must be keyboard navigable
- Video content needs captions/transcripts

## Deliverables

1. Accessibility report with all issues
2. Prioritized fix list (P0, P1, P2)
3. Updated components with fixes
4. Test results documentation
