import { memo, useCallback } from 'react'
import { icon15 } from '../../assets/icons'

interface HeaderProps {
  title?: string
  onMenuClick?: () => void
}

const Header = memo(function Header({ title = "Dashboard", onMenuClick }: HeaderProps) {
  const handleSearchClick = useCallback(() => {
    // TODO: Implement search functionality
    console.log('Search clicked')
  }, [])

  const handleProfileClick = useCallback(() => {
    // TODO: Implement profile menu
    console.log('Profile clicked')
  }, [])

  return (
    <header className="px-3 bg-gray-100 sm:px-4 md:px-6 py-3 sm:py-4 flex items-center justify-between sticky top-0 z-30">
      {/* Left side - Menu button and title */}
      <div className="flex items-center space-x-3 sm:space-x-4 min-w-0 flex-1">
        {/* Menu button */}
        <button
          onClick={onMenuClick}
          className="w-8 h-8 sm:w-9 sm:h-9 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-200 transition-colors flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          aria-label="Toggle sidebar"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        
        {/* Title */}
        <h1 className="text-base sm:text-lg font-bold text-gray-900 truncate">
          {title}
        </h1>
      </div>

      {/* Right side - Action buttons */}
      <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
        {/* Search button */}
        <button 
          onClick={handleSearchClick}
          className="w-8 h-8 sm:w-9 sm:h-9 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          aria-label="Search"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>

        {/* Profile button */}
        <button 
          onClick={handleProfileClick}
          className="w-8 h-8 sm:w-9 sm:h-9 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          aria-label="User profile"
        >
          <img className='w-4 h-4' src={icon15} />
        </button>
      </div>
    </header>
  )
})

export default Header