---
allowed-tools: Read, Edit, Grep, Bash, MultiEdit
argument-hint: [issue description]
description: Analyze and fix code issues with proper testing and verification
---

# Fix Issue

Analyze and fix the following issue: $ARGUMENTS

## Diagnostic Process

### 1. Issue Identification

- Search codebase for relevant files
- Identify the specific error or problem
- Check browser console and terminal for errors
- Review recent changes that might have caused the issue

### 2. Root Cause Analysis

- Trace the error to its source
- Check for TypeScript type mismatches
- Verify dependency versions
- Test in different environments (dev/build)

### 3. Implementation

Fix the issue while ensuring:

- No new TypeScript errors introduced
- Existing tests still pass
- No accessibility regressions
- Responsive design remains intact
- Performance is not degraded

### 4. Verification

- Test the fix locally
- Check all affected components
- Verify in different viewport sizes
- Test with keyboard navigation
- Check browser compatibility

### 5. Documentation

- Add comments explaining the fix if non-obvious
- Update any relevant documentation
- Note any breaking changes
- Create or update tests if applicable

## Code Standards

- Follow existing code patterns in the project
- Use proper TypeScript types (avoid 'any')
- Maintain consistent Tailwind class ordering
- Ensure Prettier and ESLint pass

## Common Issues Reference

- Hydration mismatches: Check for client-only code
- Build failures: Verify all imports are correct
- Type errors: Ensure interfaces match component props
- Animation jank: Use transform/opacity only
