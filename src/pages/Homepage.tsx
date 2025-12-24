import { memo, useCallback } from 'react'
import { StatCard, OrdersTable, InvoicesTable } from '../components/dashboard'
import { DASHBOARD_STATS, ORDERS_DATA, INVOICES_DATA } from '../constants/dashboardData'
import { type Order, type Invoice } from '../constants/dashboardData'
import { ErrorBoundary } from '../components/ui'

const Homepage = memo(function Homepage() {
  const handleOrderClick = useCallback((order: Order) => {
    console.log('Order clicked:', order.id)
    // TODO: Navigate to order details
  }, [])

  const handleInvoiceClick = useCallback((invoice: Invoice) => {
    console.log('Invoice clicked:', invoice.id)
    // TODO: Navigate to invoice details
  }, [])

  const handleViewAllOrders = useCallback(() => {
    console.log('View all orders clicked')
    // TODO: Navigate to orders page
  }, [])

  const handleViewAllInvoices = useCallback(() => {
    console.log('View all invoices clicked')
    // TODO: Navigate to invoices page
  }, [])

  return (
    <ErrorBoundary>
      <div className="p-3 sm:p-4 md:p-6 space-y-4 md:space-y-6 min-h-screen">
        {/* Statistics Cards */}
        <section aria-labelledby="stats-heading">
          <h2 id="stats-heading" className="sr-only">Dashboard Statistics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {DASHBOARD_STATS.map((stat) => (
              <StatCard 
                key={stat.id} 
                stat={stat}
              />
            ))}
          </div>
        </section>

        {/* Tables */}
        <section aria-labelledby="tables-heading">
          <h2 id="tables-heading" className="sr-only">Orders and Invoices</h2>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-6">
            <div className="w-full min-w-0">
              <OrdersTable 
                orders={ORDERS_DATA}
                onOrderClick={handleOrderClick}
                onViewAllClick={handleViewAllOrders}
              />
            </div>
            <div className="w-full min-w-0">
              <InvoicesTable 
                invoices={INVOICES_DATA}
                onInvoiceClick={handleInvoiceClick}
                onViewAllClick={handleViewAllInvoices}
              />
            </div>
          </div>
        </section>
      </div>
    </ErrorBoundary>
  )
})

export default Homepage