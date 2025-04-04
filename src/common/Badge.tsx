import { getInitials } from '@/utils/utils'
import { FC } from 'react'

interface BadgeProps {
  label: string
  bgColor?: string
}

const Badge: FC<BadgeProps> = ({ label, bgColor }) => {
  const initials = getInitials(label)
  const backgroundColor = bgColor || 'bg-blue-500'

  return (
    <div
      className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold text-sm ${backgroundColor}`}
    >
      {initials}
    </div>
  )
}

export default Badge
