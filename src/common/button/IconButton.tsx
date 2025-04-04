import React, { FC } from 'react'

interface IconButtonProps {
  icon: React.ReactNode
  title?: string
  className?: string
  onClick?: () => void
}
const IconButton: FC<IconButtonProps> = ({
  icon,
  title,
  className = '',
  onClick,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      className={`hover:text-primary transition text-xl ${className}`}
      title={title}
      {...props}
    >
      {icon}
    </button>
  )
}

export default IconButton
