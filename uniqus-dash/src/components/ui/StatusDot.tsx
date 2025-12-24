import React from 'react'
import { cn } from '../../utils/cn'

interface StatusDotProps {
  status: 'shipped' | 'processing' | 'paid' | 'pending' | 'cancelled' | 'active' | 'inactive'
  className?: string
}

const StatusDot: React.FC<StatusDotProps> = ({ status, className }) => {
  const statusConfig = {
    shipped: { color: 'bg-green-500', label: 'Shipped' },
    processing: { color: 'bg-yellow-500', label: 'Processing' },
    paid: { color: 'bg-green-500', label: 'Paid' },
    pending: { color: 'bg-yellow-500', label: 'Pending' },
    cancelled: { color: 'bg-red-500', label: 'Cancelled' },
    active: { color: 'bg-green-500', label: 'Active' },
    inactive: { color: 'bg-gray-400', label: 'Inactive' }
  }

  const config = statusConfig[status]

  return (
    <div className={cn('flex items-center space-x-2', className)}>
      <div className={cn('w-2 h-2 rounded-full', config.color)} />
      <span className="text-sm text-gray-600">{config.label}</span>
    </div>
  )
}

export default StatusDot