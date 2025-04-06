import { FC } from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  type?: 'submit' | 'button';
  disabled?: boolean;
  className?: string;
  variant?: 'primary' | 'secondary';
}

const Button: FC<ButtonProps> = ({
  label,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  variant = 'primary',
}) => {
  const base =
    'px-4 py-2 rounded font-medium transition text-sm focus:outline-none disabled:cursor-not-allowed';
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-300',
    secondary:
      'bg-gray-200 text-gray-800 hover:bg-gray-300 disabled:bg-gray-100 disabled:text-gray-400',
  };
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
