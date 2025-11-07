# WebGlow

## Overview

WebGlow is a comprehensive business website for a web design and social media management service targeting local businesses and MSMEs (Micro, Small, and Medium Enterprises). The application features a modern, professionally designed landing page with dual dark/light mode themes and signature aqua glow effects. The site showcases services, displays a portfolio of past projects, features client testimonials, provides an interactive pricing calculator, and includes a simplified email-only contact section.

## Recent Changes

**November 7, 2025 - Replit Environment Setup and Portfolio Update**:
- Successfully imported GitHub project and configured for Replit
- Installed all dependencies (560 npm packages)
- Set up development workflow running on port 5000
- Configured deployment for autoscale target
- Added .gitignore for Node.js project
- Frontend server properly configured with allowedHosts: true for Replit proxy
- Project is now fully functional in Replit environment
- Updated Swaaddesh restaurant portfolio project with live URL and enhanced description
- Replaced static portfolio screenshots with live website previews in iframe cards
- Added security protections to iframes (sandbox attributes and referrer policy)
- Optimized iframe previews with proper scaling (1280x720 at 28% scale) for professional appearance
- Hidden scrollbars in previews for cleaner look (scrolling="no" and overflow hidden)

**November 6, 2025 - Logo Integration and Brand Color Update**:
- Integrated business logo throughout the website:
  - Created header component with logo and navigation menu
  - Added logo to footer
  - Updated favicon with business logo
  - Logo asset properly placed in `client/public/` for production compatibility
- Updated entire color scheme to match logo colors:
  - Primary color: Blue from logo (hsl(209, 60%, 42%) light / hsl(209, 70%, 60%) dark)
  - Secondary color: Orange from logo (hsl(32, 90%, 58%))
  - Applied colors consistently across all components
  - Updated glow effects to use logo colors
  - Added orange accent glow effect for growth-focused elements
- Enhanced hero section with dual-color branding (blue + orange)
- Created sticky header with smooth-scroll navigation
- Configured for Replit environment with allowedHosts and proper port settings

**Earlier (November 6, 2025)**:
- Removed contact form submission system (no longer uses `/api/leads` endpoint or Nodemailer)
- Removed WhatsApp contact option
- Redesigned contact section with email-only display featuring:
  - Prominent email button with hover animation
  - Three benefit badges (24-Hour Response, Free Consultation, Custom Quote)
  - Enhanced visual design with gradient card and glow effects
  - More effective and convincing layout for lead conversion

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript running on Vite as the build tool and development server.

**Routing**: Wouter (lightweight client-side routing) - currently configured with a single home route and a 404 page.

**UI Component Library**: Shadcn/ui components built on Radix UI primitives. The design system uses the "new-york" style variant with full dark/light mode support.

**Styling**: Tailwind CSS with custom design tokens defined in CSS variables. The application supports both light and dark themes with a ThemeProvider context. Custom utility classes include `glow-border`, `glow-text`, `hover-elevate`, and `active-elevate-2` for the signature WebGlow aesthetic.

**State Management**: TanStack Query (React Query) for server state management and data fetching. No global client state management library is used.

