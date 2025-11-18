# Navi – NL Microcar Navigation

Navi is a mobile-first navigation experience tailored for Dutch microcars (45 km/h vehicles, cargo quadricycles, and autonomous pods). The app focuses on the realities of operating ultra-compact vehicles in Dutch cities: ceremonial closures, weather-driven detours, escort lanes, and charging logistics.

## Features

- Region-aware hero: highlights Dutch-specific navigation context.
- Route planner: curated microcar corridors between certified hubs with vehicle-segment filtering and charging advice.
- Restriction radar: real-time notices for municipal closures, wind alerts, and resurfacing works.
- Operational tiles: live snapshots for charging, parking, and weather windows.
- Safety checklist: tap-to-complete microcar preflight tailored to Dutch regulations.

## Getting started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the Expo development server:
   ```bash
   npm run start
   ```
3. Use the Expo Go app (iOS/Android) or an emulator to preview the UI.

> **Note:** The data in `src/data` is mocked to illustrate how microcar-specific rule sets can be surfaced. Hook these modules up to your telemetry, traffic, or municipal feeds to go live.

## Project structure

```
App.tsx                 // Entry point with hero layout and feature sections
src/
  components/           // UI building blocks (planner, feeds, checklist)
  data/                 // Hard-coded hubs, routes, and restrictions
  hooks/                // Shared state helpers (persistent preferences)
  utils/                // Formatting utilities
```

## Next steps

- Wire real municipal feeds (NDW, Rijkswaterstaat) into `restrictionFeed`.
- Replace mocked hubs with tippecanoe/Mapbox data for map overlays.
- Extend planner with elevation, weather, and battery-aware ETA adjustments.

Happy routing!
