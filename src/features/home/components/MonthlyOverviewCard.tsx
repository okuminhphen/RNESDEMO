import { CalendarDays, Clock3, Leaf, TriangleAlert } from 'lucide-react-native';
import { StyleSheet, Text, View } from 'react-native';

import { AppCard, IconBadge, SectionHeader } from '@/shared/components';
import { colors, radius, spacing, typography } from '@/shared/theme';

import { overviewStats } from '../data/home.mock';
import type { OverviewIcon } from '../types/home.types';

const overviewIcons = {
  work: CalendarDays,
  leave: Leaf,
  late: Clock3,
  'missing-work': TriangleAlert,
} satisfies Record<OverviewIcon, typeof CalendarDays>;

export function MonthlyOverviewCard() {
  return (
    <AppCard style={styles.card} variant="soft">
      <SectionHeader actionLabel="Xem chi tiết" title="Công tháng 9/2025" />
      <View style={styles.stats}>
        {overviewStats.map((stat, index) => {
          const Icon = overviewIcons[stat.icon];

          return (
            <View key={stat.id} style={[styles.stat, index > 0 && styles.statDivider]}>
              <IconBadge backgroundColor={stat.backgroundColor} size={28}>
                <Icon color={stat.color} size={18} strokeWidth={2.2} />
              </IconBadge>
              <Text numberOfLines={1} style={[styles.value, (stat.icon === 'late' || stat.icon === 'missing-work') && styles.alertValue]}>{stat.value}</Text>
              <Text numberOfLines={2} style={styles.label}>{stat.label}</Text>
            </View>
          );
        })}
      </View>
      <View style={styles.progressRow}>
        <View style={styles.progressTrack}>
          <View style={styles.progressValue} />
        </View>
        <Text style={styles.progressText}>18/22 công</Text>
      </View>
    </AppCard>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
  },
  stats: {
    flexDirection: 'row',
    marginTop: spacing.xs,
  },
  stat: {
    alignItems: 'center',
    flex: 1,
    minWidth: 0,
    paddingHorizontal: spacing.xs,
  },
  statDivider: {
    borderLeftColor: colors.border,
    borderLeftWidth: 1,
  },
  value: {
    color: colors.text,
    fontSize: 20,
    fontWeight: '800',
    marginTop: spacing.xs,
  },
  alertValue: {
    color: colors.red,
  },
  label: {
    color: colors.textSecondary,
    fontSize: 10,
    lineHeight: 12,
    marginTop: 1,
    textAlign: 'center',
  },
  progressRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.md,
    marginTop: 6,
  },
  progressTrack: {
    backgroundColor: colors.border,
    borderRadius: radius.pill,
    flex: 1,
    height: 7,
    overflow: 'hidden',
  },
  progressValue: {
    backgroundColor: colors.success,
    borderRadius: radius.pill,
    height: '100%',
    width: '82%',
  },
  progressText: {
    color: colors.textSecondary,
    fontSize: 11,
    fontWeight: '700',
  },
});
