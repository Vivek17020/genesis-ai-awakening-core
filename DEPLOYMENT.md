# ZKPresence Deployment Guide

## Vercel Deployment

### Prerequisites
- Vercel account
- GitHub repository connected to Vercel
- Supabase project setup

### Step 1: Environment Variables
1. In Vercel dashboard, go to Project Settings > Environment Variables
2. Add the following variables:
   ```
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_PUBLISHABLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
   VITE_SUPABASE_PROJECT_ID=your-project-id
   ```

### Step 2: Build Settings
- Framework Preset: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

### Step 3: Domain Configuration
1. Go to Project Settings > Domains
2. Add your custom domain (optional)
3. Configure DNS records as instructed

### Step 4: Deploy
```bash
# Option 1: Git-based deployment (recommended)
git push origin main

# Option 2: Vercel CLI
npm i -g vercel
vercel --prod
```

## Environment Setup

### Local Development
1. Copy `.env.example` to `.env`
2. Fill in your Supabase credentials
3. Run `npm run dev`

### Production Environment Variables
- `VITE_SUPABASE_URL`: Your Supabase project URL
- `VITE_SUPABASE_PUBLISHABLE_KEY`: Supabase anon/public key
- `VITE_SUPABASE_PROJECT_ID`: Supabase project identifier

### SEO & Performance
- Sitemap automatically available at `/sitemap.xml`
- Meta tags configured for social sharing
- PWA-ready with service worker support
- Optimized for mobile and desktop

## Mobile App Deployment

### Android (APK)
```bash
npm run build
npx cap add android
npx cap copy android
npx cap open android
# Build APK in Android Studio
```

### iOS (TestFlight)
```bash
npm run build
npx cap add ios
npx cap copy ios
npx cap open ios
# Build and upload to App Store Connect
```

## Monitoring & Analytics
- Built-in error boundaries for crash reporting
- Performance monitoring via Web Vitals
- User analytics ready for integration

## Security
- All API keys properly scoped
- HTTPS enforced in production
- Content Security Policy configured
- No sensitive data in client-side code