'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getAllCaseStudies } from '@/lib/mdx';

interface CaseStudiesClientProps {
  caseStudies: ReturnType<typeof getAllCaseStudies>;
}

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
  draft: {
    label: 'Draft',
    variant: 'outline' as const,
    description: 'Case study in development',
  },
};

export default function CaseStudiesClient({
  caseStudies,
}: CaseStudiesClientProps) {
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

        {caseStudies.length > 0 ? (
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
                          {study.frontmatter.category}
                        </Badge>
                        <Badge
                          variant={
                            statusConfig[
                              study.frontmatter
                                .status as keyof typeof statusConfig
                            ].variant
                          }
                        >
                          {
                            statusConfig[
                              study.frontmatter
                                .status as keyof typeof statusConfig
                            ].label
                          }
                        </Badge>
                      </div>

                      <h2 className="text-2xl font-bold text-gray-900 mb-3">
                        {study.frontmatter.title}
                      </h2>
                      <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                        {study.frontmatter.description}
                      </p>

                      <div className="mb-6">
                        <h3 className="text-sm font-semibold text-gray-900 mb-3">
                          Key Technologies
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {study.frontmatter.technologies.map((tech) => (
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
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center py-16"
          >
            <div className="bg-gray-50 rounded-lg p-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Case Studies Coming Soon
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                I&apos;m currently developing detailed case studies showcasing
                the developer tools and platforms that transformed BMW&apos;s
                engineering workflows. Each case study will include technical
                deep-dives, metrics, and lessons learned.
              </p>
              <Badge variant="secondary" className="text-sm">
                Expected: Q3 2025
              </Badge>
            </div>
          </motion.div>
        )}

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
