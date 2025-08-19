# Portfolio Implementation Guide

## Code-First Development Approach

---

## 🚀 Quick Start (Day 1)

### Initial Setup Commands

```bash
# Create Next.js project with TypeScript and Tailwind
npx create-next-app@latest pm-portfolio --typescript --tailwind --app --eslint
cd pm-portfolio

# Install core dependencies
npm install framer-motion recharts lucide-react @vercel/analytics
npm install @radix-ui/react-dialog @radix-ui/react-tabs @radix-ui/react-tooltip @radix-ui/react-avatar

# Install shadcn/ui CLI
npx shadcn@latest init

# Add initial components
npx shadcn@latest add button card badge tabs tooltip avatar

# Development dependencies
npm install -D @types/node shiki fumadocs-core fumadocs-mdx
npm install -D @commitlint/cli @commitlint/config-conventional husky lint-staged
```

### Project Structure

```text
pm-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── case-studies/
│   │   │   ├── [slug]/
│   │   │   │   └── page.tsx
│   │   │   └── protected/
│   │   │       └── [slug]/
│   │   │           └── page.tsx
│   │   ├── blog/
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   └── api/
│   │       └── download-cv/
│   │           └── route.ts
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── ProductGrid.tsx
│   │   │   ├── Timeline.tsx
│   │   │   └── Testimonials.tsx
│   │   ├── ui/
│   │   │   ├── avatar.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── tabs.tsx
│   │   │   └── tooltip.tsx
│   │   └── custom/
│   │       ├── MetricCard.tsx
│   │       ├── CodeShowcase.tsx
│   │       └── ProductCard.tsx
│   ├── content/
│   │   ├── case-studies/
│   │   ├── blog/
│   │   └── testimonials/
│   └── lib/
│       └── utils.ts
├── public/
│   └── assets/
├── docs/
│   ├── portfolio-implementation-guide.md
│   └── pm-portfolio-prd.md
├── .claude/
│   └── context.json
├── components.json
├── next.config.ts
├── tsconfig.json
├── package.json
└── CLAUDE.md
```

---

## 📝 MDX Enhanced Content System

### MDX Setup and Configuration

The portfolio uses MDX for enhanced content authoring, allowing React components to be embedded directly in Markdown files.

#### MDX Dependencies Installation

```bash
# Core MDX dependencies
npm install @next/mdx @mdx-js/loader @mdx-js/react @types/mdx
npm install next-mdx-remote

# Configure Next.js for MDX
# next.config.ts already includes:
# pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx']
# experimental: { mdxRs: true }
```

#### Custom MDX Components Architecture

```typescript
// mdx-components.tsx - Root-level MDX components configuration
import type { MDXComponents } from 'mdx/types';
import { TileList, Tile } from '@/components/mdx/TileList';
import { MetricGrid, Metric } from '@/components/mdx/MetricGrid';
import { CalloutBox } from '@/components/mdx/CalloutBox';
import { TechStack } from '@/components/mdx/TechStack';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Custom components
    TileList, Tile, MetricGrid, Metric, CalloutBox, TechStack,

    // Styled HTML elements
    h1: ({ children }) => <h1 className="text-3xl font-bold...">{children}</h1>,
    // ... other element overrides

    ...components,
  };
}
```

#### MDX Processing Pipeline

```typescript
// src/lib/mdx.ts
import { compileMDX } from 'next-mdx-remote/rsc';
import { TileList, Tile } from '../components/mdx/TileList';
// ... other imports

export async function getCaseStudyWithMDX(
  slug: string
): Promise<CaseStudyWithMDX | null> {
  const { content: compiledContent } = await compileMDX({
    source: content,
    components: {
      TileList,
      Tile,
      MetricGrid,
      Metric,
      CalloutBox,
      TechStack,
      // ... styled HTML elements
    },
    options: { parseFrontmatter: false },
  });

  return { slug, frontmatter, content: compiledContent };
}
```

### Custom MDX Component Implementation

#### 1. TileList Component

```tsx
// src/components/mdx/TileList.tsx
interface TileListProps {
  children: React.ReactNode;
  columns?: 1 | 2 | 3 | 4;
}

export function TileList({ children, columns = 3 }: TileListProps) {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div className={cn('grid gap-4 my-6 not-prose', gridCols[columns])}>
      {children}
    </div>
  );
}
```

