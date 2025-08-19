import { readFileSync, existsSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

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
    'adas-simulator-product',
    'adas-simulator-opensource',
    'android-studio-plugin',
    'documentation-ai-assistant',
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
