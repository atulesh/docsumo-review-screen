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

  const [showModal, setShowModal] = useState(false);

  const allIds = fields.map((field) => field.id);
  const isAllSelected = selectedIds.length === fields.length;

  const handleSelectAll = () => {
    dispatch(isAllSelected ? clearSelection() : setSelection(allIds));
  };

  const handleConfirm = () => {
    setShowModal(true);
  };

  const confirmAndNotify = () => {
    dispatch(confirmSelection());
    toast.success('Fields confirmed and processed successfully!');
    setShowModal(false);
  };

  return (
    <div className="p-3 border-t border-gray-700 bg-white dark:bg-zinc-900 flex justify-between items-center">
      <Button
        onClick={handleSelectAll}
        variant="secondary"
        label={isAllSelected ? 'Uncheck All' : 'Select All'}
      />
      <Button
        onClick={handleConfirm}
        disabled={selectedIds.length === 0}
        label="Confirm"
      />

      {showModal && (
        <ConfirmModal
          onConfirm={confirmAndNotify}
          onCancel={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default FieldActions;
