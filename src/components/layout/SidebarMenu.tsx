import { memo, useCallback } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { MENU_ITEMS, type MenuItem } from '../../constants/sidebarData'
import { MenuIcon } from '../icons'

interface SidebarMenuProps {
  onItemClick?: (item: MenuItem) => void
}

const SidebarMenu = memo(function SidebarMenu({ onItemClick }: SidebarMenuProps) {
  const navigate = useNavigate()
  const location = useLocation()

  const handleItemClick = useCallback((item: MenuItem) => {
    if (item.href) {
      navigate(item.href)
    }
    
    // Close sidebar on mobile after navigation
    if (window.innerWidth < 1024) { // lg breakpoint
      onItemClick?.(item)
    }
  }, [navigate, onItemClick])

  const handleProfileClick = useCallback(() => {
    navigate('/profile')
    
    // Close sidebar on mobile after navigation
    if (window.innerWidth < 1024) { // lg breakpoint
      onItemClick?.({
        id: 'profile',
        label: 'Profile',
        href: '/profile',
        iconId: 'icon1' // Using a default icon
      })
    }
  }, [navigate, onItemClick])

  return (
    <nav className="w-21 h-full bg-white relative flex flex-col" aria-label="Main navigation">
      {/* Separator */}
      <div className="absolute right-0 top-0 w-0.5 h-full border-r border-gray-200" aria-hidden="true" />

      {/* Menu Items */}
      <div className="flex-1 flex flex-col" role="list">
        {MENU_ITEMS.map((item) => {
          const isActive = location.pathname === item.href
          
          return (
            <div key={item.id} className="relative h-16 flex items-center justify-center" role="listitem">
              {/* Active Background */}
              {isActive && (
                <>
                  <div className="absolute w-12 h-12 bg-blue-50 rounded" aria-hidden="true" />
                  {/* Active Line */}
                  <div className="absolute right-0 top-2 bottom-2 w-0.5 bg-blue-500 rounded-full" aria-hidden="true" />
                </>
              )}
              
              {/* Icon Button */}
              <button
                onClick={() => handleItemClick(item)}
                className="relative z-10 w-5.5 h-5.5 flex items-center justify-center text-gray-500 hover:text-blue-500 transition-colors cursor-pointer hover:scale-110 transform focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                style={{
                  color: isActive ? '#5E81F4' : '#8181A5'
                }}
                title={item.label}
                aria-label={item.label}
                aria-current={isActive ? 'page' : undefined}
              >
                <MenuIcon iconId={item.iconId} alt={item.label} />
              </button>

              {/* Badge */}
              {item.badge?.show && (
                <div 
                  className="absolute top-5 right-4 w-2 h-2 border-2 border-white rounded-full"
                  style={{
                    background: item.badge.color === 'green' ? '#8AF1B9' : '#FF808B'
                  }}
                  aria-label={`${item.label} has notifications`}
                />
              )}
            </div>
          )
        })}
      </div>

      {/* User Profile */}
      <div className="pb-8 flex justify-center">
        <div className="relative">
          <button
            onClick={handleProfileClick}
            className="w-7.5 h-7.5 rounded-md border-none cursor-pointer bg-cover bg-center hover:opacity-80 hover:scale-105 transform transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80)'
            }}
            title="User Profile"
            aria-label="Go to user profile"
          />
          
          {/* Status Indicator */}
          <div 
            className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-green-400 border-2 border-white rounded-full" 
            aria-label="User is online"
          />
        </div>
      </div>
    </nav>
  )
})

export default SidebarMenu