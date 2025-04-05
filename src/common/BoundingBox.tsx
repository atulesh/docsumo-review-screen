import { FC } from 'react';
import { getBadgeColor } from '@/feature/constants';

interface BoxProps {
  x: number;
  y: number;
  width: number;
  height: number;
  highlighted?: boolean;
  selected?: boolean;
  confidence: number;
}

const BoundingBox: FC<BoxProps> = ({
  x,
  y,
  width,
  height,
  highlighted = false,
  selected = false,
  confidence,
}) => {
  const badgeColor = getBadgeColor(confidence);

  // Shared style for hover or selection
  const isActive = selected || highlighted;
  const boxStyle = isActive
    ? `bg-opacity-60 ${badgeColor.replace('bg-', 'bg-')}`
    : '';

  return (
    <div
      className={`absolute rounded-sm pointer-events-none transition-all duration-200 ${boxStyle}`}
      style={{ left: x, top: y, width, height }}
    />
  );
};

export default BoundingBox;
