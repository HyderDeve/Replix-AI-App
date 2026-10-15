# Replix AI App

A mobile app built with [Expo](https://expo.dev) and React Native.

## Tech stack

- Expo SDK 57 with [Expo Router](https://docs.expo.dev/router/introduction) (file-based routing)
- NativeWind v5 / Tailwind CSS v4
- React Native Reanimated, Gesture Handler, Screens
- Stripe React Native

## Prerequisites

- [Bun](https://bun.sh)
- [Expo Go](https://expo.dev/go) installed on your iOS or Android device
- Your phone and computer on the same Wi-Fi network

## Getting started

1. Install dependencies

   ```bash
   bun install
   ```

2. Start the dev server

   ```bash
   bunx expo start
   ```

3. Open the app in Expo Go
   - **Android:** open Expo Go and scan the QR code.
   - **iOS:** scan the QR code with the Camera app, then open it in Expo Go.

## Development environment

This project is developed with **Expo Go only**. Don't use development builds, Android emulators or iOS simulators.

> Expo Go only bundles a fixed set of native modules. Libraries with custom native code, such as `@stripe/stripe-react-native`, may not work inside Expo Go.

## Useful commands

```bash
bunx expo start              # start the dev server
bunx tsc --noEmit           # typecheck
bunx expo-doctor            # diagnose dependency and config issues
bunx expo install <package> # add a package (use this instead of `bun add`)
bunx expo install --fix     # fix incompatible package versions
```

Run lint and typecheck before committing.

## Project structure

- `src/app/` contains the routes. Every file is a screen, and `_layout.tsx` files define navigators.
- Keep non-route code (components, hooks, utils) outside `src/app/`.
