import { readFileSync } from 'fs';
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

const caseStudiesDirectory = join(process.cwd(), 'src/content/case-studies');

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

export function getAllCaseStudies(): CaseStudy[] {
  const slugs = [
    'adas-simulator',
    'android-studio-plugin',
    'documentation-ai-assistant',
  ];

  return slugs
    .map((slug) => getCaseStudyBySlug(slug))
    .filter((caseStudy): caseStudy is CaseStudy => caseStudy !== null);
}
