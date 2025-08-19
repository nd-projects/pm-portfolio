# PM Portfolio - Technical Product Manager Showcase

A modern, interactive portfolio showcasing 8 years of product leadership in developer tools and automotive technology, built with Next.js and enhanced MDX components.

## ✨ Features

- **Enhanced Content Authoring**: Custom MDX components for rich, interactive content
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Performance Optimized**: Built with Next.js 14 for fast loading and SEO
- **Developer Experience**: TypeScript, ESLint, and modern tooling

## 🎨 MDX Components

This portfolio includes custom components that can be used directly in Markdown files:

- **TileList & Tile** - Display lists as visual tiles
- **MetricGrid & Metric** - Showcase statistics and KPIs
- **CalloutBox** - Highlight important insights with icons
- **TechStack** - Display technologies as badges or tiles

### Quick Example

```mdx
<TileList columns={3}>
  <Tile>**Feature A** Description of key capability</Tile>
  <Tile>**Feature B** Another important feature</Tile>
</TileList>

<MetricGrid columns={2}>
  <Metric label="Users" value="212+" description="Active daily users" />
  <Metric label="Coverage" value="85%" description="Test scenarios" />
</MetricGrid>
```

📖 **[Complete MDX Components Guide](docs/mdx-components-guide.md)**

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## 📁 Project Structure

```text
src/
├── app/                    # Next.js App Router
│   ├── case-studies/      # Case study pages
│   └── blog/              # Blog posts
├── components/
│   ├── mdx/               # Custom MDX components
│   ├── sections/          # Page sections
│   └── ui/                # Reusable UI components
├── content/               # MDX content files
│   ├── case-studies/      # Case study content
│   └── blog/              # Blog post content
└── lib/                   # Utilities and configurations
```

## 🚀 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run type-check` - Run TypeScript checks
- `npm run lint` - Run ESLint
- `npm run lint:md` - Check markdown files

### Content Creation

1. Add new case studies to `src/content/case-studies/`
2. Use `.mdx` extension for enhanced component support
3. Include frontmatter for metadata
4. Reference the [MDX Components Guide](docs/mdx-components-guide.md) for formatting options

## Learn More

- **[MDX Components Guide](docs/mdx-components-guide.md)** - Complete reference for custom components
- **[Portfolio Implementation Guide](docs/portfolio-implementation-guide.md)** - Technical architecture details
- **[Next.js Documentation](https://nextjs.org/docs)** - Framework features and API
- **[Tailwind CSS](https://tailwindcss.com/docs)** - Styling utilities

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
