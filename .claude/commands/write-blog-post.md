---
allowed-tools: Write, Edit, Read, LS
argument-hint: [topic/theme]
description: Create a thought leadership blog post with SEO optimization
---

# Write Technical Blog Post

Create a thought leadership blog post about: $ARGUMENTS

## File Creation Process

1. **Create MDX file** in `src/content/blog/` using kebab-case naming (e.g., `building-developer-tools.mdx`)
2. **Add slug to discovery** - Update `getAllBlogPosts()` function in `src/lib/mdx.ts` to include the new slug
3. **Set initial status** to `'draft'` for development

## Required MDX Frontmatter

```yaml
---
title: 'Compelling Title: Specific Outcome/Learning'
description: 'One-sentence hook that explains the value proposition and target audience (max 160 chars for SEO)'
status: 'draft'  # Use 'draft' initially, change to 'live' when ready to publish
category: 'Product Strategy' | 'Engineering Leadership' | 'Developer Experience' | 'Team Culture'
publishedAt: 'Month DD, YYYY'
tags: ['Developer Experience', 'Product Strategy', 'Engineering Culture', 'etc']
---
```

## Blog Post Structure

### Opening Hook

Start with one of these patterns:

- Controversial statement that challenges conventional wisdom
- Specific anecdote from BMW experience
- Surprising statistic about developer productivity
- Question that resonates with technical PMs

### Main Content Requirements

1. **Establish credibility early** - Mention relevant experience within first 2 paragraphs
2. **Use specific examples** - Include 3-5 concrete examples from BMW developer tools work
3. **Include code snippets** - Show actual code/config examples where relevant
4. **Data-driven arguments** - Support claims with metrics and outcomes
5. **Visual breaks** - Use subheadings, bullet points, and code blocks for scannability

### Technical Depth

- Assume reader is a senior PM or engineering leader
- Don't shy away from technical details
- Explain complex concepts with metaphors
- Include actual commands, queries, or code snippets

### SEO Optimization

- Target keyword: [Extract from $ARGUMENTS]
- Meta description: 155 characters max
- Use H2 and H3 headers strategically
- Include internal links to case studies

### Call to Action

End with one of:

- Actionable framework or checklist
- Challenge to conventional thinking
- Question for reader reflection
- Link to detailed case study

### Social Media Versions

Create accompanying:

- LinkedIn post (1300 chars max) with key insight
- Twitter/X thread (5-7 tweets) with main points
- One quotable snippet for sharing

## Draft/Live Workflow

### Development Phase

- Set `status: 'draft'` in frontmatter
- Run `SHOW_DRAFT_BLOG_POSTS=true npm run dev` to preview locally
- Test content, formatting, and links

### Publishing Phase

- Change `status: 'draft'` to `status: 'live'` when ready
- Run `npm run build` to include in static generation
- Deploy to make live

## Technical Requirements

- **File location**: `src/content/blog/[slug].mdx`
- **Slug format**: kebab-case (e.g., `my-blog-post.mdx`)
- **Discovery**: Add slug to `getAllBlogPosts()` array in `src/lib/mdx.ts`
- **Preview**: Use `SHOW_DRAFT_BLOG_POSTS=true` environment variable for draft content

## Tone and Voice

Professional but conversational. Position as "PM who codes" - technically credible but focused on product outcomes. Use "we" when discussing team achievements, "I" for personal insights.
