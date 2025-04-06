import { selectCurrentPage, selectPages } from '@/app/slice/reviewSlice';
import { RootState } from '@/app/store';
import { filterFieldsByPage } from '@/utils/filterFieldsByPage';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';

// return fields and image based on current page
const usePageFields = () => {
  const pages = useSelector(selectPages);
  const { fields, loading } = useSelector((state: RootState) => state.review);

  const currentPage = useSelector(selectCurrentPage);

  const currentPageData = pages[currentPage] || null;

  const filteredFields = useMemo(
    () => filterFieldsByPage(fields, currentPageData?.id),
    [fields, currentPageData],
  );

  const imageUrl = currentPageData
    ? `/images/${currentPageData.image.url}`
    : '';

  return { filteredFields, imageUrl, loading };
};

export default usePageFields;
