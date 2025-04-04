import { applyTheme, getInitialTheme, Theme } from '@/app/theme'
import IconButton from '@/common/button/IconButton'
import { useEffect, useState } from 'react'
import {
  MdAccountCircle,
  MdDarkMode,
  MdHelpOutline,
  MdLightMode,
  MdMoreVert,
  MdNotificationsNone,
} from 'react-icons/md'

const TopNavbar = () => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme())

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK)
  }

  return (
    <header className="w-full px-6 py-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
      <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
        Review Screen
      </h1>
      <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300 text-xl">
        <IconButton icon={<MdMoreVert />} title="More" />
        <IconButton icon={<MdHelpOutline />} title="Help" />
        <IconButton icon={<MdNotificationsNone />} title="Notifications" />
        <IconButton icon={<MdAccountCircle />} title="Profile" />
        <IconButton
          icon={theme === Theme.DARK ? <MdLightMode /> : <MdDarkMode />}
          title="Toggle Theme"
          onClick={toggleTheme}
        />
      </div>
    </header>
  )
}

export default TopNavbar
