import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Badge } from '@/components/ui/badge';

const caseStudies = {
  'adas-simulator': {
    title: 'ADAS Test Simulator: From BMW Tool to Ansys Acquisition',
    description:
      'How I led the development of a simulation platform that achieved 85% safety coverage, processed 240M virtual kilometers, and became the foundation for Eclipse OpenPASS.',
    status: 'live',
    category: 'Flagship Product',
  },
  'android-studio-plugin': {
    title: 'Android Studio Plugin: From 2 Hours to 2 Minutes',
    description:
      'How user research with 50+ developers led to a plugin that gained 212 active users and 25% adoption in 6 weeks, with analytics foundation for predictive bug detection.',
    status: 'live',
    category: 'Growth Story',
  },
  'documentation-ai-assistant': {
    title:
      'Documentation AI Assistant: Strategic Pivot That Reduced Support by 30%',
    description:
      'How discovering the real problem behind poor documentation led to an intelligent routing system that transformed support workflows at BMW.',
    status: 'live',
    category: 'Strategic Pivot',
  },
};

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = caseStudies[slug as keyof typeof caseStudies];

  if (!caseStudy) {
    return {};
  }

  return {
    title: `${caseStudy.title} | Case Study`,
    description: caseStudy.description,
    openGraph: {
      title: caseStudy.title,
      description: caseStudy.description,
      type: 'article',
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({
    slug,
  }));
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const caseStudy = caseStudies[slug as keyof typeof caseStudies];

  if (!caseStudy) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="mb-8">
          <Badge variant="outline" className="mb-4">
            {caseStudy.category}
          </Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {caseStudy.title}
          </h1>
          <p className="text-xl text-gray-600 mb-8">{caseStudy.description}</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">
              Case Study In Development
            </h2>
            <p className="text-blue-700 mb-4">
              This detailed case study is currently being written. Check back
              soon for the complete story including:
            </p>
            <ul className="text-blue-700 mb-6 space-y-2 text-center list-none">
              <li>• Technical architecture and implementation details</li>
              <li>• Team dynamics and stakeholder management</li>
              <li>• Detailed metrics and impact analysis</li>
              <li>• Lessons learned and key takeaways</li>
              <li>• What I would do differently</li>
            </ul>
            <Badge variant="secondary">
              Expected completion: End of Week 2
            </Badge>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-2">
              Want to discuss this project in detail?
            </p>
            <a
              href="mailto:contact@example.com"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Reach out for a conversation
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
