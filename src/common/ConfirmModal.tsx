import { FC } from 'react';
import Button from './button/Button';

interface ConfirmModalProps {
  onConfirm: () => void;
  onCancel: () => void;
}
const ConfirmModal: FC<ConfirmModalProps> = ({ onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-md w-[90%] max-w-md z-50">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          Confirm Selection
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
          Are you sure you want to confirm the selected fields?
        </p>

        <div className="mt-6 flex justify-end gap-3">
          <Button onClick={onCancel} variant="danger" label="Cancel" />
          <Button onClick={onConfirm} variant="success" label="Confirm" />
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
