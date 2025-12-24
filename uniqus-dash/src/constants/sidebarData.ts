// Menu Item Interface
export interface MenuItem {
  id: string
  iconId: 'icon1' | 'icon2' | 'icon3' | 'icon4' | 'icon5' | 'icon6' | 'icon7' | 'icon8' | 'icon9' | 'icon10' | 'icon13' // Specific icon IDs
  label: string
  href?: string
  active?: boolean
  badge?: {
    color: 'green' | 'red'
    show: boolean
  }
}

// Event Interface
export interface EventItem {
  id: string
  time: string
  timeColor: string
  title: string
  description: string
  dotColor: string
}

// Menu Items Configuration - using icon IDs instead of JSX
export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    href: '/',
    iconId: 'icon1'
  },
  {
    id: 'analytics',
    label: 'Analytics',
    href: '/analytics',
    iconId: 'icon2'
  },
  {
    id: 'calendar',
    label: 'Calendar',
    href: '/calendar',
    iconId: 'icon3'
  },
  {
    id: 'tasks',
    label: 'Tasks',
    href: '/tasks',
    iconId: 'icon4'
  },
  {
    id: 'documents',
    label: 'Documents',
    href: '/documents',
    iconId: 'icon5'
  },
  {
    id: 'users',
    label: 'Users',
    href: '/users',
    iconId: 'icon6'
  },
  {
    id: 'folder',
    label: 'Folder',
    href: '/folder',
    badge: { color: 'green', show: true },
    iconId: 'icon7'
  },
  {
    id: 'box',
    label: 'Box',
    href: '/box',
    iconId: 'icon8'
  },
  {
    id: 'settings',
    label: 'Settings',
    href: '/settings',
    badge: { color: 'red', show: true },
    iconId: 'icon9'
  },
  {
    id: 'mail',
    label: 'Mail',
    href: '/mail',
    iconId: 'icon10'
  },
  {
    id: 'help',
    label: 'Help',
    href: '/help',
    iconId: 'icon13'
  }
]

// Upcoming Events Data
export const UPCOMING_EVENTS: EventItem[] = [
  {
    id: 'event-1',
    time: '05:48AM',
    timeColor: '#5E81F4',
    title: 'Meeting with a client',
    description: 'Tell how to boost website traffic',
    dotColor: '#5E81F4'
  },
  {
    id: 'event-2',
    time: '10:28AM',
    timeColor: '#FF8A00',
    title: 'New project discussion',
    description: 'Business Cards Does Your Business',
    dotColor: '#FF8A00'
  },
  {
    id: 'event-3',
    time: '07:58PM',
    timeColor: '#00C851',
    title: 'Financial data overview',
    description: 'What Makes Flyers Unrivaled',
    dotColor: '#00C851'
  }
]

// Sidebar Text Constants
export const SIDEBAR_TEXTS = {
  welcome: 'Welcome,',
  brandName: 'CRAFTUI',
  upcomingEvents: 'Upcoming events',
  conversionHistory: {
    title: 'Conversion history',
    subtitle: 'Week to week performance'
  }
}

// Chart Configuration
export const CHART_CONFIG = {
  labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8'],
  datasets: [
    {
      label: 'Primary',
      data: [60, 80, 90, 70, 100, 85, 65, 75],
      backgroundColor: '#5E81F4',
      borderRadius: 4,
      borderSkipped: false,
      barThickness: 8,
    },
    {
      label: 'Secondary',
      data: [40, 30, 50, 60, 45, 55, 65, 35],
      backgroundColor: '#00C851',
      borderRadius: 4,
      borderSkipped: false,
      barThickness: 8,
    },
  ],
}