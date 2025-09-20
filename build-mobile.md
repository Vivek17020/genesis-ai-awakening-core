# Mobile Build Instructions for ZKPresence Festival

## Prerequisites
- Node.js 18+ installed
- Git installed
- For Android: Android Studio
- For iOS: macOS with Xcode

## Setup Instructions

1. **Export to GitHub & Clone**
   ```bash
   git clone [your-github-repo-url]
   cd zkpresence-festival
   npm install
   ```

2. **Add Mobile Platforms**
   ```bash
   npx cap add android
   npx cap add ios
   ```

3. **Build for Production**
   ```bash
   npm run build
   npx cap sync
   ```

4. **Android APK Build**
   ```bash
   npx cap run android
   # Or open in Android Studio:
   npx cap open android
   ```

5. **iOS TestFlight Build**
   ```bash
   npx cap run ios
   # Or open in Xcode:
   npx cap open ios
   ```

## Demo Mode Features
- ✅ Auto-generates 2 mock phones (Alice & Bob)
- ✅ Simulates ZK proof exchange between users
- ✅ Automated NFT minting flow
- ✅ One-click hackathon demonstration
- ✅ Production-ready mobile builds

## Distribution
- **Android**: Generate signed APK via Android Studio (Build > Generate Signed Bundle/APK)
- **iOS**: Archive and upload to TestFlight via Xcode (Product > Archive)

## Troubleshooting
- If build fails, ensure all dependencies are installed: `npm install`
- For mobile permissions, check `capacitor.config.ts` settings
- For splash screen issues, verify assets in `public/` folder

## Hackathon Ready! 🚀
Your ZKPresence Festival app is now ready for mobile demonstration with full demo mode capabilities.