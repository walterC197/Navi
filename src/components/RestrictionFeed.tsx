import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { restrictionFeed, RestrictionNotice } from '@data/restrictions';
import { formatDateNl } from '@utils/formatting';

const severityMap: Record<
  RestrictionNotice['severity'],
  { background: string; text: string; icon: keyof typeof Ionicons.glyphMap }
> = {
  info: { background: '#E7F2FF', text: '#0C3C78', icon: 'information-circle' },
  advisory: { background: '#FFF4DD', text: '#8B5A00', icon: 'alert' },
  critical: { background: '#FCE8E6', text: '#962121', icon: 'warning' }
};

const RestrictionFeed = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.heading}>Regelgeving radar</Text>
      {restrictionFeed.map((notice) => {
        const palette = severityMap[notice.severity];
        return (
          <View key={notice.id} style={[styles.notice, { backgroundColor: palette.background }]}>
              <View style={styles.noticeHeader}>
                <View style={styles.cityRow}>
                  <Ionicons name="location" color={palette.text} size={16} />
                  <Text style={[styles.city, { color: palette.text }]}>{notice.city}</Text>
                  <View style={styles.statusPill}>
                    <Text style={styles.statusText}>{notice.status}</Text>
                  </View>
                </View>
              <Text style={styles.date}>{formatDateNl(notice.effectiveDate)}</Text>
            </View>
              <View style={styles.summaryRow}>
                <Ionicons name={palette.icon} color={palette.text} size={16} />
                <Text style={[styles.summary, { color: palette.text }]}>{notice.summary}</Text>
              </View>
            <Text style={styles.impact}>{notice.impact}</Text>
            <Text style={styles.detour}>{notice.detourAdvice}</Text>
            {notice.microcarOnly && <Text style={styles.badge}>Alleen microcars</Text>}
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#081F32',
    borderRadius: 18,
    padding: 20,
    marginBottom: 16
  },
  heading: {
    fontSize: 20,
    fontWeight: '600',
    color: '#F5FBFF',
    marginBottom: 12
  },
  notice: {
    borderRadius: 12,
    padding: 14,
    marginBottom: 12
  },
  noticeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6
  },
  cityRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  city: {
    fontWeight: '700',
    marginLeft: 6,
    marginRight: 6
  },
  statusPill: {
    backgroundColor: 'rgba(255,255,255,0.4)',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999
  },
  statusText: {
    fontSize: 11,
    color: '#081F32',
    fontWeight: '600',
    textTransform: 'uppercase'
  },
  date: {
    color: '#173652',
    fontSize: 12,
    fontWeight: '600'
  },
  summaryRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  summary: {
    fontWeight: '600',
    marginLeft: 6
  },
  impact: {
    color: '#183949',
    marginTop: 4
  },
  detour: {
    color: '#112733',
    marginTop: 4,
    fontStyle: 'italic'
  },
  badge: {
    marginTop: 6,
    alignSelf: 'flex-start',
    fontSize: 12,
    fontWeight: '700',
    color: '#081F32',
    backgroundColor: '#FFFFFF99',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8
  }
});

export default RestrictionFeed;
