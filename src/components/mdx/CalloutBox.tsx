import { cn } from '@/lib/utils';
import {
  AlertTriangle,
  Info,
  CheckCircle,
  XCircle,
  Lightbulb,
} from 'lucide-react';

interface CalloutBoxProps {
  children: React.ReactNode;
  type?: 'info' | 'warning' | 'success' | 'error' | 'tip';
  title?: string;
  className?: string;
}

const calloutStyles = {
  info: {
    container: 'bg-blue-50 border-blue-200 text-blue-900',
    icon: Info,
    iconColor: 'text-blue-600',
  },
  warning: {
    container: 'bg-amber-50 border-amber-200 text-amber-900',
    icon: AlertTriangle,
    iconColor: 'text-amber-600',
  },
  success: {
    container: 'bg-green-50 border-green-200 text-green-900',
    icon: CheckCircle,
    iconColor: 'text-green-600',
  },
  error: {
    container: 'bg-red-50 border-red-200 text-red-900',
    icon: XCircle,
    iconColor: 'text-red-600',
  },
  tip: {
    container: 'bg-purple-50 border-purple-200 text-purple-900',
    icon: Lightbulb,
    iconColor: 'text-purple-600',
  },
};

export function CalloutBox({
  children,
  type = 'info',
  title,
  className,
}: CalloutBoxProps) {
  const style = calloutStyles[type];
  const Icon = style.icon;

  return (
    <div
      className={cn(
        'border rounded-lg p-4 my-6 not-prose',
        style.container,
        className
      )}
    >
      <div className="flex items-start gap-3">
        <Icon className={cn('w-5 h-5 mt-0.5 flex-shrink-0', style.iconColor)} />
        <div className="flex-1">
          {title && <div className="font-semibold mb-2">{title}</div>}
          <div className="text-sm leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
}