#### 2. MetricGrid Component

```tsx
// src/components/mdx/MetricGrid.tsx
interface MetricProps {
  label: string;
  value: string;
  description?: string;
}

export function Metric({ label, value, description }: MetricProps) {
  return (
    <div className="bg-gray-50 rounded-lg p-6 text-center">
      <div className="text-2xl font-bold text-blue-600 mb-2">{value}</div>
      <div className="font-semibold text-gray-900 mb-1">{label}</div>
      {description && (
        <div className="text-sm text-gray-600">{description}</div>
      )}
    </div>
  );
}
```

### Content Authoring Workflow

#### File Structure

```text
src/content/
├── case-studies/
│   ├── adas-simulator-product.mdx
│   ├── android-studio-plugin.mdx
│   └── documentation-ai-assistant.mdx
└── blog/
    └── building-developer-tools-that-scale.mdx
```

#### MDX Content Template

```mdx
---
title: 'Project Title'
description: 'Brief project description'
status: 'live'
category: 'Product Strategy'
technologies: ['React', 'TypeScript']
timeline: '6 months'
team_size: '5 engineers'
metrics:
  - label: 'Users'
    value: '100+'
    description: 'Active daily users'
---

# Project Title

Regular markdown content works as usual.

<CalloutBox type="tip" title="Key Insight">
  Important strategic insight or lesson learned.
</CalloutBox>

<TileList columns={3}>
  <Tile>**Feature A** Description of key capability</Tile>
  <Tile>**Feature B** Another important aspect</Tile>
</TileList>

<MetricGrid columns={2}>
  <Metric label="Impact" value="50%" description="Performance improvement" />
  <Metric label="Adoption" value="95%" description="Team usage rate" />
</MetricGrid>

<TechStack
  technologies={['React', 'TypeScript', 'Next.js']}
  title="Technology Stack"
  variant="tiles"
/>
```

### MDX Troubleshooting

#### Common Issues and Solutions

1. **Component Not Rendering**

   ```mdx
   <!-- ❌ Wrong: lowercase component -->

   <tilelist columns={3}>

   <!-- ✅ Correct: PascalCase -->

   <TileList columns={3}>
   ```

2. **Props Not Working**

   ```mdx
   <!-- ❌ Wrong: string instead of number -->

   <TileList columns="3">

   <!-- ✅ Correct: number in curly braces -->

   <TileList columns={3}>
   ```

3. **MDX Parsing Errors**
   - Check for unclosed tags
   - Escape special characters: `<`, `>`, `&`
   - Use `under 30` instead of `<30` in content
   - Avoid numbered lists starting with `1.` (use `1.` with space)

4. **Build Failures**

   ```bash
   # Clear Next.js cache if encountering build issues
   rm -rf .next
   npm run build
   ```

### Performance Considerations

- MDX compilation happens at build time for static content
- Components are tree-shaken and optimized
- CSS classes use Tailwind's purging for minimal bundle size
- `not-prose` class prevents Tailwind typography conflicts

---

## 📊 Component Specifications

### 1. Hero Section with Metrics Bar

```tsx
// src/components/sections/Hero.tsx
import { motion } from 'framer-motion';
import { MetricCard } from '@/components/custom/MetricCard';

const metrics = [
  { label: 'Safety Coverage', value: 85, suffix: '%' },
  { label: 'Active Users', value: 212, suffix: '+' },
  { label: 'Products Shipped', value: 3, suffix: '' },
  { label: 'Years Experience', value: 8, suffix: '' },
];

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-6xl font-bold mb-4">
          Building Developer Tools That Ship Safer Cars
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          8 years transforming how 200+ BMW engineers build, test, and deploy
          automotive software
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {metrics.map((metric, i) => (
            <MetricCard key={i} {...metric} delay={i * 0.1} />
          ))}
        </div>

        <div className="flex gap-4">
          <button className="px-6 py-3 bg-black text-white rounded-lg">
            View Case Studies
          </button>
          <button className="px-6 py-3 border border-black rounded-lg">
            Download 1-Pager
          </button>
        </div>
      </motion.div>
    </section>
  );
}
```

### 2. Animated Metric Card

