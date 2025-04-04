import React, { FC } from 'react'

interface ButtonProps {
  children: React.ReactNode
  onClick: () => void
  type?: 'submit' | 'button'
  disabled?: boolean
  className?: string
  variant?: 'primary' | 'secondary' | 'ghost'
}

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  variant = 'primary',
}) => {
  const base = 'px-4 py-2 rounded font-medium transition text-sm'
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 dark:text-gray-300',
  }
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  )
}

export default Button
