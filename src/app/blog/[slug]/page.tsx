import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Badge } from '@/components/ui/badge';
import { getBlogPostBySlug, getAllBlogPosts } from '@/lib/mdx';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const blogPost = getBlogPostBySlug(slug);

  if (!blogPost) {
    return {};
  }

  const title = `${blogPost.frontmatter.title} | Blog - Technical PM Portfolio`;
  const description = blogPost.frontmatter.description;

  return {
    title,
    description,
    keywords: [
      blogPost.frontmatter.category,
      'technical product management',
      'automotive software development',
      'developer tools strategy',
      'BMW software engineering',
      ...blogPost.frontmatter.tags,
    ],
    alternates: {
      canonical: `https://pm-portfolio.vercel.app/blog/${slug}`,
    },
    openGraph: {
      title,
      description,
      type: 'article',
      url: `https://pm-portfolio.vercel.app/blog/${slug}`,
      siteName: 'PM Portfolio',
      publishedTime: blogPost.frontmatter.publishedAt,
      authors: ['Technical Product Manager'],
      images: [
        {
          url: `/assets/blog/${slug}-og.png`,
          width: 1200,
          height: 630,
          alt: blogPost.frontmatter.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`/assets/blog/${slug}-og.png`],
    },
    robots: 'index, follow',
  };
}

export async function generateStaticParams() {
  const blogPosts = getAllBlogPosts();
  return blogPosts.map((blogPost) => ({
    slug: blogPost.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const blogPost = getBlogPostBySlug(slug);

  if (!blogPost) {
    notFound();
  }

  const { frontmatter, content } = blogPost;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: frontmatter.title,
    description: frontmatter.description,
    url: `https://pm-portfolio.vercel.app/blog/${slug}`,
    datePublished: frontmatter.publishedAt,
    author: {
      '@type': 'Person',
      name: 'Technical Product Manager',
      jobTitle: 'Senior Technical Product Manager',
      worksFor: {
        '@type': 'Organization',
        name: 'BMW Group',
      },
    },
    publisher: {
      '@type': 'Person',
      name: 'Technical Product Manager',
    },
    articleSection: frontmatter.category,
    keywords: frontmatter.tags,
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
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="outline">{frontmatter.category}</Badge>
              <span className="text-sm text-gray-500">
                {frontmatter.publishedAt}
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {frontmatter.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {frontmatter.description}
            </p>
          </div>

          <article className="prose prose-lg prose-gray max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-strong:text-gray-900 prose-code:text-gray-900 prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-blockquote:border-blue-200 prose-blockquote:bg-blue-50 prose-blockquote:text-blue-900">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                code({ className, children, ...props }) {
                  const isInline =
                    !className || !className.startsWith('language-');
                  return !isInline ? (
                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                      <code className={className} {...props}>
                        {children}
                      </code>
                    </pre>
                  ) : (
                    <code
                      className="bg-gray-100 text-gray-900 px-1 py-0.5 rounded text-sm"
                      {...props}
                    >
                      {children}
                    </code>
                  );
                },
                h1({ children }) {
                  return (
                    <h1 className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                      {children}
                    </h1>
                  );
                },
                h2({ children }) {
                  return (
                    <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">
                      {children}
                    </h2>
                  );
                },
                h3({ children }) {
                  return (
                    <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
                      {children}
                    </h3>
                  );
                },
                h4({ children }) {
                  return (
                    <h4 className="text-lg font-semibold text-gray-900 mt-3 mb-2">
                      {children}
                    </h4>
                  );
                },
                p({ children }) {
                  return (
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {children}
                    </p>
                  );
                },
                ul({ children }) {
                  return (
                    <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">
                      {children}
                    </ul>
                  );
                },
                ol({ children }) {
                  return (
                    <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-700">
                      {children}
                    </ol>
                  );
                },
                li({ children }) {
                  return <li className="text-gray-700">{children}</li>;
                },
                strong({ children }) {
                  return (
                    <strong className="font-semibold text-gray-900">
                      {children}
                    </strong>
                  );
                },
                em({ children }) {
                  return <em className="italic text-gray-700">{children}</em>;
                },
                blockquote({ children }) {
                  return (
                    <blockquote className="border-l-4 border-blue-200 bg-blue-50 pl-4 py-2 my-4 italic text-blue-900">
                      {children}
                    </blockquote>
                  );
                },
                hr() {
                  return <hr className="border-gray-200 my-8" />;
                },
              }}
            >
              {content}
            </ReactMarkdown>
          </article>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap gap-2 mb-4">
              {frontmatter.tags?.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="text-sm text-gray-600">
              <p>
                <strong>Published:</strong> {frontmatter.publishedAt}
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
