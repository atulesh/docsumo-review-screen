import { useCallback, useState } from 'react';
import { ZoomLevel, zoomScaleMapping } from '@/feature/constants';

export const useZoom = () => {
  const [zoom, setZoom] = useState<ZoomLevel>(ZoomLevel.FIT);
  const zoomScale = zoomScaleMapping[zoom];

  const setZoomLevel = useCallback((level: ZoomLevel) => setZoom(level), []);

  return { zoom, zoomScale, setZoomLevel };
};
