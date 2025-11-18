import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import RoutePlanner from '@components/RoutePlanner';
import RestrictionFeed from '@components/RestrictionFeed';
import ServiceTiles from '@components/ServiceTiles';
import SafetyChecklist from '@components/SafetyChecklist';

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.hero}>
          <Text style={styles.tag}>Nederland</Text>
          <Text style={styles.title}>Microcar navigatie</Text>
          <Text style={styles.subtitle}>
            Routes met lage snelheidslimieten, escort-lanes en weerbewaking voor stads microcars.
          </Text>
        </View>
        <RoutePlanner />
        <RestrictionFeed />
        <ServiceTiles />
        <SafetyChecklist />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#031523'
  },
  scroll: {
    padding: 20
  },
  hero: {
    backgroundColor: '#052036',
    borderRadius: 20,
    padding: 24,
    marginBottom: 12
  },
  tag: {
    color: '#70E2FF',
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 1
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#FFFFFF',
    marginTop: 8
  },
  subtitle: {
    color: '#B7C9D4',
    marginTop: 4,
    fontSize: 15
  }
});

export default App;
