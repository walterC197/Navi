import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const checklistItems = [
  {
    id: 'badge',
    title: 'Gemeentelijke ontheffing zichtbaar',
    detail: 'QR badge scannen voor vertrek'
  },
  {
    id: 'battery',
    title: 'Accu boven 60%',
    detail: 'Minimaal 25 km buffer verplicht bij regen'
  },
  {
    id: 'telematics',
    title: 'Telematica gedeeld',
    detail: 'Live positie gedeeld met dispatch'
  },
  {
    id: 'cargo',
    title: 'Lading gezekerd',
    detail: 'Max 150 kg, zwaartepunt onder 40 cm'
  }
];

const SafetyChecklist = () => {
  const [completed, setCompleted] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setCompleted((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <View style={styles.card}>
      <Text style={styles.heading}>Rit gereed?</Text>
      {checklistItems.map((item) => {
        const done = completed[item.id];
        return (
          <Pressable
            key={item.id}
            onPress={() => toggleItem(item.id)}
            style={[styles.row, done && styles.rowDone]}
          >
            <View style={styles.iconCircle}>
              <Ionicons
                name={done ? 'checkmark-circle' : 'ellipse-outline'}
                size={22}
                color={done ? '#1E7A3F' : '#8A9AA4'}
              />
            </View>
            <View style={styles.textBlock}>
              <Text style={[styles.title, done && styles.titleDone]}>{item.title}</Text>
              <Text style={styles.detail}>{item.detail}</Text>
            </View>
          </Pressable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 18,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#E5EDF3'
  },
  heading: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0B2F44',
    marginBottom: 12
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F4F8',
    alignItems: 'center'
  },
  rowDone: {
    backgroundColor: '#F1FBF4'
  },
  iconCircle: {
    width: 36,
    alignItems: 'center'
  },
  textBlock: {
    flex: 1
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1B3A4B'
  },
  titleDone: {
    textDecorationLine: 'line-through',
    color: '#459A4F'
  },
  detail: {
    fontSize: 12,
    color: '#5C7282'
  }
});

export default SafetyChecklist;
