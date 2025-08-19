import type { MDXComponents } from 'mdx/types';
import { TileList, Tile } from '@/components/mdx/TileList';
import { MetricGrid, Metric } from '@/components/mdx/MetricGrid';
import { CalloutBox } from '@/components/mdx/CalloutBox';
import { TechStack } from '@/components/mdx/TechStack';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Custom components for enhanced formatting
    TileList,
    Tile,
    MetricGrid,
    Metric,
    CalloutBox,
    TechStack,

    // Standard HTML elements with custom styling
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold text-gray-900 mt-8 mb-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold text-gray-900 mt-6 mb-3">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-semibold text-gray-900 mt-3 mb-2">
        {children}
      </h4>
    ),
    p: ({ children }) => (
      <p className="text-gray-700 mb-4 leading-relaxed">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-700">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="text-gray-700">{children}</li>,
    strong: ({ children }) => (
      <strong className="font-semibold text-gray-900">{children}</strong>
    ),
    em: ({ children }) => <em className="italic text-gray-700">{children}</em>,
    code: ({ children, className }) => {
      const isInline = !className || !className.startsWith('language-');
      return isInline ? (
        <code className="bg-gray-100 text-gray-900 px-1 py-0.5 rounded text-sm">
          {children}
        </code>
      ) : (
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-4">
          <code className={className}>{children}</code>
        </pre>
      );
    },
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-blue-200 bg-blue-50 pl-4 py-2 my-4 italic text-blue-900">
        {children}
      </blockquote>
    ),
    hr: () => <hr className="border-gray-200 my-8" />,

    // Override any existing components passed in
    ...components,
  };
}
