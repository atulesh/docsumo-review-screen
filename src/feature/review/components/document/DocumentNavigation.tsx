import { setCurrentPage } from '@/app/slice/reviewSlice';
import { RootState } from '@/app/store';
import IconButton from '@/common/button/IconButton';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';

const DocumentNavigation = () => {
  const dispatch = useDispatch();

  const { pages, currentPage } = useSelector(
    (state: RootState) => state.review,
  );
  const totalPage = pages.length;

  const handlePrev = () => {
    if (currentPage > 0) {
      dispatch(setCurrentPage(currentPage - 1));
    }
  };

  const handleNext = () => {
    if (currentPage < totalPage - 1) {
      dispatch(setCurrentPage(currentPage + 1));
    }
  };

  return (
    <>
      <IconButton
        icon={<MdNavigateBefore />}
        onClick={handlePrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white dark:bg-zinc-800 rounded-full shadow-md z-50"
      />
      <IconButton
        icon={<MdNavigateNext />}
        onClick={handleNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white dark:bg-zinc-800 rounded-full shadow-md z-50"
      />
    </>
  );
};

export default DocumentNavigation;
