import { useSelector } from 'react-redux';
import { useZoom } from '../../hook/useZoom';
import ZoomControls from './ZoomControls';
import ImageCanvas from './ImageCanvas';
import {
  selectFields,
  selectHoveredId,
  selectSelectedIds,
} from '@/app/slice/reviewSlice';

const DocumentPreviewer = () => {
  const { zoom, zoomScale, setZoomLevel } = useZoom();
  const imageUrl = '/images/1.jpg';

  const fields = useSelector(selectFields);
  const selectedIds = useSelector(selectSelectedIds);
  const hoveredId = useSelector(selectHoveredId);

  return (
    <div className="w-full h-full relative border rounded overflow-hidden">
      <ZoomControls activeZoom={zoom} onChange={setZoomLevel} />
      <ImageCanvas
        imageUrl={imageUrl}
        zoom={zoom}
        zoomScale={zoomScale}
        fields={fields}
        selectedIds={selectedIds}
        hoveredId={hoveredId}
      />
    </div>
  );
};

export default DocumentPreviewer;
