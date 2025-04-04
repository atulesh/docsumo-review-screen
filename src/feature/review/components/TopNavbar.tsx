import {
  MdAccountCircle,
  MdHelpOutline,
  MdMoreVert,
  MdNotificationsNone,
} from 'react-icons/md'

const TopNavbar = () => {
  return (
    <header className="w-full px-6 py-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
      <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
        Review Screen
      </h1>
      <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300 text-xl">
        <button className="hover:text-primary transition">
          <MdMoreVert />
        </button>
        <button className="hover:text-primary transition">
          <MdHelpOutline />
        </button>
        <button className="hover:text-primary transition relative">
          <MdNotificationsNone />
          {/* Badge here */}
        </button>
        <button className="hover:text-primary transition">
          <MdAccountCircle />
          {/* profile dropdown here */}
        </button>
      </div>
    </header>
  )
}

export default TopNavbar
