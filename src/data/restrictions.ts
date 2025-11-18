export type RestrictionSeverity = 'info' | 'advisory' | 'critical';

export interface RestrictionNotice {
  id: string;
  city: string;
  status: 'active' | 'planned';
  severity: RestrictionSeverity;
  effectiveDate: string;
  summary: string;
  impact: string;
  detourAdvice: string;
  microcarOnly?: boolean;
}

export const restrictionFeed: RestrictionNotice[] = [
  {
    id: 'adam-innersingel-closure',
    city: 'Amsterdam',
    status: 'active',
    severity: 'critical',
    effectiveDate: '2025-11-17T05:00:00+01:00',
    summary: 'Inner Singel closed to combustion traffic, microcars allowed in escort lane.',
    impact: 'Expect 12 min delay near Leidseplein while wardens meter access.',
    detourAdvice: 'Use Spiegelgracht > Weteringschans priority ribbon with active transponder.',
    microcarOnly: true
  },
  {
    id: 'rotterdam-maas-wind',
    city: 'Rotterdam',
    status: 'active',
    severity: 'advisory',
    effectiveDate: '2025-11-18T00:00:00+01:00',
    summary: 'Gale-force crosswinds predicted along Merwehaven quay.',
    impact: 'Limit top speed to 22 km/h, gust cut-outs on exposed deck.',
    detourAdvice: 'Route through Mathenesserbrug inland buffer if roof rack is loaded.'
  },
  {
    id: 'utrecht-canal-works',
    city: 'Utrecht',
    status: 'planned',
    severity: 'info',
    effectiveDate: '2025-12-01T06:00:00+01:00',
    summary: 'Weerdsingel microcar path resurfacing.',
    impact: 'Night closures, escort vehicles available on request.',
    detourAdvice: 'Book slot via gemeente portal for berth-to-berth guidance.'
  }
];