```tsx
// src/components/custom/MetricCard.tsx
'use client';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

export function MetricCard({ label, value, suffix, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = value / 50;
      const timer = setInterval(() => {
        start += increment;
        if (start > value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 30);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay }}
      className="p-6 bg-gray-50 rounded-xl"
    >
      <div className="text-3xl font-bold">
        {count}
        {suffix}
      </div>
      <div className="text-sm text-gray-600 mt-1">{label}</div>
    </motion.div>
  );
}
```

---

## 💭 Thought Leadership Section

### Blog Post Ideas & Outlines

#### 1. "Why Every PM Should Code" (Launch Post)

```markdown
# Content Structure

## Hook

"I've never hired a PM who couldn't read a pull request. Here's why."

## Main Points

1. **Credibility with Engineering**
   - Story: Debugging session that earned team respect
   - Data: 73% faster technical decisions

2. **Better Technical Decisions**
   - Framework: Technical Debt vs Product Velocity
   - Case study: Choosing microservices architecture

3. **Faster Iteration Cycles**
   - Example: Prototyping Android Studio plugin myself
   - Impact: 3 weeks saved in discovery phase

4. **Speaking the Same Language**
   - Before/After: Requirement documents
   - Tool: My PR review checklist for PMs

## Call to Action

"Start with SQL. Then Python. Then read your team's code daily."
```

#### 2. "From Internal Tools to Enterprise Products"

- The mindset shift from captive to competitive users
- Building feedback loops without direct access
- Lessons from BMW's developer ecosystem

#### 3. "The Platform PM Playbook"

- Why platforms > features
- Measuring platform success
- The Android Studio plugin case study

### Blog Component Structure

```tsx
// src/components/custom/BlogCard.tsx
interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  featured?: boolean;
}

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group cursor-pointer">
      {post.featured && (
        <span className="text-sm text-blue-600 font-medium">Featured</span>
      )}
      <h3 className="text-xl font-bold group-hover:text-blue-600 transition">
        {post.title}
      </h3>
      <p className="text-gray-600 mt-2">{post.excerpt}</p>
      <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
        <span>{post.date}</span>
        <span>·</span>
        <span>{post.readTime}</span>
      </div>
    </article>
  );
}
```

---

## 👥 Social Proof Implementation

### Testimonial Collection Template

#### Email Template for Former Colleagues

```markdown
Subject: Quick favor - Portfolio testimonial?

Hi [Name],

I'm building my PM portfolio and highlighting how our work together influenced career paths.

Since you transitioned from engineering to PO after working on [Project], would you be open to sharing a 2-3 sentence testimonial about that experience?

Something like:

- What you learned about product thinking
- What made you consider the career change
- Any specific moment/project that influenced you

No pressure at all, but it would mean a lot!

Best,
[Your name]
```

### Testimonial Display Component

```tsx
// src/components/sections/Testimonials.tsx
const testimonials = [
  {
    name: 'Anonymous Senior Engineer → PO',
    role: 'Former Android Team Lead',
    company: 'BMW',
    quote:
      'Working with [Your Name] completely changed how I viewed product development. Watching him navigate technical complexity while keeping user needs front and center inspired me to transition to a PO role myself.',
    project: 'Android Studio Plugin',
  },
  {
    name: 'Anonymous Engineer → PO',
    role: 'Former Simulation Developer',
    company: 'BMW',
    quote:
      'The way [Your Name] structured our discovery process and involved engineers in user research showed me that product management is where engineering meets real impact.',
    project: 'ADAS Simulator',
  },
];

export function Testimonials() {
  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold mb-12">
        Engineers Who Became Product Owners
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 rounded-xl"
          >
            <blockquote className="text-lg mb-4">
              "{testimonial.quote}"
            </blockquote>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-gray-600">
                  {testimonial.role}, {testimonial.company}
                </div>
              </div>
              <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                {testimonial.project}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
```

---

## 🔐 Protected Content Implementation

### Vercel Password Protection Setup

```javascript
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Check if the path requires authentication
  if (request.nextUrl.pathname.startsWith('/case-studies/protected')) {
    const authHeader = request.headers.get('authorization');

    if (!authHeader || !verifyPassword(authHeader)) {
      return new NextResponse('Authentication required', {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="Protected Case Studies"',
        },
      });
    }
  }

  return NextResponse.next();
}

function verifyPassword(authHeader: string) {
  const [, credentials] = authHeader.split(' ');
  const [username, password] = Buffer.from(credentials, 'base64')
    .toString()
    .split(':');

  return password === process.env.CASE_STUDY_PASSWORD;
}
```

