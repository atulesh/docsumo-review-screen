import { FC } from 'react';

interface CheckboxProps {
  id: number;
  label?: string;
  checked: boolean;
  disabled?: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
}
const Checkbox: FC<CheckboxProps> = ({
  id,
  label = '',
  checked,
  onChange,
  disabled = false,
  className = '',
}) => {
  return (
    <label className="inline-flex items-center gap-2 cursor-pointer">
      <input
        type="checkbox"
        id={String(id)}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className={`w-4 h-4 accent-blue-600 cursor-pointer ${className}`}
        disabled={disabled}
        aria-label={label}
        aria-checked={checked}
      />
      {label && <span className="text-sm">{label}</span>}
    </label>
  );
};

export default Checkbox;
