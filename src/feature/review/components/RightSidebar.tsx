import { fetchFields } from '@/app/slice/reviewSlice';
import { AppDispatch, RootState } from '@/app/store';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const RightSidebar = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchFields());
  }, [dispatch]);

  const fields = useSelector((state: RootState) => state.review.fields);

  useEffect(() => {
    console.log('Fields in Component:', fields); // ✅ Check if it logs here
  }, [fields]);
  return <div>RightSidebar</div>;
};

export default RightSidebar;
