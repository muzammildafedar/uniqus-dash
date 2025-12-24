// Dashboard Statistics Interface
export interface StatCard {
  id: string
  value: string
  label: string
  trend: 'up' | 'down' | 'neutral'
  trendColor: string
}

// Order Interface
export interface Order {
  id: string
  product: string
  description: string
  price: string
  status: 'shipped' | 'processing' | 'cancelled'
  statusColor: string
  image: string
}

// Invoice Interface
export interface Invoice {
  id: string
  invoiceNumber: string
  company: string
  amount: string
  status: 'paid' | 'pending' | 'processing'
  statusColor: string
}

// Dashboard Statistics Data
export const DASHBOARD_STATS: StatCard[] = [
  {
    id: 'income',
    value: '$1,870',
    label: 'Income per lead',
    trend: 'down',
    trendColor: '#6366F1'
  },
  {
    id: 'leads',
    value: '2,890',
    label: 'New leads',
    trend: 'up',
    trendColor: '#6366F1'
  },
  {
    id: 'conversion',
    value: '15.10%',
    label: 'Conversion rate',
    trend: 'down',
    trendColor: '#EF4444'
  }
]

// Orders Data
export const ORDERS_DATA: Order[] = [
  {
    id: 'order-1',
    product: 'Macbook Pro 2013, 16 GB, 256 GB SSD',
    description: '4574 Bashirian Creek Suite 631',
    price: '$118.00',
    status: 'shipped',
    statusColor: '#10B981',
    image: '/api/placeholder/40/40'
  },
  {
    id: 'order-2',
    product: 'Dell XPS, 16 GB, 512 GB SSD, 1050 Ti',
    description: '8874 Candelario Valleys',
    price: '$208.00',
    status: 'processing',
    statusColor: '#F59E0B',
    image: '/api/placeholder/40/40'
  },
  {
    id: 'order-3',
    product: 'Macbook Air 2013, 4GB, 128 GB SSD',
    description: '6124 Flossie Station',
    price: '$118.00',
    status: 'processing',
    statusColor: '#F59E0B',
    image: '/api/placeholder/40/40'
  },
  {
    id: 'order-4',
    product: 'Macbook, 4GB, 128 GB SSD',
    description: '1910 Erdman Station Apt. 696',
    price: '$578.00',
    status: 'shipped',
    statusColor: '#10B981',
    image: '/api/placeholder/40/40'
  },
  {
    id: 'order-5',
    product: 'LG Laptop, 8 GB, 256 GB SSD',
    description: '586 Bernhard Landing Suite 706',
    price: '$374.00',
    status: 'cancelled',
    statusColor: '#EF4444',
    image: '/api/placeholder/40/40'
  },
  {
    id: 'order-6',
    product: 'Macbook Pro 2016, 16 GB, 512 GB SSD',
    description: '201 Bosco Coves',
    price: '$220.00',
    status: 'shipped',
    statusColor: '#10B981',
    image: '/api/placeholder/40/40'
  },
  {
    id: 'order-7',
    product: 'Macbook Pro 2018, 32 GB, 1 TB SSD',
    description: '9823 Crist Brooks Suite 116',
    price: '$698.00',
    status: 'processing',
    statusColor: '#F59E0B',
    image: '/api/placeholder/40/40'
  }
]

// Invoices Data
export const INVOICES_DATA: Invoice[] = [
  {
    id: 'invoice-1',
    invoiceNumber: 'Invoice #AA-04-19-1890678',
    company: 'New Madleton LLC.',
    amount: '$118.00',
    status: 'paid',
    statusColor: '#10B981'
  },
  {
    id: 'invoice-2',
    invoiceNumber: 'Invoice #AA-04-19-1897890',
    company: 'Crystalton INC.',
    amount: '$118.00',
    status: 'pending',
    statusColor: '#F59E0B'
  },
  {
    id: 'invoice-3',
    invoiceNumber: 'Invoice #AA-04-19-1890243',
    company: 'Tyriquemouth LLC.',
    amount: '$578.00',
    status: 'paid',
    statusColor: '#10B981'
  },
  {
    id: 'invoice-4',
    invoiceNumber: 'Invoice #AA-04-19-1893481',
    company: 'Lethamouth LLC.',
    amount: '$374.00',
    status: 'paid',
    statusColor: '#10B981'
  },
  {
    id: 'invoice-5',
    invoiceNumber: 'Invoice #AA-04-19-1823908',
    company: 'Kuvalisberg INC.',
    amount: '$220.00',
    status: 'paid',
    statusColor: '#10B981'
  },
  {
    id: 'invoice-6',
    invoiceNumber: 'Invoice #AA-04-19-1890123',
    company: 'Paxtonchester LLC.',
    amount: '$698.00',
    status: 'processing',
    statusColor: '#F59E0B'
  },
  {
    id: 'invoice-7',
    invoiceNumber: 'Invoice #AA-04-19-1890243',
    company: 'Tyriquemouth LLC.',
    amount: '$578.00',
    status: 'paid',
    statusColor: '#10B981'
  }
]

// Dashboard Text Constants
export const DASHBOARD_TEXTS = {
  orders: {
    title: 'Orders',
    totalText: 'Total Orders',
    totalCount: '2,480',
    viewAllButton: 'All Orders',
    tabs: {
      day: 'Day',
      week: 'Week',
      month: 'Month'
    },
    columns: {
      product: 'Product',
      details: 'Details'
    }
  },
  invoices: {
    title: 'Invoices',
    totalText: 'Total Invoices',
    totalCount: '1,520',
    viewAllButton: 'All Invoices',
    tabs: {
      day: 'Day',
      week: 'Week',
      month: 'Month'
    },
    columns: {
      number: 'Number',
      details: 'Details'
    }
  }
}

// Status Labels
export const STATUS_LABELS = {
  shipped: 'Shipped',
  processing: 'Processing',
  cancelled: 'Cancelled',
  paid: 'Paid',
  pending: 'Pending'
}