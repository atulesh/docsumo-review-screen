import { FC } from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  type?: 'submit' | 'button';
  disabled?: boolean;
  className?: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'success';
}

const Button: FC<ButtonProps> = ({
  label,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  variant = 'primary',
}) => {
  const base = 'px-4 py-2 rounded font-medium transition text-sm';
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 dark:text-gray-300',
    danger: 'bg-red-600 text-white hover:bg-red-700',
    success: 'bg-green-600 text-white hover:bg-green-700',
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
