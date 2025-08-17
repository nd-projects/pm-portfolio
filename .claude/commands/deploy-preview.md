---
allowed-tools: Bash(npm *, git *, vercel *)
argument-hint: [feature/change description]
description: Deploy a preview build with quality checks and documentation
---

# Deploy Preview Build

Deploy a preview build for: $ARGUMENTS

## Pre-deployment Checklist

### 1. Code Quality Checks

Run all checks before deployment:

```bash
# Type checking
npm run type-check || exit 1

# Linting
npm run lint || exit 1

# Format check
npm run format:check || exit 1

# Build test
npm run build || exit 1
```

### 2. Git Operations

Prepare clean commit:

```bash
# Stage changes
git add -A

# Create descriptive commit
git commit -m "feat: $ARGUMENTS

- Implementation details
- Testing performed
- Known issues (if any)
"

# Push to feature branch
git push origin feature/$ARGUMENTS
```

### 3. Vercel Deployment

Deploy to preview environment:

```bash
# Deploy with Vercel CLI
vercel --no-clipboard

# Or use GitHub integration
# Push to branch triggers automatic preview
```

### 4. Preview URL Documentation

Create deployment summary:

```markdown
## Preview Deployment

**URL**: https://pm-portfolio-[hash].vercel.app
**Branch**: feature/$ARGUMENTS
**Deployed**: [timestamp]

### Changes in this deployment:

- [List key changes]
- [Visual updates]
- [Functionality added]

### Testing checklist:

- [ ] Desktop Chrome/Safari/Firefox
- [ ] Mobile iOS/Android
- [ ] Keyboard navigation
- [ ] Screen reader tested
- [ ] Performance acceptable

### Known issues:

- [Any pending fixes]

### Feedback requested on:

- [Specific areas for review]
```

### 5. Stakeholder Communication

Notify relevant parties:

- Post preview URL in Slack/Teams
- Update project board/ticket
- Email key stakeholders if needed
- Request specific feedback

## Environment Variables

Ensure these are set in Vercel:

- `CASE_STUDY_PASSWORD`
- `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`
- Any API keys needed

## Post-deployment Verification

1. Check all routes load correctly
2. Verify animations work
3. Test protected routes
4. Check API endpoints
5. Verify analytics tracking
6. Test contact forms
7. Check SEO meta tags

## Rollback Plan

If issues found:

```bash
# Revert to previous deployment
vercel rollback

# Or redeploy previous commit
git revert HEAD
git push
```
