import { cn } from '@/lib/utils';

interface MetricProps {
  label: string;
  value: string;
  description?: string;
  className?: string;
}

interface MetricGridProps {
  children?: React.ReactNode;
  className?: string;
  columns?: 2 | 3 | 4;
}

export function MetricGrid({
  children,
  className,
  columns = 4,
}: MetricGridProps) {
  const gridCols = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div
      className={cn('grid gap-6 my-8 not-prose', gridCols[columns], className)}
    >
      {children}
    </div>
  );
}

export function Metric({ label, value, description, className }: MetricProps) {
  return (
    <div className={cn('bg-gray-50 rounded-lg p-6 text-center', className)}>
      <div className="text-2xl font-bold text-blue-600 mb-2">{value}</div>
      <div className="font-semibold text-gray-900 mb-1">{label}</div>
      {description && (
        <div className="text-sm text-gray-600">{description}</div>
      )}
    </div>
  );
}
