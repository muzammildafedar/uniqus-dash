import { useState, useCallback } from 'react'
import { useLocation } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'

interface LayoutProps {
  children: React.ReactNode
}

// Page title mapping for better UX
const PAGE_TITLES: Record<string, string> = {
  '/': 'Dashboard',
  '/analytics': 'Analytics',
  '/calendar': 'Calendar',
  '/tasks': 'Tasks',
  '/documents': 'Documents',
  '/users': 'Users',
  '/folder': 'Folder',
  '/box': 'Box',
  '/settings': 'Settings',
  '/mail': 'Mail',
  '/help': 'Help',
  '/profile': 'Profile'
}

function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()

  // Memoized handlers for better performance
  const handleSidebarClose = useCallback(() => {
    setSidebarOpen(false)
  }, [])

  const handleMenuClick = useCallback(() => {
    setSidebarOpen(true)
  }, [])

  // Dynamic page title based on current route
  const currentTitle = PAGE_TITLES[location.pathname] || 'Dashboard'

  return (
    <div className="min-h-screen bg-gray-50 lg:bg-gray-100 flex">
      <Sidebar 
        isOpen={sidebarOpen} 
        onClose={handleSidebarClose}
      />
      
      <div className="flex-1 flex flex-col min-w-0">
        <Header 
          title={currentTitle}
          onMenuClick={handleMenuClick}
        />

        <main className="flex-1 overflow-x-hidden overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout