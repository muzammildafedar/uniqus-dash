# Uniqus - Dashboard #02

A modern, responsive SaaS dashboard built with React, TypeScript, and Tailwind CSS. This project implements a complete dashboard interface with reusable UI components, following modern React best practices.

## 🚀 Features

### Dashboard Components
- **Statistics Cards**: Display key performance indicators with trend indicators
- **Data Tables**: Responsive tables for invoices and orders with sorting capabilities
- **Status Indicators**: Visual status dots and badges for different states
- **Navigation**: Multi-page routing with sidebar navigation
- **Layout System**: Responsive layout with header and collapsible sidebar

### UI Components
- **Button**: Multiple variants with consistent styling
- **Card**: Flexible container component with customizable padding
- **StatusDot**: Visual indicators for different states
- **ErrorBoundary**: Error handling component for robust UI
- **Icons**: Custom sidebar icons and navigation elements

### Layout & Navigation
- **Responsive Sidebar**: Collapsible navigation with mobile support
- **Header**: Top navigation with branding and user controls
- **Multi-page Layout**: Complete routing system with multiple dashboard pages
- **Mobile-First Design**: Fully responsive across all screen sizes

## 🛠 Tech Stack

### Core Dependencies
- **React 19.2.0** - Latest React with modern hooks and concurrent features
- **TypeScript 5.9.3** - Type-safe development with latest features
- **Tailwind CSS 4.1.18** - Utility-first CSS framework with latest features
- **Vite (Rolldown) 7.2.5** - Ultra-fast build tool and development server

### State Management & Routing
- **Redux Toolkit 2.11.2** - Modern Redux for state management
- **React Redux 9.2.0** - React bindings for Redux
- **React Router DOM 7.11.0** - Client-side routing

### Charts & Visualization
- **Chart.js 4.5.1** - Powerful charting library
- **React Chart.js 2 5.3.1** - React wrapper for Chart.js

### UI Utilities
- **Lucide React 0.562.0** - Beautiful & consistent icon library
- **clsx 2.1.1** - Utility for constructing className strings
- **tailwind-merge 3.4.0** - Merge Tailwind CSS classes without conflicts

### Development Tools
- **ESLint 9.39.1** - Code linting and quality
- **TypeScript ESLint 8.46.4** - TypeScript-specific linting rules
- **Vite React Plugin 5.1.1** - React support for Vite

## 📁 Project Structure

```
uniqus-dash/
├── public/                     # Static assets
│   └── vite.svg               # Vite logo
├── src/                       # Source code
│   ├── assets/                # Static assets (images, icons)
│   │   ├── icons/            # Icon assets directory
│   │   ├── *.png             # Various UI icons (icon_1 to icon_15)
│   │   ├── logo.png          # Application logo
│   │   ├── profile.png       # Profile placeholder image
│   │   └── 3_dot.png         # Menu dots icon
│   ├── components/           # React components
│   │   ├── dashboard/        # Dashboard-specific components
│   │   │   ├── StatCard.tsx          # Statistics display cards
│   │   │   ├── InvoicesTable.tsx     # Invoices data table
│   │   │   ├── OrdersTable.tsx       # Orders data table
│   │   │   └── index.ts              # Component exports
│   │   ├── features/         # Feature-specific components (empty)
│   │   ├── icons/            # Custom icon components
│   │   │   ├── SidebarIcons.tsx      # Navigation icons
│   │   │   └── index.ts              # Icon exports
│   │   ├── layout/           # Layout components
│   │   │   ├── Header.tsx            # Top navigation header
│   │   │   ├── Sidebar.tsx           # Main sidebar navigation
│   │   │   ├── SidebarMenu.tsx       # Sidebar menu items
│   │   │   ├── Layout.tsx            # Base layout wrapper
│   │   │   └── index.ts              # Layout exports
│   │   └── ui/               # Reusable UI components
│   │       ├── Button.tsx            # Button component
│   │       ├── Card.tsx              # Card container
│   │       ├── StatusDot.tsx         # Status indicator dots
│   │       ├── ErrorBoundary.tsx     # Error handling wrapper
│   │       └── index.ts              # UI component exports
│   ├── constants/            # Application constants
│   │   ├── colors.ts                 # Color definitions
│   │   ├── dashboardData.ts          # Dashboard mock data
│   │   ├── design-system.ts          # Design system tokens
│   │   ├── sidebarData.ts            # Sidebar navigation data
│   │   ├── typography.ts             # Typography definitions
│   │   └── index.ts                  # Constants exports
│   ├── hooks/                # Custom React hooks
│   │   ├── useDebounce.ts            # Debounce hook for performance
│   │   ├── useLocalStorage.ts        # Local storage management
│   │   └── index.ts                  # Hooks exports
│   ├── pages/                # Page components (routes)
│   │   ├── Homepage.tsx              # Main dashboard page
│   │   ├── Analytics.tsx             # Analytics page
│   │   ├── Calendar.tsx              # Calendar page
│   │   ├── Documents.tsx             # Documents page
│   │   ├── Tasks.tsx                 # Tasks page
│   │   ├── Users.tsx                 # Users management page
│   │   ├── Settings.tsx              # Settings page
│   │   ├── Profile.tsx               # User profile page
│   │   ├── Mail.tsx                  # Mail page
│   │   ├── Help.tsx                  # Help page
│   │   ├── Box.tsx                   # Box/Storage page
│   │   ├── Folder.tsx                # Folder management page
│   │   └── index.ts                  # Page exports
│   ├── store/                # Redux store configuration
│   │   └── slices/                   # Redux slices (empty - ready for state)
│   ├── types/                # TypeScript type definitions (empty)
│   ├── utils/                # Utility functions
│   │   ├── cn.ts                     # Class name utility (clsx + tailwind-merge)
│   │   ├── errorHandling.ts          # Error handling utilities
│   │   ├── formatters.ts             # Data formatting functions
│   │   └── index.ts                  # Utility exports
│   ├── App.tsx               # Main App component
│   ├── main.tsx              # Application entry point
│   └── index.css             # Global styles and Tailwind imports
├── .env                      # Environment variables
├── .env.example              # Environment variables template
├── index.html                # HTML template
├── package.json              # Dependencies and scripts
├── tailwind.config.js        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
├── tsconfig.app.json         # App-specific TypeScript config
├── tsconfig.node.json        # Node-specific TypeScript config
├── vite.config.ts            # Vite build configuration
└── eslint.config.js          # ESLint configuration
```

