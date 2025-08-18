import { Metadata } from 'next';
import BlogClient from './blog-client';
import { getAllBlogPosts } from '@/lib/mdx';

export const metadata: Metadata = {
  title: 'Blog | PM Portfolio - Product Strategy & Leadership Insights',
  description:
    'Insights on product strategy, team leadership, and building developer tools that transform engineering workflows at scale.',
  keywords: [
    'product management blog',
    'technical leadership insights',
    'developer tools strategy',
    'engineering culture transformation',
    'automotive software development',
    'platform product strategy',
    'BMW software engineering',
  ],
  alternates: {
    canonical: 'https://pm-portfolio.vercel.app/blog',
  },
  openGraph: {
    title: 'Blog | Product Strategy & Leadership Insights',
    description:
      'Insights on product strategy, team leadership, and building developer tools that transform engineering workflows at scale.',
    type: 'website',
    url: 'https://pm-portfolio.vercel.app/blog',
    siteName: 'PM Portfolio',
    images: [
      {
        url: '/assets/blog-og.png',
        width: 1200,
        height: 630,
        alt: 'Blog - Product Strategy & Leadership Insights',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Product Strategy & Leadership Insights',
    description:
      'Insights on product strategy, team leadership, and building developer tools that transform engineering workflows.',
    images: ['/assets/blog-og.png'],
  },
  robots: 'index, follow',
};

export default function BlogPage() {
  const blogPosts = getAllBlogPosts();
  return <BlogClient blogPosts={blogPosts} />;
}