**Design System**: 
- Typography: Google Fonts "Outfit" (300, 400, 500, 600, 700 weights)
- Logo: Business logo integrated in header and footer (`client/public/logo.png`)
- Color scheme (extracted from business logo):
  - Primary: Professional blue (hsl(209, 60%, 42%) light mode / hsl(209, 70%, 60%) dark mode)
  - Secondary: Growth orange (hsl(32, 90%, 58%))
  - Background: Dark mode primary (#0a0a0a) / White light mode
  - Glow effects: Blue and orange glows matching logo palette
- Spacing: Tailwind's standard spacing scale
- Custom border radius values: lg (9px), md (6px), sm (3px)
- Custom utility classes: `glow-border`, `glow-text`, `glow-orange`, `glow-border-strong`, `hover-elevate`, `active-elevate-2`

**Page Structure**: Single-page application with sticky header navigation and sections for Hero, Services (with Pricing Calculator), Portfolio, Client Testimonials, Why Choose Us, Contact (email-only display with benefits), and Footer component.

### Backend Architecture

**Server**: Express.js running on Node.js with TypeScript (ESM modules).

**API Design**: RESTful API with the following endpoints:
- `GET /api/portfolio` - Fetch all portfolio projects
- `GET /api/portfolio/:id` - Fetch a single project by ID
- `GET /api/testimonials` - Fetch all client testimonials

Note: The `/api/leads` endpoint exists in the backend but is no longer used by the frontend. Contact is now handled through direct email (mailto link).

**Development Setup**: Vite middleware integration for HMR (Hot Module Replacement) in development mode. Production builds bundle the server separately using esbuild.

**Data Layer**: Using in-memory storage (`MemStorage` class) with pre-seeded data for portfolio projects and testimonials. The application uses a simplified email contact approach (mailto links) instead of a backend form submission system. The architecture includes an `IStorage` interface to allow for PostgreSQL database implementation for portfolio and testimonials if needed.

**Schema Definition**: Drizzle ORM is configured for PostgreSQL with schema definitions in `shared/schema.ts`. The schema includes:
- Users table (id, username, password)
- Portfolio projects (id, title, description, category, image, liveUrl)
- Leads table (id, name, email, phone, businessName, service, message, createdAt)
- Testimonials table (id, name, business, role, content, rating, image, createdAt)

Current implementation uses in-memory storage for rapid development. Database migration can be performed using `npm run db:push` when persistent storage is required.

### Design Patterns

**Component Architecture**: Functional components with hooks. Custom hooks include `useToast`, `useIsMobile`, and `useTheme`.

**Code Organization**:
- `/client` - All frontend code
- `/server` - Express server and API routes
- `/shared` - Shared TypeScript types and schemas between client/server
- `/attached_assets` - Static assets and generated images

**Type Safety**: Full TypeScript implementation with path aliases configured (`@/` for client, `@shared/` for shared code, `@assets/` for assets).

**Separation of Concerns**: UI components are isolated from business logic. Page components compose smaller feature components (HeroSection, ServicesSection, etc.).

## External Dependencies

### Primary Frontend Libraries
- **React 18** - UI framework
- **Wouter** - Lightweight client-side routing
- **Shadcn/ui + Radix UI** - Comprehensive component library with accessibility primitives
- **TanStack Query** - Server state management and data fetching
- **Tailwind CSS** - Utility-first CSS framework
- **Class Variance Authority** - Variant-based component styling
- **React Hook Form** - Form state management
- **Zod** - Schema validation

### Primary Backend Libraries
- **Express** - Web server framework
- **Drizzle ORM** - TypeScript ORM for PostgreSQL
- **@neondatabase/serverless** - PostgreSQL driver for serverless environments

Note: Nodemailer is installed but no longer actively used since contact form was replaced with mailto links.
- **connect-pg-simple** - PostgreSQL session store (installed but not actively used)

### Build Tools
- **Vite** - Build tool and dev server
- **esbuild** - JavaScript bundler for production server build
- **TypeScript** - Type system
- **PostCSS + Autoprefixer** - CSS processing

### Development Tools
- **@replit/vite-plugin-runtime-error-modal** - Runtime error overlay
- **@replit/vite-plugin-cartographer** - Development tooling (Replit-specific)
- **@replit/vite-plugin-dev-banner** - Development banner (Replit-specific)

### Database
**Configured but not yet active**: PostgreSQL via Neon Database serverless driver. The application currently uses in-memory storage with the ability to migrate to PostgreSQL by implementing the database storage class and running `npm run db:push` to sync the Drizzle schema.

### Third-Party Services (Configured for Production)
- **Email**: Yahoo Mail via Nodemailer for contact form submissions (requires MY_EMAIL and MY_EMAIL_PASS environment variables)
- **WhatsApp**: Contact integration via wa.me links
- **Asset Storage**: Portfolio images stored in `/attached_assets/generated_images/`

### Notable Architectural Decisions

**Why in-memory storage**: Allows for rapid prototyping and deployment without database provisioning. The `IStorage` interface pattern makes it trivial to swap in a database implementation later.

**Why Drizzle ORM**: Type-safe database queries with excellent TypeScript integration and support for PostgreSQL.

**Why Shadcn/ui over other component libraries**: Provides full component source code (not an npm package), allowing complete customization while maintaining accessibility standards through Radix UI primitives.

**Why Wouter over React Router**: Significantly smaller bundle size (~1.2KB vs 25KB+) suitable for a simple landing page with minimal routing needs.

**Why dark mode by default**: Aligns with the "WebGlow" brand identity and modern SaaS aesthetics referenced in the design guidelines.