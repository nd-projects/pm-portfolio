import { Metadata } from 'next';
import BlogClient from './blog-client';
import { getAllBlogPosts } from '@/lib/mdx';

export const metadata: Metadata = {
  title: 'Blog | PM Portfolio - Product Strategy & Leadership Insights',
  description:
    'Insights on product strategy, team leadership, and building developer tools that transform engineering workflows at scale.',
  keywords:
    'Product Management, Leadership, Developer Tools, Strategy, Engineering Culture, BMW',
  openGraph: {
    title: 'Blog | Product Strategy & Leadership Insights',
    description:
      'Insights on product strategy, team leadership, and building developer tools that transform engineering workflows at scale.',
    type: 'website',
  },
  robots: 'index, follow',
};

export default function BlogPage() {
  const blogPosts = getAllBlogPosts();
  return <BlogClient blogPosts={blogPosts} />;
}
