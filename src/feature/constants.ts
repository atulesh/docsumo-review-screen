export const MARKED_AS_MISSING = 'Marked as missing';

export enum TabEnum {
  REGULAR_FIELDS = 'Regular fields',
  COLUMN_FIELDS = 'Column fields',
}

export enum ConfidenceColor {
  VERY_HIGH = 'bg-green-600',
  HIGH = 'bg-emerald-400',
  MEDIUM = 'bg-yellow-500',
  LOW = 'bg-orange-400',
  VERY_LOW = 'bg-red-500',
}

// INFO: used confidence range to get color for badge
export const getBadgeColor = (confidence: number): string => {
  if (confidence >= 0.95) return ConfidenceColor.VERY_HIGH;
  if (confidence >= 0.75) return ConfidenceColor.HIGH;
  if (confidence >= 0.65) return ConfidenceColor.MEDIUM;
  if (confidence >= 0.45) return ConfidenceColor.LOW;

  return ConfidenceColor.VERY_LOW;
};

// Zoom levels to use in image viewer
export enum ZoomLevel {
  SEVENTY_FIVE = '75%',
  FIT = 'fit',
  HUNDRED = '100%',
  ONE_TWENTY_FIVE = '125%',
}

export const zoomScaleMapping: Record<ZoomLevel, number> = {
  [ZoomLevel.SEVENTY_FIVE]: 0.75,
  [ZoomLevel.FIT]: -1,
  [ZoomLevel.HUNDRED]: 1,
  [ZoomLevel.ONE_TWENTY_FIVE]: 1.25,
};
