# LA GÓNDOLA - Medieval Clan Chronicles

## Overview

This is a full-stack web application for a fantasy-themed clan website called "LA GÓNDOLA". The application features a medieval-themed user interface that presents clan information, war chronicles, and member details in an immersive fantasy setting.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom medieval theming
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Connect-PG-Simple for PostgreSQL session storage
- **Development**: Hot reload with Vite middleware integration

### Key Components

#### Database Schema
- **Users Table**: Basic user management with id, username, and password fields
- **Schema Location**: `shared/schema.ts` with Drizzle ORM definitions
- **Validation**: Zod schemas for type-safe data validation

#### Storage Layer
- **Interface**: `IStorage` abstraction for CRUD operations
- **Implementation**: In-memory storage (`MemStorage`) for development
- **Methods**: User creation, retrieval by ID and username

#### UI Theme System
- **Medieval Styling**: Custom CSS classes for medieval aesthetics
- **Color Palette**: Amber, brown, and gold tones for authentic feel
- **Typography**: Cinzel fonts for medieval appearance
- **Components**: Custom `MedievalCard` component for consistent styling

#### Page Structure
- **Home**: Clan saga and lore presentation
- **Clan**: Member information and clan statistics
- **Wars**: Battle history and war chronicles
- **Layout**: Three-column design with left/right sidebars

## Data Flow

1. **Client Requests**: React components make API calls through TanStack Query
2. **API Routes**: Express.js handles requests with `/api` prefix
3. **Storage Layer**: Abstract storage interface handles data operations
4. **Database**: PostgreSQL via Drizzle ORM for production data
5. **Response**: JSON responses with error handling middleware

## External Dependencies

### Database
- **Neon Database**: Serverless PostgreSQL for production
- **Connection**: Environment variable `DATABASE_URL` required
- **Migrations**: Drizzle Kit handles schema migrations

### Frontend Libraries
- **Radix UI**: Accessible component primitives
- **TanStack Query**: Server state management and caching
- **Wouter**: Lightweight React router
- **Tailwind CSS**: Utility-first CSS framework
- **FontAwesome**: Icon library for medieval-themed icons

### Development Tools
- **Vite**: Fast development server and build tool
- **ESBuild**: Fast TypeScript compilation for production
- **TSX**: TypeScript execution for development server

## Deployment Strategy

### Development
- **Command**: `npm run dev`
- **Server**: Express with Vite middleware integration
- **Port**: 5000 (configurable)
- **Hot Reload**: Enabled for both client and server code

### Production Build
- **Client Build**: Vite builds React app to `dist/public`
- **Server Build**: ESBuild bundles server code to `dist/index.js`
- **Start Command**: `npm run start`

### Platform Configuration
- **Replit**: Configured for autoscale deployment
- **Modules**: Node.js 20, Web, PostgreSQL 16
- **Port Mapping**: Internal 5000 to external 80

### Database Setup
- **Push Schema**: `npm run db:push` applies schema changes
- **Migrations**: Stored in `./migrations` directory
- **Configuration**: `drizzle.config.ts` manages database connection

## Changelog

- June 24, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.