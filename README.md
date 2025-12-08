# E-Commerce Frontend

A modern e-commerce order management system built with Next.js 16, React 19, TypeScript, and Tailwind CSS.

## Features

- **Order Management**: Browse, search, create, edit, and delete orders
- **Product Selection**: Interactive product selection with quantity management
- **Responsive Design**: Mobile-first design with dedicated mobile and desktop views
- **Real-time Search**: Server-side order search functionality
- **Modern UI**: Built with Radix UI components and Tailwind CSS
- **Type Safety**: Full TypeScript support
- **Dark Mode**: Theme support with next-themes

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **HTTP Client**: [Axios](https://axios-http.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Notifications**: [Sonner](https://sonner.emilkowal.ski/)

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 20 or higher)
- [Yarn](https://yarnpkg.com/) package manager

To install Yarn if you don't have it:
```bash
npm install -g yarn
```

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd ecommerce-frontend
```

### 2. Install dependencies

```bash
yarn install
```

### 3. Configure environment variables

Create a `.env.local` file in the root directory:

```bash
NEXT_PUBLIC_API_BASE_URL=http://localhost:5000/api
```

Update the `NEXT_PUBLIC_API_BASE_URL` to match your backend API URL.

### 4. Run the development server

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

The page auto-updates as you edit files in the `src` directory.

## Available Scripts

- `yarn dev` - Start the development server on [http://localhost:3000](http://localhost:3000)
- `yarn build` - Build the application for production
- `yarn start` - Start the production server (requires `yarn build` first)
- `yarn lint` - Run ESLint to check code quality

## Project Structure

```
ecommerce-frontend/
├── src/
│   ├── app/                          # Next.js App Router pages
│   │   ├── order-management/         # Order management routes
│   │   │   ├── new-order/           # Create new order page
│   │   │   └── page.tsx             # Order list page
│   │   ├── layout.tsx               # Root layout
│   │   ├── page.tsx                 # Home page
│   │   └── globals.css              # Global styles
│   ├── components/
│   │   ├── features/                # Feature-specific components
│   │   │   ├── new-order/           # New order components
│   │   │   └── order-management/    # Order management components
│   │   └── ui/                      # Reusable UI components
│   ├── hooks/                       # Custom React hooks
│   ├── lib/
│   │   ├── api/                     # API client and endpoints
│   │   └── utils.ts                 # Utility functions
│   └── types/                       # TypeScript type definitions
├── public/                          # Static assets
├── .env.local                       # Environment variables (create this)
├── next.config.ts                   # Next.js configuration
├── tailwind.config.ts               # Tailwind CSS configuration
├── tsconfig.json                    # TypeScript configuration
└── package.json                     # Project dependencies
```

## Key Features

### Order Management
- View all orders in a paginated table (desktop) or card list (mobile)
- Search orders by customer name, email, or phone
- Create new orders with product selection
- Edit existing orders
- Delete orders with confirmation

### Order Creation
- Browse available products
- Add/remove products from order
- Real-time total calculation

## Development

The application uses:
- **Next.js App Router** for routing and layouts
- **React Server Components** for improved performance
- **Tailwind CSS** for utility-first styling
- **Radix UI** for accessible, unstyled component primitives
- **Custom hooks** for state management and data fetching

### Editing Pages

You can start editing any page by modifying files in the `src/app` directory. The page auto-updates as you edit the file.

### API Integration

The application communicates with a backend API. API client is configured in [src/lib/api/client.ts](src/lib/api/client.ts) and order-related endpoints are in [src/lib/api/orders.ts](src/lib/api/orders.ts).

## Building for Production

### Build the application

```bash
yarn build
```

### Start the production server

```bash
yarn start
```

The production build will be optimized for best performance.

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - interactive Next.js tutorial
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - utility-first CSS framework
- [Radix UI Documentation](https://www.radix-ui.com/docs) - accessible component primitives
- [TypeScript Documentation](https://www.typescriptlang.org/docs) - typed JavaScript

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## License

This project is private and proprietary.
