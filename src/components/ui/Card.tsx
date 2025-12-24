import { memo } from 'react'
import { cn } from '../../utils/cn'

interface CardProps {
  children: React.ReactNode
  className?: string
  padding?: 'none' | 'sm' | 'md' | 'lg'
  onClick?: () => void
}

const Card = memo(function Card({ 
  children, 
  className, 
  padding = 'md',
  onClick 
}: CardProps) {
  const paddingStyles = {
    none: '',
    sm: 'p-3 sm:p-4',
    md: 'p-3 sm:p-4 lg:p-5 xl:p-6',
    lg: 'p-4 sm:p-6 lg:p-8'
  }

  const Component = onClick ? 'button' : 'div'

  return (
    <Component 
      className={cn(
        'bg-white rounded-xl sm:rounded-2xl border border-gray-100',
        paddingStyles[padding],
        onClick && 'cursor-pointer hover:shadow-md transition-shadow focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
        className
      )}
      onClick={onClick}
    >
      {children}
    </Component>
  )
})

export default Card