## 📂 Directory Explanations

### `/src/components/`
**Purpose**: Contains all React components organized by functionality
- **`dashboard/`**: Components specific to dashboard functionality (stats, tables)
- **`features/`**: Feature-specific components (currently empty, ready for expansion)
- **`icons/`**: Custom icon components and SVG wrappers
- **`layout/`**: Layout-related components (header, sidebar, page wrappers)
- **`ui/`**: Reusable UI components following design system patterns

### `/src/constants/`
**Purpose**: Application-wide constants and configuration
- **`colors.ts`**: Color palette and theme definitions
- **`dashboardData.ts`**: Mock data for dashboard components
- **`design-system.ts`**: Design tokens and system values
- **`sidebarData.ts`**: Navigation menu structure and routes
- **`typography.ts`**: Font sizes, weights, and text styles

### `/src/hooks/`
**Purpose**: Custom React hooks for reusable logic
- **`useDebounce.ts`**: Performance optimization for search/input
- **`useLocalStorage.ts`**: Browser storage management with React state

### `/src/pages/`
**Purpose**: Top-level page components mapped to routes
- Each file represents a distinct page/route in the application
- Organized alphabetically for easy navigation
- Includes main dashboard and all secondary pages

### `/src/store/`
**Purpose**: Redux Toolkit store configuration and state management
- **`slices/`**: Redux slices for different feature domains (ready for implementation)
- Centralized state management for complex application state

### `/src/types/`
**Purpose**: TypeScript type definitions and interfaces
- Currently empty but structured for type definitions
- Shared types across components and features

### `/src/utils/`
**Purpose**: Utility functions and helper methods
- **`cn.ts`**: Class name utility combining clsx and tailwind-merge
- **`errorHandling.ts`**: Error handling and logging utilities
- **`formatters.ts`**: Data formatting functions (dates, numbers, etc.)

### `/src/assets/`
**Purpose**: Static assets including images and icons
- **`icons/`**: Icon asset files
- **`*.png`**: Various UI icons and images
- Organized for easy asset management and optimization

## 🎨 Design System

### Color Palette
The application uses a comprehensive color system defined in Tailwind configuration:

#### Primary Colors
- **App Primary**: `#5E81F4` - Main brand color
- **Primary Dark**: `#1C1D21` - Dark theme primary
- **Primary Grey**: `#8181A5` - Neutral grey

#### Secondary Colors
- **Yellow**: `#F4BE5E` - Warning/highlight states
- **Green**: `#7CE7AC` - Success states
- **Red**: `#FF808B` - Error/danger states
- **Purple**: `#9698D6` - Info states
- **Cyan**: `#40E1FA` - Accent color

