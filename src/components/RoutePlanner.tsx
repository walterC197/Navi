import React, { useMemo, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';
import { hubs, routeOptions, MobilitySegment } from '@data/routes';
import { formatDistance, formatDuration } from '@utils/formatting';
import usePersistentPreference from '@hooks/usePersistentPreference';

const vehicleSegments: Array<{ value: MobilitySegment; label: string }> = [
  { value: 'microcar', label: 'Microcar (45 km/h)' },
  { value: 'cargo-quadricycle', label: 'Cargo quadricycle' },
  { value: 'city-pod', label: 'Autonomous pod' }
];

const RoutePlanner = () => {
  const [originId, setOriginId] = useState(hubs[0]?.id ?? '');
  const [destinationId, setDestinationId] = useState(hubs[1]?.id ?? '');
  const vehiclePref = usePersistentPreference<MobilitySegment>('vehicle-segment', 'microcar');

  const availableRoutes = useMemo(() => {
    return routeOptions.filter(
      (route) => route.originId === originId && route.destinationId === destinationId
    );
  }, [originId, destinationId]);

  const selectedRoute = useMemo(() => {
    return availableRoutes.find((route) =>
      route.allowedVehicleClasses.includes(vehiclePref.value)
    );
  }, [availableRoutes, vehiclePref.value]);

  const activeRoute = selectedRoute ?? availableRoutes[0];

  return (
    <View style={styles.card}>
      <Text style={styles.heading}>Stel rit samen</Text>
      <View style={styles.pickerRow}>
        <Text style={styles.label}>Vertrek</Text>
        <Picker
          selectedValue={originId}
          onValueChange={(val) => {
            setOriginId(String(val));
          }}
        >
          {hubs.map((hub) => (
            <Picker.Item key={hub.id} label={`${hub.municipality} · ${hub.name}`} value={hub.id} />
          ))}
        </Picker>
      </View>

      <View style={styles.pickerRow}>
        <Text style={styles.label}>Aankomst</Text>
        <Picker
          selectedValue={destinationId}
          onValueChange={(val) => {
            setDestinationId(String(val));
          }}
        >
          {hubs
            .filter((hub) => hub.id !== originId)
            .map((hub) => (
              <Picker.Item
                key={hub.id}
                label={`${hub.municipality} · ${hub.name}`}
                value={hub.id}
              />
            ))}
        </Picker>
      </View>

      <View style={styles.pickerRow}>
        <Text style={styles.label}>Voertuig</Text>
        <Picker
          selectedValue={vehiclePref.value}
          onValueChange={(val) => vehiclePref.setValue(val as MobilitySegment)}
        >
          {vehicleSegments.map((segment) => (
            <Picker.Item key={segment.value} label={segment.label} value={segment.value} />
          ))}
        </Picker>
      </View>

      {activeRoute ? (
        <View style={styles.summary}>
          <Text style={styles.routeTitle}>{activeRoute.label}</Text>
          <View style={styles.statsRow}>
            <StatChip icon="speedometer" label={formatDistance(activeRoute.distanceKm)} />
            <StatChip icon="time" label={formatDuration(activeRoute.durationMin)} />
            <StatChip icon="pulse" label={`${activeRoute.averageSpeed} km/h avg`} />
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Hoogtepunten</Text>
            {activeRoute.highlights.map((text) => (
              <Text key={text} style={styles.listItem}>
                • {text}
              </Text>
            ))}
          </View>
          {!!activeRoute.restrictions.length && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Beperkingen</Text>
              {activeRoute.restrictions.map((text) => (
                <Text key={text} style={styles.warning}>
                  {text}
                </Text>
              ))}
            </View>
          )}
          {!!activeRoute.recommendedChargeStops.length && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Laadadvies</Text>
              {activeRoute.recommendedChargeStops.map((stop) => (
                <Text key={stop} style={styles.listItem}>
                  • {stop}
                </Text>
              ))}
            </View>
          )}
        </View>
      ) : (
        <View style={styles.emptyState}>
          <Text style={styles.emptyTitle}>Geen microcar-geschikte route</Text>
          <Text style={styles.emptyText}>
            Pas bestemming of voertuigsegment aan. Dit traject vereist gemeentelijke ontheffing.
          </Text>
        </View>
      )}
    </View>
  );
};

const StatChip = ({ icon, label }: { icon: keyof typeof Ionicons.glyphMap; label: string }) => (
  <View style={styles.chip}>
    <Ionicons name={icon} size={16} color="#0B3C49" />
    <Text style={styles.chipText}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F7FBFD',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16
  },
  heading: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 12,
    color: '#072236'
  },
  pickerRow: {
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#D7E3EA',
    borderRadius: 12,
    paddingHorizontal: 8
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
    color: '#4B6672',
    marginTop: 8
  },
  summary: {
    marginTop: 8
  },
  routeTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0B3C49',
    marginBottom: 8
  },
  statsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E1F4FF',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    marginRight: 8,
    marginTop: 6
  },
  chipText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#0B3C49'
  },
  section: {
    marginTop: 12
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#223C4E',
    marginBottom: 4
  },
  listItem: {
    fontSize: 13,
    color: '#113345',
    marginBottom: 2
  },
  warning: {
    fontSize: 13,
    color: '#8A1C1C',
    backgroundColor: '#FCE8E6',
    padding: 6,
    borderRadius: 8,
    marginBottom: 4
  },
  emptyState: {
    marginTop: 12,
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#FFF4E5'
  },
  emptyTitle: {
    fontWeight: '700',
    color: '#8D4A05',
    marginBottom: 4
  },
  emptyText: {
    color: '#7A5A41'
  }
});

export default RoutePlanner;
