---
allowed-tools: Read, Edit, MultiEdit, Bash(npm *)
argument-hint: [component/section to optimize]
description: Optimize animations for 60fps performance and accessibility
---

# Animation Optimization

Optimize all animations in: $ARGUMENTS

## Performance Optimization Strategy

### 1. GPU-Accelerated Properties Only

Use only these properties for smooth 60fps:

- `transform` (translate, scale, rotate)
- `opacity`
- `filter` (use sparingly)

Avoid animating:

- `width`, `height`
- `padding`, `margin`
- `top`, `left`, `right`, `bottom`
- `font-size`, `color`

Example refactor:

```tsx
// ❌ Bad - causes reflow
<motion.div
  animate={{ width: '100%', height: '200px' }}
/>

// ✅ Good - GPU accelerated
<motion.div
  animate={{ scale: 1.5, opacity: 1 }}
/>
```

### 2. Framer Motion Optimizations

**Use `will-change` wisely:**

```tsx
<motion.div
  style={{ willChange: 'transform' }}
  animate={{ x: 100 }}
  onAnimationComplete={() => {
    // Remove will-change after animation
  }}
/>
```

**Implement lazy loading:**

```tsx
const MotionComponent = lazy(() => import('./MotionComponent'));
```

**Use `useInView` for scroll animations:**

```tsx
const ref = useRef(null);
const isInView = useInView(ref, {
  once: true,
  margin: '-100px',
});

return (
  <motion.div
    ref={ref}
    initial={{ opacity: 0 }}
    animate={isInView ? { opacity: 1 } : {}}
  />
);
```

### 3. Reduced Motion Support

Implement user preference respect:

```tsx
const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

const animationProps = prefersReducedMotion
  ? { initial: false, animate: false }
  : {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
    };

<motion.div {...animationProps} />;
```

### 4. Animation Timing Optimization

- Keep animations under 300ms for interactions
- Use 500-800ms for page transitions
- Implement stagger delays under 100ms
- Use spring animations for natural feel

```tsx
// Optimized spring config
const springConfig = {
  type: 'spring',
  stiffness: 100,
  damping: 15,
  mass: 1,
};
```

### 5. Performance Monitoring

Add FPS counter in development:

```tsx
useEffect(() => {
  if (process.env.NODE_ENV === 'development') {
    let lastTime = performance.now();
    let frames = 0;

    const checkFPS = () => {
      frames++;
      const currentTime = performance.now();

      if (currentTime >= lastTime + 1000) {
        console.log(`FPS: ${frames}`);
        frames = 0;
        lastTime = currentTime;
      }

      requestAnimationFrame(checkFPS);
    };

    checkFPS();
  }
}, []);
```

### 6. Mobile-Specific Optimizations

```tsx
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

// Reduce or remove animations on mobile
const mobileAnimation = isMobile
  ? { opacity: 1 }
  : { opacity: 1, scale: [0.8, 1] };
```

### 7. Bundle Size Optimization

```javascript
// Import only what you need
import { motion, useInView } from 'framer-motion';
// Not: import * as motion from 'framer-motion';
```

## Testing Protocol

### Performance Metrics

1. Run Chrome DevTools Performance recording
2. Check for:
   - Frames per second (target 60fps)
   - Paint and layout thrashing
   - JavaScript execution time
   - Memory usage

### Tools

```bash
# Install performance monitoring
npm install --save-dev @studio-freight/react-lenis
npm install --save-dev perfume.js

# Run performance tests
npm run build && npm run analyze
```

## BMW Portfolio Specific Optimizations

- Hero metrics counter: Use requestAnimationFrame
- Product cards hover: Transform only, no shadow animation
- Timeline scroll: Intersection Observer for triggers
- Testimonials carousel: CSS transforms for slides
- Case study transitions: Optimistic loading

## Deliverables

1. Performance report (before/after FPS)
2. List of optimized components
3. Reduced motion implementation
4. Mobile performance improvements
5. Bundle size reduction metrics
