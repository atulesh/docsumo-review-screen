import { fetchFields, fetchPages } from '@/app/slice/reviewSlice';
import { AppDispatch } from '@/app/store';
import FieldActions from '@/common/FieldActions';
import FieldCard from '@/common/FieldCard';
import Tab from '@/common/Tab';
import { TabEnum } from '@/feature/constants';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import usePageFields from '../hook/usePageFields';

const RightSidebar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { filteredFields, loading } = usePageFields();

  const [tab, setTab] = useState<TabEnum>(TabEnum.REGULAR_FIELDS);

  useEffect(() => {
    dispatch(fetchFields());
    dispatch(fetchPages());
  }, [dispatch]);

  const renderFields = () => {
    if (loading) {
      return <p className="text-sm text-gray-400">Loading fields...</p>;
    }
    if (tab === TabEnum.REGULAR_FIELDS) {
      return filteredFields.map((field) => (
        <FieldCard key={field.id} field={field} />
      ));
    }
    return (
      <p className="text-sm text-gray-400 italic text-center">
        No column fields available
      </p>
    );
  };

  const renderSidebarContent = () => {
    return (
      <>
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-5">
            Fields
          </h2>
          <Tab activeTab={tab} onChange={setTab} />
        </div>
        <div className="flex-1 overflow-y-auto p-3 space-y-3">
          {renderFields()}
        </div>
        <FieldActions />
      </>
    );
  };
  return renderSidebarContent();
};

export default RightSidebar;
