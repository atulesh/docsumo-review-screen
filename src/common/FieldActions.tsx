import { useDispatch, useSelector } from 'react-redux';
import Button from './button/Button';
import {
  clearSelection,
  confirmSelection,
  selectFields,
  selectSelectedIds,
  setSelection,
} from '@/app/slice/reviewSlice';
import { useState } from 'react';
import { toast } from 'react-toastify';
import ConfirmModal from './ConfirmModal';

const FieldActions = () => {
  const dispatch = useDispatch();

  const fields = useSelector(selectFields);
  const selectedIds = useSelector(selectSelectedIds);

  const [isOpen, setIsOpen] = useState(false);

  const allIds = fields.map((field) => field.id);
  const isAllSelected = selectedIds.length === fields.length;

  const handleSelectAll = () => {
    dispatch(isAllSelected ? clearSelection() : setSelection(allIds));
  };

  const handleConfirm = () => {
    dispatch(confirmSelection());
    toast.success('Fields confirmed and processed successfully!');
    setIsOpen(false);
  };

  return (
    <div className="p-3 border-t border-gray-700 bg-white dark:bg-zinc-900 flex justify-between items-center">
      <Button
        onClick={handleSelectAll}
        variant="secondary"
        label={isAllSelected ? 'Uncheck All' : 'Select All'}
      />
      <Button
        onClick={() => setIsOpen(true)}
        disabled={selectedIds.length < 1}
        label="Confirm"
      />
      <ConfirmModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onConfirm={handleConfirm}
        title="Confirm Field Selection"
        desc="Are you sure you want to confirm the selected fields?"
      />
    </div>
  );
};

export default FieldActions;
