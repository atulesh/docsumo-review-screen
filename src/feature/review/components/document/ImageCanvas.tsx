import { FC, useRef, useState } from 'react';
import { ReviewField } from '@/feature/review/types';
import { ZoomLevel } from '@/feature/constants';
import BoundingBox from '@/common/BoundingBox';

interface ImageCanvasProps {
  imageUrl: string;
  zoom: ZoomLevel;
  zoomScale: number;
  fields: ReviewField[];
  selectedIds: number[];
  hoveredId: number | null;
}

const ImageCanvas: FC<ImageCanvasProps> = ({
  imageUrl,
  zoom,
  zoomScale,
  fields,
  selectedIds,
  hoveredId,
}) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [fitScale, setFitScale] = useState(1);
  const [contentSize, setContentSize] = useState({ width: 0, height: 0 });

  const handleLoad = () => {
    const img = imageRef.current;
    if (img) {
      const containerHeight = containerRef.current?.clientHeight || 1;

      setContentSize({
        width: img.naturalWidth,
        height: img.naturalHeight,
      });

      // Fit scale based on image height relative to container height
      setFitScale(containerHeight / img.naturalHeight);
    }
  };

  const scale = zoom === ZoomLevel.FIT ? fitScale : zoomScale;

  const wrapperStyle =
    zoom === ZoomLevel.FIT
      ? 'flex items-center justify-center overflow-auto'
      : 'overflow-auto';

  return (
    <div
      ref={containerRef}
      className={`w-full h-full bg-gray-100 dark:bg-zinc-900 ${wrapperStyle}`}
    >
      <div
        className="relative"
        style={{
          width: contentSize.width * scale,
          height: contentSize.height * scale,
        }}
      >
        <img
          ref={imageRef}
          src={imageUrl}
          onLoad={handleLoad}
          alt="Document"
          className="w-full h-full object-contain"
        />

        {fields.map((field) => {
          const pos = field.content?.position;
          if (!pos || pos.length !== 4) return null;

          const [x1, y1, x2, y2] = pos;
          const isSelected = selectedIds.includes(field.id);
          const isHovered = hoveredId === field.id;

          return (
            <BoundingBox
              key={field.id}
              x={x1 * scale}
              y={y1 * scale}
              width={(x2 - x1) * scale}
              height={(y2 - y1) * scale}
              selected={isSelected}
              highlighted={isHovered}
              confidence={field.content.confidence}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ImageCanvas;
