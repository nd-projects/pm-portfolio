---
allowed-tools: Write, Edit, Read, LS
argument-hint: [ComponentName]
description: Create a new React component with TypeScript and animations
---

# Create React Component

You need to create a new React component named: $ARGUMENTS

## Requirements

- Use TypeScript with proper interface definitions for all props
- Include Framer Motion animations for scroll-triggered and hover effects
- Use only Tailwind CSS utility classes (no inline styles or CSS modules)
- Export as named export from the file
- Include comprehensive JSDoc comments for all props
- Implement mobile-first responsive design (test at 320px, 768px, 1024px+)
- Add proper ARIA labels and semantic HTML for accessibility
- Follow the existing component patterns from portfolio-implementation-guide.md

## Steps to Complete

1. Create the component file in the appropriate directory (components/sections, components/custom, or components/ui)
2. Define TypeScript interfaces for all props at the top of the file
3. Implement the component with proper state management if needed
4. Add Framer Motion animations that enhance user experience
5. Ensure all interactive elements are keyboard accessible
6. Test the component in isolation before integrating
7. Update any index files to export the new component

## Context

This is for a PM portfolio site showcasing 8 years of experience at BMW building developer tools. The component should feel professional yet modern, with subtle animations that don't distract from content.
