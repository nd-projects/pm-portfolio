import { readFileSync, existsSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import React from 'react';
import { compileMDX } from 'next-mdx-remote/rsc';
import { TileList, Tile } from '../components/mdx/TileList';
import { MetricGrid, Metric } from '../components/mdx/MetricGrid';
import { CalloutBox } from '../components/mdx/CalloutBox';
import { TechStack } from '../components/mdx/TechStack';

export interface CaseStudyFrontmatter {
  title: string;
  description: string;
  status: string;
  category: string;
  technologies: string[];
  timeline: string;
  team_size: string;
  metrics: Array<{
    label: string;
    value: string;
    description: string;
  }>;
}

export interface CaseStudy {
  slug: string;
  frontmatter: CaseStudyFrontmatter;
  content: string;
}

export interface CaseStudyWithMDX {
  slug: string;
  frontmatter: CaseStudyFrontmatter;
  content: React.ReactElement;
}

export interface BlogPostFrontmatter {
  title: string;
  description: string;
  status: string;
  category: string;
  publishedAt: string;
  tags: string[];
}

export interface BlogPost {
  slug: string;
  frontmatter: BlogPostFrontmatter;
  content: string;
}

const caseStudiesDirectory = join(process.cwd(), 'src/content/case-studies');
const blogPostsDirectory = join(process.cwd(), 'src/content/blog');

export function getCaseStudyBySlug(slug: string): CaseStudy | null {
  try {
    const fullPath = join(caseStudiesDirectory, `${slug}.mdx`);
    const fileContents = readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const caseStudy = {
      slug,
      frontmatter: data as CaseStudyFrontmatter,
      content,
    };

    // Filter based on status and environment
    if (!shouldShowCaseStudy(caseStudy.frontmatter.status)) {
      return null;
    }

    return caseStudy;
  } catch (error) {
    console.error(`Error reading case study ${slug}:`, error);
    return null;
  }
}

function shouldShowCaseStudy(status: string): boolean {
  const showDrafts = process.env.SHOW_DRAFT_CASE_STUDIES === 'true';

  // Always show live content
  if (status === 'live') {
    return true;
  }

  // Show draft content only if feature flag is enabled
  if (status === 'draft' && showDrafts) {
    return true;
  }

  return false;
}

function shouldShowBlogPost(status: string): boolean {
  const showDrafts = process.env.SHOW_DRAFT_BLOG_POSTS === 'true';

  // Always show live content
  if (status === 'live') {
    return true;
  }

  // Show draft content only if feature flag is enabled
  if (status === 'draft' && showDrafts) {
    return true;
  }

  return false;
}

export function getAllCaseStudies(): CaseStudy[] {
  const slugs = [
    'android-studio-plugin',
    'documentation-ai-assistant',
    'adas-simulator-product',
    'adas-simulator-opensource',
  ];

  return slugs
    .map((slug) => getCaseStudyBySlug(slug))
    .filter((caseStudy): caseStudy is CaseStudy => caseStudy !== null);
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = join(blogPostsDirectory, `${slug}.mdx`);

    // Check if file exists first to avoid unnecessary error logging
    if (!existsSync(fullPath)) {
      return null;
    }

    const fileContents = readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const blogPost = {
      slug,
      frontmatter: data as BlogPostFrontmatter,
      content,
    };

    // Filter based on status and environment
    if (!shouldShowBlogPost(blogPost.frontmatter.status)) {
      return null;
    }

    return blogPost;
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error);
    return null;
  }
}

export function getAllBlogPosts(): BlogPost[] {
  const slugs = ['building-developer-tools-that-scale'];

  return slugs
    .map((slug) => getBlogPostBySlug(slug))
    .filter((blogPost): blogPost is BlogPost => blogPost !== null);
}

export async function getCaseStudyWithMDX(
  slug: string
): Promise<CaseStudyWithMDX | null> {
  try {
    const fullPath = join(caseStudiesDirectory, `${slug}.mdx`);
    const fileContents = readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    // Filter based on status and environment
    if (!shouldShowCaseStudy(data.status)) {
      return null;
    }

    // Compile MDX content
    const { content: compiledContent } = await compileMDX({
      source: content,
      components: {
        // Custom components for enhanced formatting
        TileList,
        Tile,
        MetricGrid,
        Metric,
        CalloutBox,
        TechStack,

        // Standard HTML elements with custom styling
        h1: ({ children }: { children: React.ReactNode }) =>
          React.createElement(
            'h1',
            { className: 'text-3xl font-bold text-gray-900 mt-8 mb-4' },
            children
          ),
        h2: ({ children }: { children: React.ReactNode }) =>
          React.createElement(
            'h2',
            { className: 'text-2xl font-semibold text-gray-900 mt-6 mb-3' },
            children
          ),
        h3: ({ children }: { children: React.ReactNode }) =>
          React.createElement(
            'h3',
            { className: 'text-xl font-semibold text-gray-900 mt-4 mb-2' },
            children
          ),
        h4: ({ children }: { children: React.ReactNode }) =>
          React.createElement(
            'h4',
            { className: 'text-lg font-semibold text-gray-900 mt-3 mb-2' },
            children
          ),
        p: ({ children }: { children: React.ReactNode }) =>
          React.createElement(
            'p',
            { className: 'text-gray-700 mb-4 leading-relaxed' },
            children
          ),
        ul: ({ children }: { children: React.ReactNode }) =>
          React.createElement(
            'ul',
            { className: 'list-disc list-inside mb-4 space-y-2 text-gray-700' },
            children
          ),
        ol: ({ children }: { children: React.ReactNode }) =>
          React.createElement(
            'ol',
            {
              className:
                'list-decimal list-inside mb-4 space-y-2 text-gray-700',
            },
            children
          ),
        li: ({ children }: { children: React.ReactNode }) =>
          React.createElement('li', { className: 'text-gray-700' }, children),
        strong: ({ children }: { children: React.ReactNode }) =>
          React.createElement(
            'strong',
            { className: 'font-semibold text-gray-900' },
            children
          ),
        em: ({ children }: { children: React.ReactNode }) =>
          React.createElement(
            'em',
            { className: 'italic text-gray-700' },
            children
          ),
        code: ({
          children,
          className,
        }: {
          children: React.ReactNode;
          className?: string;
        }) => {
          const isInline = !className || !className.startsWith('language-');
          return isInline
            ? React.createElement(
                'code',
                {
                  className:
                    'bg-gray-100 text-gray-900 px-1 py-0.5 rounded text-sm',
                },
                children
              )
            : React.createElement(
                'pre',
                {
                  className:
                    'bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-4',
                },
                React.createElement('code', { className }, children)
              );
        },
        blockquote: ({ children }: { children: React.ReactNode }) =>
          React.createElement(
            'blockquote',
            {
              className:
                'border-l-4 border-blue-200 bg-blue-50 pl-4 py-2 my-4 italic text-blue-900',
            },
            children
          ),
        hr: () =>
          React.createElement('hr', { className: 'border-gray-200 my-8' }),
      },
      options: {
        parseFrontmatter: false, // We already parsed it with gray-matter
      },
    });

    return {
      slug,
      frontmatter: data as CaseStudyFrontmatter,
      content: compiledContent,
    };
  } catch (error) {
    console.error(`Error reading case study ${slug}:`, error);
    return null;
  }
}
