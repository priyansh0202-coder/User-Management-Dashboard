import { cn } from '@/lib/utils';

interface StatusBadgeProps {
  status: 'Active' | 'Inactive' | 'Pending';
}

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
        {
          'bg-green-100 text-green-800': status === 'Active',
          'bg-red-100 text-red-800': status === 'Inactive',
          'bg-yellow-100 text-yellow-800': status === 'Pending',
        }
      )}
    >
      {status}
    </span>
  );
}