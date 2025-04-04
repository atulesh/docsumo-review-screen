import { getBadgeColor } from '@/feature/constants';
import { FC } from 'react';

interface BadgeProps {
  label: string;
  confidence: number;
}

const Badge: FC<BadgeProps> = ({ label, confidence = 0 }) => {
  const badgeColor = getBadgeColor(confidence);

  return (
    <>
      <div
        className={`flex items-center justify-center rounded-md text-xs font-semibold text-gray-800 dark:text-gray-100 h-8 w-10 border-l-4 ${badgeColor}`}
      >
        {label}
      </div>
    </>
  );
};

export default Badge;
