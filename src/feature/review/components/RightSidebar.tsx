import { fetchFields } from '@/app/slice/reviewSlice';
import { AppDispatch, RootState } from '@/app/store';
import FieldActions from '@/common/FieldActions';
import FieldCard from '@/common/FieldCard';
import Tab from '@/common/Tab';
import { TabEnum } from '@/feature/constants';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const RightSidebar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { fields, loading } = useSelector((state: RootState) => state.review);
  const [tab, setTab] = useState<TabEnum>(TabEnum.REGULAR_FIELDS);

  useEffect(() => {
    dispatch(fetchFields());
  }, [dispatch]);

  const renderSidebarContent = () => {
    return (
      <>
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
            Fields
          </h2>
          <Tab activeTab={tab} onChange={setTab} />
        </div>
        <div className="flex-1 overflow-y-auto p-3 space-y-3">
          {loading ? (
            <p className="text-sm text-gray-400">Loading fields...</p>
          ) : tab === TabEnum.REGULAR_FIELDS ? (
            fields.map((field) => <FieldCard key={field.id} field={field} />)
          ) : (
            <p className="text-sm text-gray-400 italic">
              No column fields available
            </p>
          )}
        </div>
        <FieldActions />
      </>
    );
  };
  return renderSidebarContent();
};

export default RightSidebar;
