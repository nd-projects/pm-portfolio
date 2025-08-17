'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const caseStudies = [
  {
    slug: 'adas-simulator',
    title: 'ADAS Test Simulator',
    description:
      'From BMW tool to Ansys acquisition - simulation platform that achieved 85% safety coverage and processed 240M virtual kilometers.',
    status: 'live' as const,
    technologies: ['Python', 'C++', 'Unity', 'CI/CD'],
    category: 'Flagship Product',
  },
  {
    slug: 'android-studio-plugin',
    title: 'Android Studio Plugin',
    description:
      'User research with 50+ developers led to a plugin that gained 212 active users and 25% adoption in 6 weeks.',
    status: 'live' as const,
    technologies: ['Kotlin', 'IntelliJ Platform', 'Analytics', 'A/B Testing'],
    category: 'Growth Story',
  },
  {
    slug: 'documentation-ai-assistant',
    title: 'Documentation AI Assistant',
    description:
      'Strategic pivot from AI search to intelligent expert routing that reduced support tickets by 30% and transformed knowledge sharing.',
    status: 'live' as const,
    technologies: ['LLM', 'Python', 'MS Teams', 'Natural Language Processing'],
    category: 'Strategic Pivot',
  },
];

const statusConfig = {
  'coming-soon': {
    label: 'Coming Soon',
    variant: 'secondary' as const,
    description: 'Detailed case study in development',
  },
  'in-progress': {
    label: 'In Progress',
    variant: 'outline' as const,
    description: 'Case study being written',
  },
  live: {
    label: 'Live',
    variant: 'default' as const,
    description: 'Full case study available',
  },
  published: {
    label: 'Published',
    variant: 'default' as const,
    description: 'Full case study available',
  },
};

export default function CaseStudiesClient() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Case Studies
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl">
            Deep dives into the developer tools and platforms that transformed
            how BMW engineers build safer automotive software.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:gap-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge variant="outline" className="text-xs">
                        {study.category}
                      </Badge>
                      <Badge variant={statusConfig[study.status].variant}>
                        {statusConfig[study.status].label}
                      </Badge>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900 mb-3">
                      {study.title}
                    </h2>
                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                      {study.description}
                    </p>

                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-gray-900 mb-3">
                        Key Technologies
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Link href={`/case-studies/${study.slug}`}>
                      <Button>Read Full Case Study</Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16 p-8 bg-gray-50 rounded-lg"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            More Case Studies Coming Soon
          </h3>
          <p className="text-gray-600 mb-4">
            I&apos;m actively developing detailed case studies for each project.
            Check back soon for in-depth analysis and lessons learned.
          </p>
          <Badge variant="secondary">Expected: End of Week 2</Badge>
        </motion.div>
      </div>
    </main>
  );
}
