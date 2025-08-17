---
allowed-tools: Read, Bash(npm *)
argument-hint: [component/page to check]
description: Verify responsive behavior across all device breakpoints
---

# Responsive Design Audit

Verify responsive behavior for: $ARGUMENTS

## Device Testing Matrix

### Mobile Devices

Test on these viewport widths:

- **320px** - iPhone SE, older devices
- **375px** - iPhone 12/13 mini
- **390px** - iPhone 12/13 Pro
- **414px** - iPhone Plus models
- **428px** - iPhone 14 Pro Max

Key checks:

- Text remains readable (min 16px)
- Buttons are tappable (min 44x44px)
- No horizontal scroll
- Images scale properly
- Navigation is usable

### Tablet Devices

- **768px** - iPad Portrait
- **834px** - iPad Pro 11" Portrait
- **1024px** - iPad Landscape
- **1194px** - iPad Pro 11" Landscape

Key checks:

- Layout adapts to two-column where appropriate
- Touch targets remain accessible
- Modals/overlays sized appropriately
- Grid layouts reflow correctly

### Desktop

- **1280px** - Small laptop
- **1440px** - Standard desktop
- **1920px** - Full HD
- **2560px** - 4K displays

Key checks:

- Content has max-width for readability
- Images don't become pixelated
- Layout utilizes available space
- Typography scales appropriately

## Component-Specific Checks

### Hero Section

- Mobile: Stack elements vertically
- Tablet: Adjust font sizes
- Desktop: Full horizontal layout
- Metrics cards: 2x2 grid on mobile, 1x4 on desktop

### Navigation

- Mobile: Hamburger menu
- Tablet: Condensed horizontal
- Desktop: Full horizontal with all items

### Case Studies Grid

- Mobile: Single column
- Tablet: 2 columns
- Desktop: 3 columns

### Code Blocks

- Mobile: Horizontal scroll with indicator
- Tablet+: Full width with wrap

## Testing Implementation

### 1. Browser DevTools

```javascript
// Test script for Chrome DevTools
const breakpoints = [320, 375, 414, 768, 1024, 1440];
breakpoints.forEach((width) => {
  window.resizeTo(width, 800);
  console.log(`Testing at ${width}px`);
  // Take screenshot or run tests
});
```

### 2. Tailwind Breakpoint Check

Verify all responsive classes:

- `sm:` (640px+)
- `md:` (768px+)
- `lg:` (1024px+)
- `xl:` (1280px+)
- `2xl:` (1536px+)

### 3. Container Queries

For component-level responsiveness:

```css
@container (min-width: 400px) {
  .metric-card {
    flex-direction: row;
  }
}
```

## Common Issues to Check

### Typography

- Font sizes scale appropriately
- Line height maintains readability
- Heading hierarchy preserved
- No text overflow/truncation

### Images

- Proper srcset for different resolutions
- Art direction with picture element
- Lazy loading on all viewports
- Aspect ratios maintained

### Interactive Elements

- Touch targets meet minimum size
- Hover states have touch alternatives
- Swipe gestures work on mobile
- Scroll behavior is smooth

### Performance

- Images optimized for each breakpoint
- JavaScript bundles split appropriately
- CSS minimized for critical path
- Fonts loaded efficiently

## BMW Portfolio Specific

- Metrics animations perform on mobile
- Timeline is swipeable on touch devices
- Code examples readable without zoom
- Case study images load progressively
- Testimonials carousel works on touch

## Deliverables

1. Screenshot at each breakpoint
2. Performance metrics per device type
3. List of responsive issues found
4. Recommended fixes with priority
5. Updated CSS with improvements