---

## 📅 Development Roadmap

### ✅ Phase 1: Foundation Complete

- [x] Next.js setup with TypeScript and Tailwind
- [x] MDX system with custom components (TileList, MetricGrid, CalloutBox, TechStack)
- [x] Hero section with animated metrics
- [x] Navigation and layout system
- [x] Timeline/career journey component
- [x] Contact form with API integration
- [x] Blog infrastructure and routing
- [x] Case study infrastructure and routing
- [x] Technical showcase section
- [x] Impact stories section
- [x] Initial SEO optimization (sitemap, robots.txt, structured data)

### 🎯 Phase 2: Content & Case Studies (Current Priority)

**Case Studies - Restructured Priority:**

- [x] ADAS Simulator - Split into product and open source versions
- [x] Android Studio Plugin - Complete with TileList integration
- [x] Documentation AI Assistant - Complete structure
- [ ] Polish and finalize all case study content
- [ ] Add case study thumbnails and preview cards

**Content Creation:**

- [x] Building Developer Tools That Scale blog post structure
- [ ] Complete blog post content and publish
- [ ] Create 2-3 additional thought leadership posts
- [ ] Add case study filtering and search

### 🔥 Phase 3: Social Proof & Testimonials

- [ ] Gather testimonials from engineers who became POs (target: 5-7)
- [ ] Implement testimonials display component
- [ ] Add LinkedIn/GitHub integration for social proof
- [ ] Create "Engineers I've Influenced" showcase
- [ ] Newsletter signup integration

### 🛡️ Phase 4: Protected Content (Lower Priority)

- [ ] Password-protected detailed case studies
- [ ] Metrics dashboard for employers
- [ ] Downloadable portfolio summary
- [ ] CV generator API

### 🚀 Phase 5: Launch & Distribution

- [ ] Performance optimization and audit
- [ ] Rerun SEO optimization top ensure maximum impact
- [ ] Analytics setup (Vercel Analytics)
- [ ] Beta testing with 5-10 reviewers
- [ ] Launch announcement strategy
- [ ] LinkedIn content calendar

---

## 🎯 Current Phase Quick Wins

### Immediate Actions (Next 1-2 Days)

1. **Finalize Case Study Content** - Polish existing ADAS, Android Plugin, and AI Assistant case studies
2. **Add Case Study Preview Cards** - Create compelling thumbnails and summaries for the main page
3. **Complete Blog Post** - Finish "Building Developer Tools That Scale" content

### This Week Priority

1. **Testimonial Outreach** - Contact 5-7 former colleagues who transitioned to PO roles
2. **Case Study Filtering** - Add technology and category filters to case studies page
3. **Performance Check** - Run Lighthouse audit and optimize any issues
4. **Content Review** - Get feedback on existing case studies from 2-3 trusted advisors

---

## 📝 Content Priorities - Current Phase

### High Priority (This Week)

**Case Study Assets:**

- [ ] Case study thumbnail images (3 needed)
- [ ] Android Studio plugin screenshots (sanitized)
- [ ] ADAS simulator architecture diagram
- [ ] Performance metrics graphs/charts

**Testimonials:**

- [ ] Contact list of engineers who became POs (target: 8-10 contacts)
- [ ] Draft personalized outreach messages
- [ ] Follow-up schedule for responses

**Blog Content:**

- [ ] Complete "Building Developer Tools That Scale" post
- [ ] Code examples and screenshots for technical depth
- [ ] Metrics and impact data for credibility

### Medium Priority (Next 2 Weeks)

**Social Proof:**

- [ ] GitHub contribution graphs
- [ ] LinkedIn recommendations
- [ ] Open source project contributions
- [ ] Conference talk or presentation slides

**Portfolio Polish:**

- [ ] Professional headshot (high-res)
- [ ] CV/resume in multiple formats
- [ ] Case study video demos (if applicable)

---

## 🚦 Development Environment Setup

```bash
# VS Code Extensions to Install
- Tailwind CSS IntelliSense
- Prettier
- ESLint
- GitLens
- Auto Rename Tag

# Recommended VS Code Settings
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "tailwindCSS.experimental.classRegex": [
    ["clsx\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
  ]
}
```

---

_Ready to start coding? Run the setup commands and let's build!_
