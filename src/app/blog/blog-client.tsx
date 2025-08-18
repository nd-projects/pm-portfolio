'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getAllBlogPosts } from '@/lib/mdx';

interface BlogClientProps {
  blogPosts: ReturnType<typeof getAllBlogPosts>;
}

const statusConfig = {
  'coming-soon': {
    label: 'Coming Soon',
    variant: 'secondary' as const,
    description: 'Blog post in development',
  },
  'in-progress': {
    label: 'In Progress',
    variant: 'outline' as const,
    description: 'Blog post being written',
  },
  live: {
    label: 'Live',
    variant: 'default' as const,
    description: 'Published blog post',
  },
  published: {
    label: 'Published',
    variant: 'default' as const,
    description: 'Published blog post',
  },
  draft: {
    label: 'Draft',
    variant: 'outline' as const,
    description: 'Blog post in development',
  },
};

export default function BlogClient({ blogPosts }: BlogClientProps) {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Blog
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-3xl">
            Insights on product strategy, team leadership, and building
            developer tools that transform engineering workflows at scale.
          </p>
        </motion.div>

        {blogPosts.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-1 lg:gap-12">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 md:p-8 hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6 md:gap-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <Badge variant="outline" className="text-xs">
                          {post.frontmatter.category}
                        </Badge>
                        <Badge
                          variant={
                            statusConfig[
                              post.frontmatter
                                .status as keyof typeof statusConfig
                            ].variant
                          }
                        >
                          {
                            statusConfig[
                              post.frontmatter
                                .status as keyof typeof statusConfig
                            ].label
                          }
                        </Badge>
                        <span className="text-sm text-gray-500">
                          {post.frontmatter.publishedAt}
                        </span>
                      </div>

                      <h2 className="text-2xl font-bold text-gray-900 mb-3">
                        {post.frontmatter.title}
                      </h2>
                      <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                        {post.frontmatter.description}
                      </p>

                      <div className="mb-6">
                        <h3 className="text-sm font-semibold text-gray-900 mb-3">
                          Tags
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {post.frontmatter.tags.map((tag) => (
                            <Badge
                              key={tag}
                              variant="secondary"
                              className="text-xs"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <Link href={`/blog/${post.slug}`}>
                        <Button>Read Full Post</Button>
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
                Blog Posts Coming Soon
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                I&apos;m currently developing insightful posts about product
                strategy, team leadership, and building developer tools that
                scale. Each post will share lessons learned from transforming
                engineering workflows at BMW and beyond.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <Badge variant="secondary" className="text-sm">
                  Product Strategy
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  Engineering Leadership
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  Developer Experience
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  Team Culture
                </Badge>
              </div>
              <Badge variant="outline" className="text-sm">
                Expected: Q3 2025
              </Badge>
            </div>
          </motion.div>
        )}
      </div>
    </main>
  );
}
