import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Badge } from '@/components/ui/badge';
import {
  getCaseStudyWithMDX,
  getCaseStudyBySlug,
  getAllCaseStudies,
} from '@/lib/mdx';

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return {};
  }

  const title = `${caseStudy.frontmatter.title} | Case Study - Technical PM Portfolio`;
  const description = caseStudy.frontmatter.description;

  return {
    title,
    description,
    keywords: [
      caseStudy.frontmatter.category,
      'technical product management',
      'automotive software development',
      'developer tools case study',
      'BMW software engineering',
      ...caseStudy.frontmatter.technologies,
    ],
    alternates: {
      canonical: `https://pm-portfolio.vercel.app/case-studies/${slug}`,
    },
    openGraph: {
      title,
      description,
      type: 'article',
      url: `https://pm-portfolio.vercel.app/case-studies/${slug}`,
      siteName: 'PM Portfolio',
      images: [
        {
          url: `/assets/case-studies/${slug}-og.png`,
          width: 1200,
          height: 630,
          alt: caseStudy.frontmatter.title,
        },
      ],
      authors: ['Technical Product Manager'],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`/assets/case-studies/${slug}-og.png`],
    },
    robots: 'index, follow',
  };
}

export async function generateStaticParams() {
  const caseStudies = getAllCaseStudies();
  return caseStudies.map((caseStudy) => ({
    slug: caseStudy.slug,
  }));
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const caseStudy = await getCaseStudyWithMDX(slug);

  if (!caseStudy) {
    notFound();
  }

  const { frontmatter, content } = caseStudy;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: frontmatter.title,
    description: frontmatter.description,
    url: `https://pm-portfolio.vercel.app/case-studies/${slug}`,
    author: {
      '@type': 'Person',
      name: 'Technical Product Manager',
      jobTitle: 'Senior Technical Product Manager',
      worksFor: {
        '@type': 'Organization',
        name: 'BMW Group',
      },
    },
    about: frontmatter.category,
    keywords: frontmatter.technologies,
    inLanguage: 'en-US',
    isPartOf: {
      '@type': 'WebSite',
      name: 'PM Portfolio',
      url: 'https://pm-portfolio.vercel.app',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <div className="mb-8">
            <Badge variant="outline" className="mb-4">
              {frontmatter.category}
            </Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {frontmatter.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {frontmatter.description}
            </p>
          </div>

          {frontmatter.metrics && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {frontmatter.metrics.map((metric, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-6 text-center"
                >
                  <div className="text-2xl font-bold text-blue-600 mb-2">
                    {metric.value}
                  </div>
                  <div className="font-semibold text-gray-900 mb-1">
                    {metric.label}
                  </div>
                  <div className="text-sm text-gray-600">
                    {metric.description}
                  </div>
                </div>
              ))}
            </div>
          )}

          <article className="prose prose-lg prose-gray max-w-none">
            {content}
          </article>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap gap-2 mb-4">
              {frontmatter.technologies?.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
            <div className="text-sm text-gray-600 space-y-1">
              <p>
                <strong>Timeline:</strong> {frontmatter.timeline}
              </p>
              <p>
                <strong>Team Size:</strong> {frontmatter.team_size}
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
