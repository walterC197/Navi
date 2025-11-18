import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const serviceTiles = [
  {
    id: 'charging',
    title: 'Laadstatus Randstad',
    value: '72% beschikbaar',
    detail: '13 pods met vrije 3.7kW AC aansluitingen',
    icon: 'battery-charging'
  },
  {
    id: 'parking',
    title: 'Microcar parkeerhubs',
    value: '31 locaties live',
    detail: 'Laatste sync 45 sec geleden',
    icon: 'car-sport'
  },
  {
    id: 'weather',
    title: 'Weerwindow',
    value: 'Droog tot 17:45',
    detail: 'Windkracht 6 in Rotterdam, alert ingesteld',
    icon: 'cloudy'
  }
];

const ServiceTiles = () => {
  return (
    <View style={styles.wrapper}>
      {serviceTiles.map((tile) => (
        <View key={tile.id} style={styles.tile}>
          <View style={styles.iconCircle}>
            <Ionicons name={tile.icon as keyof typeof Ionicons.glyphMap} size={20} color="#0B3C49" />
          </View>
          <Text style={styles.title}>{tile.title}</Text>
          <Text style={styles.value}>{tile.value}</Text>
          <Text style={styles.detail}>{tile.detail}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  tile: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3
  },
  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#E1F4FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8
  },
  title: {
    fontSize: 13,
    color: '#5B6A74',
    textTransform: 'uppercase',
    letterSpacing: 0.8
  },
  value: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0B3C49',
    marginTop: 4
  },
  detail: {
    fontSize: 13,
    color: '#4B6170',
    marginTop: 2
  }
});

export default ServiceTiles;
