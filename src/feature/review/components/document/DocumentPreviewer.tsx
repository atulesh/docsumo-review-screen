import { useSelector } from 'react-redux';
import { useZoom } from '../../hook/useZoom';
import ZoomControls from './ZoomControls';
import ImageCanvas from './ImageCanvas';
import {
  selectCurrentPage,
  selectHoveredId,
  selectPages,
  selectSelectedIds,
} from '@/app/slice/reviewSlice';
import DocumentNavigation from './DocumentNavigation';
import usePageFields from '../../hook/usePageFields';

const DocumentPreviewer = () => {
  const { zoom, zoomScale, setZoomLevel } = useZoom();
  const { filteredFields, imageUrl } = usePageFields();

  const selectedIds = useSelector(selectSelectedIds);
  const hoveredId = useSelector(selectHoveredId);
  const pages = useSelector(selectPages);
  const currentPage = useSelector(selectCurrentPage);

  const currentPageData = pages[currentPage] || null;

  return (
    <div className="w-full h-full relative border rounded overflow-hidden">
      <ZoomControls activeZoom={zoom} onChange={setZoomLevel} />
      {imageUrl && (
        <>
          {currentPageData && pages.length > 1 && <DocumentNavigation />}
          <ImageCanvas
            imageUrl={imageUrl}
            zoom={zoom}
            zoomScale={zoomScale}
            fields={filteredFields}
            selectedIds={selectedIds}
            hoveredId={hoveredId}
          />
        </>
      )}
    </div>
  );
};

export default DocumentPreviewer;
