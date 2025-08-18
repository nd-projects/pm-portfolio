---
allowed-tools: Bash(git *)
argument-hint: [optional commit message]
description: Auto-commit all current changes with a smart generated message
---

Auto-commit all current changes with a smart generated message

1. Check git status to see what's changed
2. Add all files to staging (git add .)
3. Analyze the changes and generate a descriptive commit message based on:
   - Files modified (components, content, config, etc.)
   - Type of changes (feat, fix, style, docs, refactor)
   - Brief description of what was accomplished
4. Commit with the generated message (DO NOT include co-authoring details)
5. Show git log --oneline -3 to confirm the commit was successful

Examples of good commit messages:

- "feat: add animated Hero section with metrics"
- "fix: resolve TypeScript errors in MetricCard"
- "style: improve responsive design for mobile"
- "docs: update portfolio implementation guide"
- "refactor: optimize animation performance"

Follow conventional commit format: type(scope): description

IMPORTANT: Generate clean commit messages without any co-authoring or tool attribution details.
