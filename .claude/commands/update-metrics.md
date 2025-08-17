---
allowed-tools: Grep, Read, Edit, MultiEdit
argument-hint: [metric name] [old value] to [new value]
description: Update metrics across the entire codebase with verification
---

# Update Metrics

Update the following metric across the codebase: $ARGUMENTS

## Metric Update Process

### 1. Parse the Update Request

Extract from $ARGUMENTS:

- Metric name (e.g., "Safety Coverage")
- Old value
- New value
- Related context updates

### 2. Search All Occurrences

Find metric in these locations:

```bash
# Search patterns
grep -r "Safety Coverage" --include="*.tsx" --include="*.ts" --include="*.md" --include="*.mdx"
grep -r "85%" --include="*.tsx" # If percentage
grep -r "212" --include="*.tsx"  # If number
```

Common locations:

- `components/sections/Hero.tsx` - Main metrics display
- `components/custom/MetricCard.tsx` - Animation values
- `CLAUDE.md` - Project context
- `README.md` - Project documentation
- Case study files in `content/case-studies/`
- Blog posts in `content/blog/`
- API responses in `app/api/`

### 3. Update TypeScript Constants

Update metric definitions:

```typescript
// lib/constants/metrics.ts
export const PORTFOLIO_METRICS = {
  safetyCoverage: {
    value: 85, // Update this
    label: 'Safety Coverage',
    suffix: '%',
    description: 'ADAS test scenarios covered',
  },
  // ... other metrics
};
```

### 4. Update Animation Values

Ensure animations still work:

```typescript
// components/custom/MetricCard.tsx
// Check if hardcoded values need updating
const maxValue = 100; // For percentages
const animationDuration = 2000; // Adjust if needed for larger numbers
```

### 5. Update Content Files

MDX and Markdown files:

```markdown
<!-- content/case-studies/adas-simulator.mdx -->

metrics:
safetyCoverage: 85 # Update here
```

### 6. Verify Derived Calculations

Check for any calculations using the metric:

```typescript
// If metric is used in calculations
const improvement = ((currentValue - previousValue) / previousValue) * 100;
const monthlyGrowth = totalGrowth / monthsActive;
```

### 7. Update Testimonials

If metric appears in quotes:

```typescript
// components/sections/Testimonials.tsx
{
  quote: 'Improved safety coverage to 85%...'; // Update if referenced
}
```

### 8. Update Meta Descriptions

SEO descriptions mentioning metrics:

```typescript
// app/layout.tsx or page metadata
export const metadata = {
  description: 'PM with 8 years experience, 85% safety coverage...', // Update
};
```

### 9. Test All Updates

Verification checklist:

- [ ] Metric displays correctly
- [ ] Animation counts to correct value
- [ ] No TypeScript errors
- [ ] Responsive layouts still work
- [ ] Graph/chart visualizations updated
- [ ] Build passes successfully

### 10. Create Update Summary

Document the change:

```markdown
## Metric Update: $ARGUMENTS

### Changed:

- Previous value: [old]
- New value: [new]
- Reason: [context]

### Files modified:

- [List all files]

### Verified:

- [ ] All occurrences updated
- [ ] Animations working
- [ ] Build successful
- [ ] Deployed to preview
```

## Common Metrics Reference

Quick reference for portfolio metrics:

- Safety Coverage: Currently 85%
- Active Users: Currently 212+
- Products Shipped: Currently 3
- Years Experience: Currently 8
- Engineers Influenced: Variable
- Cost Savings: Project-specific
- Performance Improvements: Percentage-based
