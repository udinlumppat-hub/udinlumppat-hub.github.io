# BLOGUS - Classifieds Marketplace Platform

## Overview

BLOGUS is a UK-focused classifieds marketplace web application built with React and TypeScript. The platform enables users to browse, search, and post classified advertisements across multiple categories including Pets, Motors, Property, Jobs, Services, and more. The application features a modern, responsive design using shadcn/ui components and Tailwind CSS.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18.3.1** with TypeScript for type-safe component development
- **Vite** as the build tool and development server, configured for optimal performance with SWC for fast compilation
- **React Router** for client-side routing and navigation between pages

**Component System**
- **shadcn/ui** component library built on Radix UI primitives, providing accessible and customizable UI components
- **Tailwind CSS** for utility-first styling with custom design tokens
- Component architecture follows a modular pattern with reusable UI components in `/src/components/ui`
- Custom application components (Header, Footer, CategoryNav, AdCard) built on top of the base UI system

**State Management**
- **TanStack Query (React Query)** for server state management and data fetching
- Local component state using React hooks
- No global state management solution (Redux/Zustand) currently implemented

**Design System**
- HSL-based color system defined in CSS variables for theme consistency
- Responsive breakpoint system with mobile-first approach
- Custom design tokens for colors, spacing, typography defined in `tailwind.config.ts`
- Support for light/dark themes via `next-themes` package

**Routing Structure**
- Home page (`/`) - Featured listings and category navigation
- Category pages (`/category/:category`) - Filtered listings by category
- Ad detail page (`/ad/:id`) - Individual advertisement view
- User flows: Login, Signup, Post Ad
- Static pages: About, Contact, Pricing
- 404 Not Found page with error logging

**Form Handling**
- React Hook Form with Zod resolvers for form validation
- Custom form components built on Radix UI primitives

### Data Flow & Architecture Patterns

**Current Implementation**
- Static data rendering with hardcoded content for demonstration
- No backend API integration currently implemented
- Image assets stored locally in `/src/assets/`
- Category-based data structures organized by classification type

**Component Composition**
- Compound component pattern for complex UI elements (Carousel, Dialog, Dropdown)
- Composition over inheritance for component reusability
- Props-based customization with TypeScript interfaces

### External Dependencies

**UI Framework & Components**
- `@radix-ui/*` packages - Headless UI component primitives for accessibility
- `class-variance-authority` - Utility for managing component variants
- `tailwindcss` - Utility-first CSS framework
- `lucide-react` - Icon library

**Routing & Navigation**
- `react-router-dom` - Client-side routing with HashRouter for GitHub Pages compatibility

**Forms & Validation**
- `react-hook-form` - Form state management
- `@hookform/resolvers` - Validation schema integration
- `zod` (implied by resolver usage) - Schema validation

**Data Fetching**
- `@tanstack/react-query` - Server state management

**Utilities**
- `clsx` & `tailwind-merge` - Conditional CSS class composition
- `date-fns` - Date manipulation and formatting
- `embla-carousel-react` - Carousel/slider functionality
- `cmdk` - Command menu interface
- `react-day-picker` - Date picker component
- `input-otp` - OTP input handling
- `next-themes` - Theme management

**Development Tools**
- `vite` - Build tool and dev server
- `@vitejs/plugin-react-swc` - Fast React refresh with SWC
- `typescript-eslint` - TypeScript linting
- `gh-pages` - Deployment to GitHub Pages

**Monetization**
- Google AdSense integration configured in `index.html`
- Ad placement ready for production deployment

**SEO & Metadata**
- Open Graph tags for social sharing
- Twitter Card metadata
- Structured metadata in HTML head
- robots.txt for search engine crawling
- ads.txt for ad network verification

### Key Architectural Decisions

**TypeScript Configuration**
- Strict mode disabled (`strict: false`) for faster development
- Path aliases configured (`@/*` maps to `./src/*`)
- Module resolution set to "bundler" for optimal Vite compatibility

**Build & Deployment**
- Base path set to `/` for root deployment on GitHub Pages
- Vite configured with `host: 0.0.0.0` and `port: 5000` for Replit environment
- Development mode component tagging via `lovable-tagger` plugin
- GitHub Pages deployment configured via `gh-pages` package and GitHub Actions workflow
- Separate development and production build scripts
- GitHub Pages SPA routing configured:
  - HashRouter implementation for client-side routing compatibility
  - 404.html redirect handler for direct navigation support
  - .nojekyll file to prevent Jekyll processing
  - sessionStorage-based redirect script in index.html

**Accessibility & UX**
- Radix UI primitives ensure WCAG compliance
- Keyboard navigation support throughout
- ARIA attributes and semantic HTML
- Mobile-responsive design with touch-friendly interactions

**Performance Optimization**
- SWC-based React plugin for fast refresh
- Lazy loading potential via React Router (not currently implemented)
- Image optimization opportunities available
- Code splitting at route level possible but not configured

### Future Integration Points

**Backend Requirements** (Not Currently Implemented)
- User authentication system needed for Login/Signup flows
- Ad posting functionality requires API integration
- Search functionality needs backend search service
- Location-based filtering requires geolocation services
- Database schema for users, ads, categories, and messaging

**Recommended Enhancements**
- Implement real-time messaging between buyers and sellers
- Add image upload and storage service integration
- Implement payment processing for featured ads
- Add user profile and ad management dashboard
- Implement email notification system
- Add analytics and tracking integration