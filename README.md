# OneWallet - Unified Multi-Chain Crypto Wallet Dashboard

A modern, unified dashboard for managing multiple blockchain wallets with multi-chain support for seamless DeFi experience.

## Features

- **Multi-Chain Support**: Connect and manage wallets across multiple blockchain networks
- **Asset Management**: Track your crypto portfolio with real-time prices and charts
- **Token Swapping**: Seamless token swaps with best rate aggregation
- **Bridge Functionality**: Cross-chain asset transfers
- **Transaction History**: Complete transaction tracking and analytics
- **Settings & Preferences**: Customizable user experience

## Tech Stack

This project is built with modern web technologies:

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Build Tool**: Vite for fast development and optimized builds
- **UI Components**: Radix UI primitives with custom styling
- **Blockchain Integration**: Wagmi for Ethereum interactions
- **State Management**: Zustand for global state
- **Backend**: Supabase for data persistence
- **Deployment**: Vercel with automatic deployments

## Getting Started

### Prerequisites
- Node.js 18+ and npm
- Git

### Installation

1. Clone the repository:
```bash
git clone <YOUR_GIT_URL>
cd onewallet
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:8080`

## Development

### Project Structure
```
src/
├── components/     # Reusable UI components
├── pages/         # Main application pages
├── hooks/         # Custom React hooks
├── stores/        # Zustand state stores
├── lib/           # Utility functions
├── types/         # TypeScript type definitions
└── integrations/  # External service integrations
```

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

### Code Quality
The project uses:
- ESLint for code linting
- TypeScript for type safety
- Prettier for code formatting (configure in your IDE)

## Deployment

The application can be deployed to various platforms:

### Vercel (Recommended)
1. Connect your repository to Vercel
2. Configure environment variables
3. Deploy automatically on push to main

### Manual Deployment
```bash
npm run build
# Deploy the dist/ folder to your hosting provider
```

## Environment Variables

Required environment variables:
- `VITE_SUPABASE_URL` - Supabase project URL
- `VITE_SUPABASE_PUBLISHABLE_KEY` - Supabase public API key
- `VITE_SUPABASE_PROJECT_ID` - Supabase project ID

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is proprietary software. All rights reserved.

## Support

For support and questions, please contact the development team.