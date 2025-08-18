---
allowed-tools: Bash(git *)
argument-hint: [optional commit message]
description: Auto-commit all current changes with a smart generated message
---

Auto-commit all current changes with a smart generated message that follows project commitlint rules

## Process

1. **Check git status** to see what's changed
2. **Add all files to staging** (git add .)
3. **Analyze recent commits** for style patterns (git log --oneline -5)
4. **Generate commit message** following project rules
5. **Attempt commit** with retry mechanism if commitlint fails
6. **Show git log --oneline -3** to confirm success

## Commit Message Rules

### Format: `type: Description of changes`

**Allowed types:** feat, fix, docs, style, refactor, perf, test, chore, content, deploy

**Subject case:** Sentence-case (First word capitalized, rest lowercase)

- ✅ "Add blog system with draft management"
- ❌ "add blog system with draft management"
- ❌ "Add Blog System With Draft Management"

**Body line length:** Max 100 characters per line

- Break long descriptions into multiple lines
- Use proper line breaks for readability

### Examples from project history:

- "feat: Add MDX case study system with feature flag content management"
- "fix: Remove duplicate content in blog landing page"
- "docs: Update commit-changes command to exclude co-authoring details"
- "fix: Resolve TypeScript errors and improve navigation"
- "refactor: Optimize animation performance"

## Retry Logic

If commitlint fails:

1. Parse the error message for specific rule violations
2. Regenerate message following the failed rule
3. Re-attempt commit (max 3 attempts)
4. If still fails, ask user for manual message

## Important Notes

- Files may be reformatted by pre-commit hooks (prettier/eslint)
- Re-add any files modified during pre-commit process
- Generate clean messages without co-authoring or tool attribution
- Focus on WHAT changed and WHY, not HOW
