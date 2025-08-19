import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

interface TechStackProps {
  children?: React.ReactNode;
  technologies?: string[];
  title?: string;
  className?: string;
  variant?: 'badges' | 'tiles';
}

export function TechStack({
  children,
  technologies,
  title = 'Technologies Used',
  className,
  variant = 'badges',
}: TechStackProps) {
  // If technologies array is provided, use it; otherwise extract from children
  const techList = technologies || [];

  if (variant === 'tiles') {
    return (
      <div className={cn('my-6 not-prose', className)}>
        {title && (
          <h4 className="text-lg font-semibold text-gray-900 mb-4">{title}</h4>
        )}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {techList.map((tech) => (
            <div
              key={tech}
              className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 transition-colors"
            >
              {tech}
            </div>
          ))}
        </div>
        {children && (
          <div className="mt-4 text-sm text-gray-600">{children}</div>
        )}
      </div>
    );
  }

  return (
    <div className={cn('my-6 not-prose', className)}>
      {title && (
        <h4 className="text-lg font-semibold text-gray-900 mb-3">{title}</h4>
      )}
      <div className="flex flex-wrap gap-2">
        {techList.map((tech) => (
          <Badge key={tech} variant="secondary">
            {tech}
          </Badge>
        ))}
      </div>
      {children && <div className="mt-3 text-sm text-gray-600">{children}</div>}
    </div>
  );
}
