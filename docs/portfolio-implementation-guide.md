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

## 📅 Revised Development Roadmap

### Week 1: Foundation & Hero

- [x] Direct to code
- [x] Next.js setup with all dependencies
- [x] Hero section with animated metrics
- [x] Basic navigation and layout
- [x] Deploy to Vercel (get feedback URL early)

### Week 2: Products & First Case Study

- [ ] Product grid with hover effects
- [ ] ADAS Simulator case study (public version)
- [ ] Code showcase component
- [x] Timeline/career journey

### Week 3: Social Proof & Thought Leadership

- [ ] Testimonials section (gather 3-5)
- [x] Blog infrastructure
- [ ] Write "Why Every PM Should Code" post
- [ ] Newsletter signup (ConvertKit/Substack?)

### Week 4: Protected Content & Polish

- [ ] Password-protected detailed metrics
- [ ] PDF CV generator
- [ ] Analytics setup (Plausible)
- [ ] SEO optimization
- [ ] Performance audit

### Week 5: Content Sprint

- [ ] Complete all 3 case studies
- [ ] Write 2nd blog post
- [ ] Gather remaining testimonials
- [ ] Create downloadable resources

### Week 6: Launch Prep

- [ ] Beta test with 5-10 trusted reviewers
- [ ] Implement feedback
- [ ] Prepare launch announcement
- [ ] LinkedIn post draft
- [ ] Outreach list for sharing

---

## 🎯 Quick Wins for Week 1

1. **Get a URL deployed by Day 2** - Even if just the hero section
2. **Share with 1 trusted advisor by Day 3** - Early feedback is gold
3. **Write testimonial requests by Day 4** - They need time to respond
4. **Draft blog post outline by Day 5** - Thought leadership takes time

---

## 📝 Content You Need to Gather Now

### Immediate Needs

- [ ] Professional headshot (high-res)
- [ ] Screenshots of Android Studio plugin (sanitized)
- [ ] Architecture diagram for simulator
- [ ] Unity blog post screenshots
- [ ] Open source contribution graphs from GitHub

### For Testimonials

- [ ] List of 10 engineers who transitioned or were influenced
- [ ] Their current LinkedIn/contact info
- [ ] Specific project context for each

### For Blog

- [ ] Code snippets you've written as PM
- [ ] Examples of technical decisions you've made
- [ ] PRs you've reviewed

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
