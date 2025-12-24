import { memo, useCallback, useMemo, useEffect } from 'react'
import { cn } from '../../utils/cn'
import SidebarMenu from './SidebarMenu'
import { Ellipsis } from 'lucide-react'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { 
  UPCOMING_EVENTS, 
  SIDEBAR_TEXTS, 
  CHART_CONFIG
} from '../../constants/sidebarData'
import { ChartIcon } from '../icons'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

interface SidebarProps {
  isOpen?: boolean
  onClose?: () => void
}

const Sidebar = memo(function Sidebar({ 
  isOpen = true, 
  onClose 
}: SidebarProps) {
  // Prevent body scroll when sidebar is open on mobile
  useEffect(() => {
    // Only apply scroll lock on mobile/tablet (not desktop)
    const isMobile = window.innerWidth < 1024 // lg breakpoint
    
    if (isOpen && isMobile) {
      // Store current scroll position
      const scrollY = window.scrollY
      
      // Add class to prevent body scroll
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = '100%'
      
      return () => {
        // Restore body scroll and position
        document.body.style.overflow = ''
        document.body.style.position = ''
        document.body.style.top = ''
        document.body.style.width = ''
        
        // Restore scroll position
        window.scrollTo(0, scrollY)
      }
    }
  }, [isOpen])

  const handleOverlayClick = useCallback(() => {
    onClose?.()
  }, [onClose])

  const handleEventClick = useCallback((eventTitle: string) => {
    console.log('Event clicked:', eventTitle)
    // TODO: Navigate to event details or show modal
  }, [])

  const handleEventMenuClick = useCallback((e: React.MouseEvent, eventTitle: string) => {
    e.stopPropagation()
    console.log('Event menu clicked:', eventTitle)
    // TODO: Show context menu
  }, [])

  const handleChartButtonClick = useCallback(() => {
    console.log('Chart button clicked')
    // TODO: Show chart details or navigate to analytics
  }, [])

  // Memoize chart options for better performance
  const chartOptions = useMemo(() => ({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#FFFFFF',
        bodyColor: '#FFFFFF',
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: true,
      },
    },
    scales: {
      x: {
        display: false,
        grid: {
          display: false,
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
        },
        beginAtZero: true,
        max: 100,
      },
    },
    layout: {
      padding: {
        top: 0,
        bottom: 0,
        left: 8,
        right: 8,
      },
    },
    elements: {
      bar: {
        borderWidth: 0,
        borderRadius: 1,
      },
    },
  }), [])

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={handleOverlayClick}
          onTouchEnd={handleOverlayClick}
          aria-hidden="true"
        />
      )}
      
      {/* Sidebar */}
      <aside 
        className={cn(
          'fixed inset-y-0 left-0 z-50 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 flex shadow-xl lg:shadow-none bg-white',
          'w-80 sm:w-96 lg:w-96.75',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
        aria-label="Sidebar navigation"
      >
        {/* Left Navigation Icons */}
        <div className="w-14 sm:w-16 lg:w-21 bg-gray-50 flex flex-col items-center py-3 sm:py-4 lg:py-6">
          {/* Logo Icon */}
          <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-blue-500 rounded-lg flex items-center justify-center mb-4 sm:mb-6 lg:mb-8">
            <span className="text-white font-bold text-xs sm:text-sm lg:text-lg" aria-label="CraftUI Logo">C</span>
          </div>
          
          {/* Navigation Icons with Profile at Bottom */}
          <div className="flex-1 flex flex-col">
            <SidebarMenu onItemClick={onClose} />
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-h-0 overflow-y-auto ml-2 lg:ml-0">
          {/* Mobile close button */}
          <div className="lg:hidden flex justify-end p-3 sm:p-4 pr-5 sm:pr-6">
            <button
              onClick={onClose}
              className="p-2 rounded-md text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Close sidebar"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Logo and Welcome Section */}
          <header className="px-6 sm:px-7 lg:px-6 pt-4 sm:pt-5 lg:pt-6 pb-3 sm:pb-4 flex-shrink-0">
            <div className="mb-3 sm:mb-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg sm:text-xl lg:text-2xl">C</span>
              </div>
            </div>
            
            <div className="mb-4 sm:mb-5 lg:mb-6">
              <p className="text-gray-600 text-xs sm:text-sm mb-1">{SIDEBAR_TEXTS.welcome}</p>
              <h1 className="text-lg sm:text-xl font-bold text-gray-900">{SIDEBAR_TEXTS.brandName}</h1>
            </div>
          </header>

          {/* Upcoming Events Section */}
          <section className="px-6 sm:px-7 lg:px-6 mb-4 sm:mb-5 lg:mb-6 flex-shrink-0">
            <h2 className="font-bold text-sm sm:text-base leading-5 mb-3 sm:mb-4 text-craft-dark">
              {SIDEBAR_TEXTS.upcomingEvents}
            </h2>
            <div className="space-y-2 sm:space-y-3" role="list">
              {UPCOMING_EVENTS.map((event) => (
                <button
                  key={event.id}
                  onClick={() => handleEventClick(event.title)}
                  className="w-full text-left relative bg-gray-50 rounded-xl p-2.5 sm:p-3 hover:bg-gray-100 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  role="listitem"
                >
                  {/* Time Section */}
                  <div className="flex items-center gap-1.5 mb-1.5 sm:mb-2">
                    <div 
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: event.dotColor }}
                      aria-hidden="true"
                    />
                    <time 
                      className="font-semibold text-[9px] sm:text-[10px] leading-3"
                      style={{ color: event.timeColor }}
                    >
                      {event.time}
                    </time>
                  </div>
                  
                  {/* Menu Icon */}
                  <button 
                    onClick={(e) => handleEventMenuClick(e, event.title)}
                    className="absolute top-2.5 sm:top-3 right-2.5 sm:right-3 w-3 h-3 text-craft-gray flex-shrink-0 hover:text-gray-600 transition-colors focus:outline-none focus:ring-1 focus:ring-blue-500"
                    aria-label={`Options for ${event.title}`}
                  >
                    <Ellipsis className="w-3 h-3" />
                  </button>
                  
                  {/* Event Name */}
                  <h3 className="font-semibold text-[11px] sm:text-xs leading-4 text-craft-dark mb-1 pr-5 sm:pr-6">
                    {event.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="font-normal text-[9px] sm:text-[10px] leading-3 text-gray-600 pr-5 sm:pr-6">
                    {event.description}
                  </p>
                </button>
              ))}
            </div>
          </section>

          {/* Conversion History */}
          <section className="px-6 sm:px-7 lg:px-6 flex flex-col min-h-0 pb-4 sm:pb-5 lg:pb-6">
            <div className="flex-1 min-h-0 bg-gray-50 rounded-xl p-3 sm:p-4 flex flex-col">
              {/* Header inside background */}
              <div className="flex items-start justify-between mb-2 flex-shrink-0">
                <div className="flex-1 min-w-0">
                  <h2 className="font-bold text-sm sm:text-base leading-tight text-craft-dark">
                    {SIDEBAR_TEXTS.conversionHistory.title}
                  </h2>
                  <p className="font-semibold text-[6px] sm:text-xs text-gray-600 mb-1 sm:pr-6">
                    {SIDEBAR_TEXTS.conversionHistory.subtitle}
                  </p>
                </div>
                <button 
                  onClick={handleChartButtonClick}
                  className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-lg sm:rounded-xl border-0 flex items-center justify-center text-gray-400 hover:shadow-md hover:text-gray-600 transition-all flex-shrink-0 ml-3 sm:ml-4 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="View chart details"
                >
                  <ChartIcon />
                </button>
              </div>
              
              {/* Chart */}
              <div className="flex-1 min-h-0 flex items-end justify-center">
                <div className="w-full h-20 sm:h-24">
                  <Bar
                    data={{
                      labels: CHART_CONFIG.labels,
                      datasets: CHART_CONFIG.datasets,
                    }}
                    options={chartOptions}
                    aria-label="Conversion history chart"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </aside>
    </>
  )
})

export default Sidebar