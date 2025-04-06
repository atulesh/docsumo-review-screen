import { FC } from 'react';
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import Button from './button/Button';

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  desc: string;
}

const ConfirmModal: FC<ConfirmModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  desc,
}) => {
  return (
    <Dialog open={isOpen} as="div" className="relative z-50" onClose={onClose}>
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="w-full max-w-md rounded-lg bg-white dark:bg-zinc-800 p-6 shadow-xl transition-all">
          <DialogTitle className="text-lg font-semibold text-gray-800 dark:text-white mb-8">
            {title}
          </DialogTitle>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 mb-5">
            {desc}
          </p>
          <div className="mt-4 flex justify-end gap-3">
            <Button onClick={onClose} variant="secondary" label="Cancel" />
            <Button onClick={onConfirm} label="Confirm" />
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default ConfirmModal;
