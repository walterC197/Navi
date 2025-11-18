export type MobilitySegment = 'microcar' | 'cargo-quadricycle' | 'city-pod';

export interface MicrocarHub {
  id: string;
  name: string;
  municipality: string;
  lat: number;
  lon: number;
  facilities: string[];
}

export interface RouteOption {
  id: string;
  label: string;
  originId: string;
  destinationId: string;
  distanceKm: number;
  durationMin: number;
  averageSpeed: number;
  surfaces: Array<'asphalt' | 'cobble' | 'fietspad'>;
  carOnlySegments: string[];
  highlights: string[];
  recommendedChargeStops: string[];
  allowedVehicleClasses: MobilitySegment[];
  restrictions: string[];
  avoids: string[];
  mapPolyline: Array<[number, number]>;
}

export const hubs: MicrocarHub[] = [
  {
    id: 'adam-jordaan',
    name: 'Jordaan launch point',
    municipality: 'Amsterdam',
    lat: 52.3756,
    lon: 4.8857,
    facilities: ['microcar bays', 'slow-charge', 'covered parking']
  },
  {
    id: 'adam-zuid',
    name: 'Zuidas transfer hub',
    municipality: 'Amsterdam',
    lat: 52.3372,
    lon: 4.872,
    facilities: ['ultra-compact parking', 'battery swap']
  },
  {
    id: 'rotterdam-harbor',
    name: 'Merwehaven proving loop',
    municipality: 'Rotterdam',
    lat: 51.9125,
    lon: 4.4282,
    facilities: ['tidal warning', 'day lockers']
  },
  {
    id: 'utrecht-station',
    name: 'Utrecht Centraal micro-mobility plaza',
    municipality: 'Utrecht',
    lat: 52.0897,
    lon: 5.1103,
    facilities: ['inductive charge', '24h attendant']
  },
  {
    id: 'groningen-campus',
    name: 'Zernike campus hub',
    municipality: 'Groningen',
    lat: 53.2421,
    lon: 6.535,
    facilities: ['winter plugs', 'heated lockups']
  }
];

export const routeOptions: RouteOption[] = [
  {
    id: 'adam-canal-loop',
    label: 'Amsterdam inner canal loop',
    originId: 'adam-jordaan',
    destinationId: 'adam-zuid',
    distanceKm: 8.4,
    durationMin: 26,
    averageSpeed: 18,
    surfaces: ['asphalt', 'cobble'],
    carOnlySegments: ['Prinsengracht (07:00-11:00 city logistics)'],
    highlights: [
      'Shared canal-side ribbon with 30 km/h ceiling',
      'Priority microcar phase at Spiegelgracht signal',
      'Cultural corridor with tourist-density telemetry'
    ],
    recommendedChargeStops: ['Museumplein curb pods'],
    allowedVehicleClasses: ['microcar', 'city-pod'],
    restrictions: ['No access during King’s Day fencing'],
    avoids: ['Rokin tram works'],
    mapPolyline: [
      [52.3756, 4.8857],
      [52.3669, 4.8833],
      [52.3605, 4.8852],
      [52.351, 4.881]
    ]
  },
  {
    id: 'utrecht-green-spine',
    label: 'Utrecht green spine',
    originId: 'utrecht-station',
    destinationId: 'adam-zuid',
    distanceKm: 34.2,
    durationMin: 82,
    averageSpeed: 25,
    surfaces: ['asphalt', 'fietspad'],
    carOnlySegments: ['A2 shoulder service lane (microcars allowed 23:00-05:00)'],
    highlights: [
      'A12 parallel bi-directional service road',
      'Smart berm with aquifer-sensor detours',
      'Autonomous air pollution beacons synced to HUD feed'
    ],
    recommendedChargeStops: ['Breukelen service nest'],
    allowedVehicleClasses: ['microcar', 'cargo-quadricycle'],
    restrictions: ['Storm alert triggers canal overrun detour'],
    avoids: ['Leidsche Rijn weekend market closures'],
    mapPolyline: [
      [52.0897, 5.1103],
      [52.1381, 5.005],
      [52.1949, 4.951],
      [52.3372, 4.872]
    ]
  },
  {
    id: 'rotterdam-harbor-ring',
    label: 'Rotterdam harbor resilience ring',
    originId: 'rotterdam-harbor',
    destinationId: 'rotterdam-harbor',
    distanceKm: 17.8,
    durationMin: 44,
    averageSpeed: 24,
    surfaces: ['asphalt'],
    carOnlySegments: ['Dockyard fire corridors (blue beacon override only)'],
    highlights: [
      'Quay-top cycle grade separated path',
      'Wind shear telemetry for gusts > 60 km/h',
      'Harbor master priority requests built-in'
    ],
    recommendedChargeStops: ['Merwehaven tide tower'],
    allowedVehicleClasses: ['microcar', 'cargo-quadricycle', 'city-pod'],
    restrictions: ['Salt spray reduces regen braking effectiveness'],
    avoids: ['Maas tunnel renovation'],
    mapPolyline: [
      [51.9125, 4.4282],
      [51.918, 4.444],
      [51.9042, 4.4578],
      [51.8987, 4.4241],
      [51.9125, 4.4282]
    ]
  },
  {
    id: 'groningen-campus-loop',
    label: 'Groningen frost-ready campus loop',
    originId: 'groningen-campus',
    destinationId: 'groningen-campus',
    distanceKm: 9.6,
    durationMin: 28,
    averageSpeed: 20,
    surfaces: ['asphalt', 'fietspad'],
    carOnlySegments: [],
    highlights: [
      'Heated path across ring canal bridge',
      'Shared priority with hydrogen shuttles',
      'Automatic studded-tire advisory feed'
    ],
    recommendedChargeStops: ['Zernike energy barn'],
    allowedVehicleClasses: ['microcar'],
    restrictions: ['Ice fog reduces lidar confidence'],
    avoids: ['City center pedestrian lockouts'],
    mapPolyline: [
      [53.2421, 6.535],
      [53.2457, 6.552],
      [53.2348, 6.5531],
      [53.2294, 6.5322],
      [53.2421, 6.535]
    ]
  }
];
