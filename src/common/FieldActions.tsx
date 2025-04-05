import { useDispatch, useSelector } from 'react-redux';
import Button from './button/Button';
import {
  clearSelection,
  confirmSelection,
  selectFields,
  selectSelectedIds,
  setSelection,
} from '@/app/slice/reviewSlice';

const FieldActions = () => {
  const dispatch = useDispatch();
  const fields = useSelector(selectFields);
  const selectedIds = useSelector(selectSelectedIds);

  const allIds = fields.map((field) => field.id);
  const isAllSelected = selectedIds.length === fields.length;

  const handleSelectAll = () => {
    if (isAllSelected) {
      dispatch(clearSelection());
    } else {
      dispatch(setSelection(allIds));
    }
  };

  const handleConfirm = () => {
    console.log('Confirming from component:', selectedIds);
    dispatch(confirmSelection());
  };

  return (
    <div className="p-3 border-t border-gray-700 bg-white dark:bg-zinc-900 flex justify-between items-center">
      <Button onClick={handleSelectAll} variant="secondary">
        {isAllSelected ? 'Uncheck All' : 'Select All'}
      </Button>
      <Button onClick={handleConfirm} disabled={selectedIds.length === 0}>
        Confirm
      </Button>
    </div>
  );
};

export default FieldActions;
