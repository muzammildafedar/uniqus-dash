import { memo } from 'react'
import {
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  icon6,
  icon7,
  icon8,
  icon9,
  icon10,
  icon13,
  icon12,
  threeDot
} from '../../assets/icons'

// Icon mapping for menu items
const ICON_MAP = {
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  icon6,
  icon7,
  icon8,
  icon9,
  icon10,
  icon13,
  icon12,
  threeDot
} as const

interface MenuIconProps {
  iconId: keyof typeof ICON_MAP
  alt: string
  className?: string
}

export const MenuIcon = memo(function MenuIcon({ iconId, alt, className = "w-4 h-4" }: MenuIconProps) {
  const iconSrc = ICON_MAP[iconId]
  
  if (!iconSrc) {
    console.warn(`Icon not found: ${iconId}`)
    return null
  }

  return <img src={iconSrc} alt={alt} className={className} />
})

interface ChartIconProps {
  className?: string
}

export const ChartIcon = memo(function ChartIcon({ className = "w-5 h-5" }: ChartIconProps) {
  return <img src={icon12} alt="Chart" className={className} />
})

interface ThreeDotsIconProps {
  className?: string
}

export const ThreeDotsIcon = memo(function ThreeDotsIcon({ className = "w-4 h-4" }: ThreeDotsIconProps) {
  return <img src={threeDot} alt="Menu" className={className} />
})

// Export individual icon components for backward compatibility
export const DashboardIcon = memo(() => <MenuIcon iconId="icon1" alt="Dashboard" />)
export const AnalyticsIcon = memo(() => <MenuIcon iconId="icon2" alt="Analytics" />)
export const CalendarIcon = memo(() => <MenuIcon iconId="icon3" alt="Calendar" />)
export const TasksIcon = memo(() => <MenuIcon iconId="icon4" alt="Tasks" />)
export const DocumentsIcon = memo(() => <MenuIcon iconId="icon5" alt="Documents" />)
export const UsersIcon = memo(() => <MenuIcon iconId="icon6" alt="Users" />)
export const FolderIcon = memo(() => <MenuIcon iconId="icon7" alt="Folder" />)
export const BoxIcon = memo(() => <MenuIcon iconId="icon8" alt="Box" />)
export const SettingsIcon = memo(() => <MenuIcon iconId="icon9" alt="Settings" />)
export const MailIcon = memo(() => <MenuIcon iconId="icon10" alt="Mail" />)
export const HelpIcon = memo(() => <MenuIcon iconId="icon13" alt="Help" />)