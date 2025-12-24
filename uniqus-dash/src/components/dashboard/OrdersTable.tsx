import { memo, useCallback } from 'react'
import { type Order } from '../../constants/dashboardData'
import { DASHBOARD_TEXTS, STATUS_LABELS } from '../../constants/dashboardData'
import { Card, Button } from '../ui'

interface OrdersTableProps {
  orders: Order[]
  onOrderClick?: (order: Order) => void
  onViewAllClick?: () => void
}

const OrdersTable = memo(function OrdersTable({ 
  orders, 
  onOrderClick,
  onViewAllClick 
}: OrdersTableProps) {
  const getStatusLabel = useCallback((status: Order['status']) => {
    return STATUS_LABELS[status] || status
  }, [])

  const handleOrderClick = useCallback((order: Order) => {
    onOrderClick?.(order)
  }, [onOrderClick])

  const handleImageError = useCallback((e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement
    const fallback = target.nextElementSibling as HTMLElement
    if (fallback) {
      target.style.display = 'none'
      fallback.classList.remove('hidden')
    }
  }, [])

  if (!orders?.length) {
    return (
      <Card>
        <div className="text-center py-8">
          <p className="text-gray-500">No orders found</p>
        </div>
      </Card>
    )
  }

  return (
    <Card className="w-full min-w-0">
      {/* Header */}
      <div className="flex flex-col xl:flex-row xl:items-center justify-between mb-3 sm:mb-4 lg:mb-6 space-y-2 xl:space-y-0">
        <h2 className="text-base sm:text-lg xl:text-xl font-bold text-gray-900">
          {DASHBOARD_TEXTS.orders.title}
        </h2>
        
        {/* Tabs and Calendar */}
        <div className="flex flex-col xl:flex-row items-start xl:items-center space-y-2 xl:space-y-0 xl:space-x-3">
          <div className="flex items-center space-x-1 sm:space-x-2" role="tablist">
            <button 
              className="text-xs font-medium text-gray-900 bg-gray-100 px-2 py-1 rounded-lg border border-gray-200"
              role="tab"
              aria-selected="true"
            >
              {DASHBOARD_TEXTS.orders.tabs.day}
            </button>
            <button 
              className="text-xs font-medium text-gray-500 hover:text-gray-900 px-2 py-1 hover:bg-gray-50 transition-colors"
              role="tab"
              aria-selected="false"
            >
              {DASHBOARD_TEXTS.orders.tabs.week}
            </button>
            <button 
              className="text-xs font-medium text-gray-500 hover:text-gray-900 px-2 py-1 hover:bg-gray-50 transition-colors"
              role="tab"
              aria-selected="false"
            >
              {DASHBOARD_TEXTS.orders.tabs.month}
            </button>
          </div>
          <button 
            className="p-1.5 bg-gray-100 rounded-lg border border-gray-200 text-gray-400 hover:text-gray-600 self-start xl:self-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Open calendar"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Table Header - Hidden on mobile */}
      <div className="hidden sm:block bg-gray-50 rounded-lg px-3 sm:px-4 py-2 sm:py-3 mb-3 sm:mb-4">
        <div className="grid grid-cols-2 text-xs sm:text-sm font-medium text-gray-500">
          <span>{DASHBOARD_TEXTS.orders.columns.product}</span>
          <span className="text-right">{DASHBOARD_TEXTS.orders.columns.details}</span>
        </div>
      </div>

      {/* Orders List */}
      <div className="space-y-1" role="list">
        {orders.map((order) => (
          <div 
            key={order.id} 
            className="flex flex-col sm:flex-row sm:items-center justify-between py-2 sm:py-3 px-2 sm:px-3 hover:bg-gray-50 rounded-lg transition-colors space-y-2 sm:space-y-0 cursor-pointer"
            onClick={() => handleOrderClick(order)}
            role="listitem"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                handleOrderClick(order)
              }
            }}
          >
            {/* Product Info */}
            <div className="flex items-center space-x-2 sm:space-x-3 flex-1 min-w-0">
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                <img 
                  src={order.image} 
                  alt={order.product}
                  className="w-full h-full object-cover"
                  onError={handleImageError}
                  loading="lazy"
                />
                <div className="w-full h-full bg-gray-200 flex items-center justify-center hidden">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-xs sm:text-sm font-semibold text-gray-900 mb-0.5 sm:mb-1 truncate">
                  {order.product}
                </h4>
                <p className="text-xs text-gray-500 truncate">
                  {order.description}
                </p>
              </div>
            </div>

            {/* Price and Status */}
            <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-start space-x-2 sm:space-x-0 sm:space-y-1 flex-shrink-0">
              <span className="text-xs sm:text-sm font-semibold text-gray-900">
                {order.price}
              </span>
              <span 
                className="text-xs font-medium px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md whitespace-nowrap"
                style={{ 
                  color: order.statusColor,
                  backgroundColor: `${order.statusColor}15`
                }}
              >
                {getStatusLabel(order.status)}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-3 sm:mt-4 lg:mt-6 pt-3 sm:pt-4 space-y-2 sm:space-y-0">
        <Button 
          onClick={onViewAllClick}
          className="w-full sm:w-auto"
        >
          {DASHBOARD_TEXTS.orders.viewAllButton}
        </Button>
        <span className="text-xs text-gray-400 text-center sm:text-right">
          {DASHBOARD_TEXTS.orders.totalCount} {DASHBOARD_TEXTS.orders.totalText}
        </span>
      </div>
    </Card>
  )
})

export default OrdersTable