#### Background Colors
- **Light**: `#F5F5FA` - Main background
- **White**: `#FFFFFF` - Card/container backgrounds
- **Grey**: `#F6F6F6` - Subtle backgrounds

#### Outline Colors
- **Default**: `#F0F0F3` - Default borders
- **Primary**: `#5E81F4` - Active/focused borders
- **Resting**: `#ECECF2` - Inactive borders

### Typography System
Custom typography scale with Lato font family:
- **Headings**: H1 (48px) to H5 (20px) with consistent line heights
- **Body Text**: 14px with regular and bold variants
- **Buttons**: Specific sizing for large (14px) and small (12px) buttons
- **Caption**: 12px for small text and labels

### Component Variants
- **Buttons**: Consistent styling with hover states
- **Cards**: Flexible padding options
- **Status Indicators**: Color-coded status dots and badges

## 🚀 Getting Started

### Prerequisites
- **Node.js 18+** - JavaScript runtime
- **npm** or **yarn** - Package manager

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd uniqus-dash
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Set up environment variables**
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. **Start the development server**
```bash
npm run dev
# or
yarn dev
```

5. **Open your browser**
Navigate to `http://localhost:5173` (Vite's default port)

### Available Scripts

- **`npm run dev`** - Start development server with hot reload
- **`npm run build`** - Build for production (TypeScript compilation + Vite build)
- **`npm run preview`** - Preview production build locally
- **`npm run lint`** - Run ESLint for code quality checks

### Build Process
The build process uses TypeScript compilation followed by Vite bundling:
1. `tsc -b` - TypeScript compilation with project references
2. `vite build` - Production bundling with optimizations

## 🏗️ Architectural Decisions

### Component Architecture
**Decision**: Organized components by functionality rather than technical layers
- **`/ui`**: Reusable, generic components following atomic design principles
- **`/dashboard`**: Business logic components specific to dashboard features
- **`/layout`**: Structural components for page organization
- **`/icons`**: Centralized icon management for consistency

**Rationale**: This structure promotes reusability, maintainability, and clear separation of concerns. It makes it easier for developers to locate and modify components based on their purpose.

### State Management Strategy
**Decision**: Redux Toolkit with prepared slice structure
- Centralized state management ready for complex application state
- Slice-based organization for feature-specific state
- Currently minimal state with room for expansion

**Rationale**: Redux Toolkit provides excellent developer experience with less boilerplate than traditional Redux, while maintaining predictable state updates and time-travel debugging capabilities.

### Styling Approach
**Decision**: Tailwind CSS with custom design system
- Utility-first CSS for rapid development
- Custom color palette and typography system
- Component-level styling with consistent design tokens

**Rationale**: Tailwind CSS enables fast prototyping while maintaining design consistency. The custom configuration ensures brand alignment and provides a scalable design system.

### Build Tool Selection
**Decision**: Vite with Rolldown bundler
- Ultra-fast development server with HMR
- Modern build optimizations
- Native ES modules support

**Rationale**: Vite provides significantly faster development experience compared to traditional bundlers, especially for React applications with TypeScript.

### TypeScript Configuration
**Decision**: Project references with separate configurations
- Modular TypeScript setup for different contexts
- Strict type checking enabled
- Optimized for both development and build processes

**Rationale**: Project references improve build performance and allow different TypeScript configurations for application code vs. build tools.

## 🔧 Configuration

### Vite Configuration
The project uses Vite with Rolldown for ultra-fast builds:
```typescript
// vite.config.ts
export default defineConfig({
  plugins: [
    react(),           // React support
    tailwindcss(),     // Tailwind CSS integration
  ],
})
```

### Tailwind CSS Setup
Custom configuration with extended theme:
- **Custom Font**: Lato font family integration
- **Extended Colors**: Comprehensive color system
- **Custom Spacing**: Additional spacing utilities
- **Typography Scale**: Custom font sizes and line heights
- **Responsive Breakpoints**: Including custom `xs` breakpoint

### TypeScript Configuration
Project uses TypeScript project references:
- **`tsconfig.json`**: Root configuration with references
- **`tsconfig.app.json`**: Application-specific settings
- **`tsconfig.node.json`**: Node.js/build tool settings

### ESLint Setup
Modern ESLint configuration with:
- React hooks rules
- React refresh rules
- TypeScript ESLint integration
- Modern JavaScript standards

## 📋 Assumptions & Trade-offs

### Assumptions Made

#### Data & API Integration
- **Mock Data**: Dashboard currently uses static mock data from constants
- **API Ready**: Component structure assumes future REST API integration
- **Authentication**: No authentication system implemented (assumed to be added later)
- **Real-time Updates**: Components designed for static data (WebSocket integration would require refactoring)

#### User Experience
- **Desktop First**: Primary focus on desktop experience with mobile responsiveness
- **Modern Browsers**: Assumes ES2020+ support and modern CSS features
- **Single Language**: No internationalization (i18n) support implemented
- **Accessibility**: Basic accessibility assumed (ARIA labels would need enhancement)

#### Development Environment
- **Node.js 18+**: Modern Node.js features and npm workspaces support
- **Modern Development**: Assumes developers familiar with React hooks, TypeScript, and Tailwind CSS
- **Git Workflow**: Standard Git workflow with feature branches assumed

### Trade-offs Made

#### Performance vs. Development Speed
**Trade-off**: Chose development velocity over micro-optimizations
- **Decision**: Used standard React patterns instead of advanced optimization techniques
- **Impact**: Faster development but may need performance tuning for large datasets
- **Mitigation**: Structure allows for easy optimization (memo, useMemo, useCallback) when needed

#### Bundle Size vs. Feature Richness
**Trade-off**: Included comprehensive libraries for future extensibility
- **Decision**: Added Chart.js and full Redux Toolkit even with minimal current usage
- **Impact**: Larger initial bundle size but ready for feature expansion
- **Mitigation**: Tree-shaking and code splitting can be implemented as needed

#### Type Safety vs. Development Speed
**Trade-off**: Strict TypeScript with some `any` types in development
- **Decision**: Enabled strict TypeScript but allowed flexibility during rapid prototyping
- **Impact**: Good type safety with room for improvement
- **Mitigation**: Gradual type strengthening as features mature

#### Customization vs. Consistency
**Trade-off**: Custom design system vs. using existing component library
- **Decision**: Built custom components instead of using Material-UI or Ant Design
- **Impact**: More development time but complete design control
- **Mitigation**: Reusable component architecture reduces duplication

#### State Complexity vs. Simplicity
**Trade-off**: Redux setup for future complexity vs. simple useState
- **Decision**: Implemented Redux Toolkit structure even with minimal state needs
- **Impact**: More initial setup but scalable for complex state management
- **Mitigation**: Can start with local state and migrate to Redux as needed

### Future Considerations

#### Scalability Concerns
- **Component Library**: May need to extract UI components into separate package
- **State Management**: Redux slices need implementation for complex features
- **Performance**: Virtual scrolling for large data tables
- **Testing**: Comprehensive test suite needed for production readiness

#### Technical Debt
- **Type Definitions**: `/src/types/` directory needs population with proper interfaces
- **Error Handling**: More robust error boundaries and error reporting
- **Accessibility**: WCAG compliance improvements needed
- **Documentation**: Component documentation and Storybook integration

## 📱 Responsive Design

The dashboard is fully responsive and optimized for:
- **Desktop**: Full sidebar navigation with expanded layout
- **Tablet**: Collapsible sidebar with touch-friendly interactions  
- **Mobile**: Hidden sidebar with hamburger menu overlay
- **Custom Breakpoints**: Additional `xs` (475px) breakpoint for fine-tuned mobile experience

## 🔄 Development Workflow

### Adding New Components

1. **Create component in appropriate directory**
```bash
# UI components
src/components/ui/NewComponent.tsx

# Dashboard components  
src/components/dashboard/NewFeature.tsx

# Layout components
src/components/layout/NewLayout.tsx
```

2. **Export from directory index**
```typescript
// src/components/ui/index.ts
export { default as NewComponent } from './NewComponent';
```

3. **Follow established patterns**
- Use TypeScript interfaces for props
- Implement responsive design with Tailwind
- Use the `cn()` utility for conditional classes
- Add proper error boundaries where needed

### Styling Guidelines

- **Use Tailwind CSS utility classes** for all styling
- **Follow the design system** colors and typography
- **Implement mobile-first** responsive design
- **Use `cn()` utility** for conditional styling:
```typescript
import { cn } from '@/utils/cn';

const buttonClass = cn(
  'base-button-classes',
  variant === 'primary' && 'primary-classes',
  disabled && 'disabled-classes'
);
```

### State Management

The project uses Redux Toolkit for state management:
- **Store configuration** in `src/store/`
- **Slices** for different feature domains (ready for implementation)
- **Typed hooks** for type-safe Redux usage

```typescript
// Future slice example
// src/store/slices/dashboardSlice.ts
import { createSlice } from '@reduxjs/toolkit';

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: { /* state */ },
  reducers: { /* reducers */ }
});
```

## 🎯 Key Features Implemented

### Dashboard Overview
- **Statistics Display**: Key performance indicators with visual cards
- **Data Tables**: Comprehensive tables for invoices and orders management
- **Navigation System**: Multi-page routing with intuitive sidebar navigation
- **Status Indicators**: Visual status dots for different application states
- **Responsive Layout**: Adaptive design that works across all device sizes

### Component Architecture
- **Modular Design**: Reusable components following single responsibility principle
- **TypeScript Integration**: Full type safety throughout the application
- **Error Boundaries**: Robust error handling to prevent application crashes
- **Consistent Styling**: Unified design system with Tailwind CSS utilities

### Technical Implementation
- **Modern React**: Latest React 19 with concurrent features and modern hooks
- **Build Optimization**: Vite with Rolldown for ultra-fast development and builds
- **Code Quality**: ESLint configuration with React and TypeScript rules
- **Development Experience**: Hot module replacement and fast refresh

## 📊 Dashboard Pages

The application includes multiple dashboard pages:

1. **Homepage** - Main dashboard with statistics and overview
2. **Analytics** - Data analysis and reporting (ready for implementation)
3. **Calendar** - Schedule and event management
4. **Documents** - Document management system
5. **Tasks** - Task tracking and management
6. **Users** - User management and administration
7. **Settings** - Application configuration
8. **Profile** - User profile management
9. **Mail** - Email management interface
10. **Help** - Help and support documentation
11. **Box** - File storage and management
12. **Folder** - Folder organization system

## 🌍 Environment Variables

Copy `.env.example` to `.env` and configure:

```env
# API Configuration
VITE_API_BASE_URL=http://localhost:3000/api

# Application Settings
VITE_APP_NAME=Uniqus Dashboard
VITE_APP_VERSION=1.0.0

# Development Settings
VITE_DEV_MODE=true
```

### Environment Variable Usage
- **`VITE_API_BASE_URL`**: Base URL for API calls (when implemented)
- **`VITE_APP_NAME`**: Application name displayed in UI
- **`VITE_APP_VERSION`**: Version number for about/info sections
- **`VITE_DEV_MODE`**: Enable development-specific features

## 🔮 Future Enhancements

### Immediate Roadmap
- **API Integration**: Connect components to real backend services
- **State Management**: Implement Redux slices for complex state
- **Authentication**: Add user authentication and authorization
- **Data Visualization**: Integrate Chart.js for dashboard analytics
- **Form Handling**: Add form validation and submission logic

### Medium-term Goals
- **Real-time Updates**: WebSocket integration for live data
- **Advanced Filtering**: Enhanced search and filter capabilities
- **Export Functionality**: PDF and CSV export for data tables
- **Notification System**: Toast notifications and alert management
- **Theme System**: Dark mode and customizable themes

### Long-term Vision
- **Micro-frontend Architecture**: Modular application structure
- **Advanced Analytics**: Machine learning insights and predictions
- **Mobile App**: React Native companion application
- **Plugin System**: Extensible architecture for third-party integrations
- **Multi-tenant Support**: SaaS-ready multi-organization support

## 🧪 Testing Strategy

### Current State
- **Error Boundaries**: Basic error handling implemented
- **TypeScript**: Compile-time error prevention
- **ESLint**: Code quality and consistency checks

### Recommended Testing Approach
```bash
# Install testing dependencies
npm install --save-dev @testing-library/react @testing-library/jest-dom vitest jsdom

# Component testing
npm install --save-dev @testing-library/user-event

# E2E testing  
npm install --save-dev playwright
```

### Testing Structure
```
src/
├── __tests__/              # Test files
│   ├── components/         # Component tests
│   ├── hooks/             # Hook tests
│   ├── utils/             # Utility tests
│   └── pages/             # Page tests
└── test-utils/            # Testing utilities
```

## 🤝 Contributing

### Development Guidelines
1. **Follow the established code style** and component patterns
2. **Write meaningful commit messages** using conventional commits
3. **Add TypeScript types** for all new features and components
4. **Test components thoroughly** before submitting PRs
5. **Update documentation** for any new features or changes

### Code Style
- Use **functional components** with hooks
- Implement **proper TypeScript typing**
- Follow **ESLint rules** and fix all warnings
- Use **Tailwind CSS** for all styling
- Maintain **consistent file naming** (PascalCase for components)

### Pull Request Process
1. Create feature branch from `main`
2. Implement changes with proper testing
3. Update documentation if needed
4. Ensure all linting passes
5. Submit PR with clear description

---

Built with ❤️ using modern React, TypeScript, and Tailwind CSS best practices.