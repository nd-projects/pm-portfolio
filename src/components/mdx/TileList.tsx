import { cn } from '@/lib/utils';

interface TileListProps {
  children: React.ReactNode;
  className?: string;
  columns?: 1 | 2 | 3 | 4 | 5;
}

export function TileList({ children, className, columns = 3 }: TileListProps) {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    5: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-5',
  };

  return (
    <div
      className={cn('grid gap-4 my-6 not-prose', gridCols[columns], className)}
    >
      {children}
    </div>
  );
}

export function Tile({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow">
      <div className="text-sm font-normal text-gray-900">{children}</div>
    </div>
  );
}
