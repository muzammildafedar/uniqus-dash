import { memo, useCallback } from 'react'
import { type Invoice } from '../../constants/dashboardData'
import { DASHBOARD_TEXTS, STATUS_LABELS } from '../../constants/dashboardData'
import { Card, Button } from '../ui'
import icon9 from '../../assets/icon_9.png'

interface InvoicesTableProps {
  invoices: Invoice[]
  onInvoiceClick?: (invoice: Invoice) => void
  onViewAllClick?: () => void
}

const InvoicesTable = memo(function InvoicesTable({ 
  invoices, 
  onInvoiceClick,
  onViewAllClick 
}: InvoicesTableProps) {
  const getStatusLabel = useCallback((status: Invoice['status']) => {
    return STATUS_LABELS[status] || status
  }, [])

  const handleInvoiceClick = useCallback((invoice: Invoice) => {
    onInvoiceClick?.(invoice)
  }, [onInvoiceClick])

  if (!invoices?.length) {
    return (
      <Card>
        <div className="text-center py-8">
          <p className="text-gray-500">No invoices found</p>
        </div>
      </Card>
    )
  }

  return (
    <Card className="w-full min-w-0">
      {/* Header */}
      <div className="flex flex-col xl:flex-row xl:items-center justify-between mb-3 sm:mb-4 lg:mb-6 space-y-2 xl:space-y-0">
        <h2 className="text-base sm:text-lg xl:text-xl font-bold text-gray-900">
          {DASHBOARD_TEXTS.invoices.title}
        </h2>
        
        {/* Tabs */}
        <div className="flex items-center space-x-1 sm:space-x-2" role="tablist">
          <button 
            className="text-xs font-medium text-gray-900 bg-gray-100 px-2 py-1 rounded-lg border border-gray-200"
            role="tab"
            aria-selected="true"
          >
            {DASHBOARD_TEXTS.invoices.tabs.day}
          </button>
          <button 
            className="text-xs font-medium text-gray-500 hover:text-gray-900 px-2 py-1 hover:bg-gray-50 transition-colors"
            role="tab"
            aria-selected="false"
          >
            {DASHBOARD_TEXTS.invoices.tabs.week}
          </button>
          <button 
            className="text-xs font-medium text-gray-500 hover:text-gray-900 px-2 py-1 hover:bg-gray-50 transition-colors"
            role="tab"
            aria-selected="false"
          >
            {DASHBOARD_TEXTS.invoices.tabs.month}
          </button>
        </div>
      </div>

      {/* Table Header - Hidden on mobile */}
      <div className="hidden sm:block bg-gray-50 rounded-lg px-3 sm:px-4 py-2 sm:py-3 mb-3 sm:mb-4">
        <div className="grid grid-cols-2 text-xs sm:text-sm font-medium text-gray-500">
          <span>{DASHBOARD_TEXTS.invoices.columns.number}</span>
          <span className="text-right">{DASHBOARD_TEXTS.invoices.columns.details}</span>
        </div>
      </div>

      {/* Invoices List */}
      <div className="space-y-1" role="list">
        {invoices.map((invoice) => (
          <div 
            key={invoice.id} 
            className="flex flex-col sm:flex-row sm:items-center justify-between py-2 sm:py-3 px-2 sm:px-3 hover:bg-gray-50 rounded-lg transition-colors space-y-2 sm:space-y-0 cursor-pointer"
            onClick={() => handleInvoiceClick(invoice)}
            role="listitem"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                handleInvoiceClick(invoice)
              }
            }}
          >
            {/* Invoice Info */}
            <div className="flex items-center space-x-2 sm:space-x-3 flex-1 min-w-0">
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <img src={icon9} className='w-4 h-4' />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-xs sm:text-sm font-semibold text-gray-900 mb-0.5 sm:mb-1 truncate">
                  {invoice.invoiceNumber}
                </h4>
                <p className="text-xs text-gray-500 truncate">
                  {invoice.company}
                </p>
              </div>
            </div>

            {/* Amount and Status */}
            <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-start space-x-2 sm:space-x-0 sm:space-y-1 flex-shrink-0">
              <span className="text-xs sm:text-sm font-semibold text-gray-900">
                {invoice.amount}
              </span>
              <span 
                className="text-xs font-medium px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md whitespace-nowrap"
                style={{ 
                  color: invoice.statusColor,
                  backgroundColor: `${invoice.statusColor}15`
                }}
              >
                {getStatusLabel(invoice.status)}
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
          {DASHBOARD_TEXTS.invoices.viewAllButton}
        </Button>
        <span className="text-xs text-gray-400 text-center sm:text-right">
          {DASHBOARD_TEXTS.invoices.totalCount} {DASHBOARD_TEXTS.invoices.totalText}
        </span>
      </div>
    </Card>
  )
})

export default InvoicesTable