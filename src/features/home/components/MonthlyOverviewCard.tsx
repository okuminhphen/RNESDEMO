import { BriefcaseBusiness, CalendarDays, Leaf } from 'lucide-react-native';
import { StyleSheet, Text, View } from 'react-native';

import { AppCard, IconBadge, SectionHeader } from '@/shared/components';
import { colors, spacing, typography } from '@/shared/theme';

import { overviewStats } from '../data/home.mock';
import type { OverviewIcon } from '../types/home.types';

const overviewIcons = {
  work: BriefcaseBusiness,
  leave: Leaf,
  remaining: CalendarDays,
} satisfies Record<OverviewIcon, typeof CalendarDays>;

export function MonthlyOverviewCard() {
  return (
    <AppCard style={styles.card}>
      <SectionHeader actionLabel="Xem chi tiết" title="Tổng quan tháng 9/2025" />
      <View style={styles.stats}>
        {overviewStats.map((stat, index) => {
          const Icon = overviewIcons[stat.icon];

          return (
            <View key={stat.id} style={[styles.stat, index > 0 && styles.statDivider]}>
              <IconBadge backgroundColor={stat.backgroundColor} size={40}>
                <Icon color={stat.color} size={23} strokeWidth={2.2} />
              </IconBadge>
              <Text style={styles.value}>{stat.value}</Text>
              <Text style={styles.label}>{stat.label}</Text>
            </View>
          );
        })}
      </View>
    </AppCard>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: spacing.lg,
  },
  stats: {
    flexDirection: 'row',
    marginTop: spacing.xl,
  },
  stat: {
    alignItems: 'flex-start',
    flex: 1,
    minWidth: 0,
    paddingHorizontal: spacing.sm,
  },
  statDivider: {
    borderLeftColor: colors.border,
    borderLeftWidth: 1,
  },
  value: {
    color: colors.text,
    fontSize: 23,
    fontWeight: '800',
    marginTop: spacing.sm,
  },
  label: {
    color: colors.textSecondary,
    fontSize: 11,
    lineHeight: 16,
    marginTop: 1,
  },
});
