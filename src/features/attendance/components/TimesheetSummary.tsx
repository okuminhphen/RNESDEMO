import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Clock,
  Leaf,
  TriangleAlert,
} from 'lucide-react-native';
import { type DimensionValue, Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, radius, spacing, typography } from '@/shared/theme';

import type { TimesheetStat } from '../types/attendance.types';

const iconMap = {
  calendar: CalendarDays,
  leaf: Leaf,
  clock: Clock,
  warning: TriangleAlert,
} as const;

type TimesheetSummaryProps = {
  monthLabel: string;
  stats: TimesheetStat[];
  progress: { current: number; total: number };
  onPrevMonth?: () => void;
  onNextMonth?: () => void;
  hasPrevMonth?: boolean;
  hasNextMonth?: boolean;
};

function StatItem({ stat }: { stat: TimesheetStat }) {
  const Icon = iconMap[stat.icon];

  return (
    <View style={styles.stat}>
      <View style={[styles.statIcon, { backgroundColor: stat.backgroundColor }]}>
        <Icon color={stat.color} size={18} strokeWidth={2.2} />
      </View>
      <Text style={[styles.statValue, { color: stat.color }]}>{stat.value}</Text>
      <Text style={styles.statLabel}>{stat.label}</Text>
    </View>
  );
}

export function TimesheetSummary({
  monthLabel,
  stats,
  progress,
  onPrevMonth,
  onNextMonth,
  hasPrevMonth = true,
  hasNextMonth = true,
}: TimesheetSummaryProps) {
  const pct =
    progress.total > 0
      ? Math.min(100, Math.round((progress.current / progress.total) * 100))
      : 0;
  const fillWidth = `${pct}%` as DimensionValue;

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>{monthLabel}</Text>

        {/* Bộ điều hướng tháng: < Tháng 9/2025 > */}
        <View style={styles.monthSelector}>
          <Pressable
            accessibilityLabel="Tháng trước"
            accessibilityRole="button"
            disabled={!hasPrevMonth}
            hitSlop={9}
            onPress={onPrevMonth}
            style={[styles.arrowBtn, !hasPrevMonth && styles.disabledBtn]}
          >
            <ChevronLeft
              color={hasPrevMonth ? colors.textSecondary : colors.border}
              size={18}
              strokeWidth={2.4}
            />
          </Pressable>

          <Text style={styles.selectorLabel}>{monthLabel}</Text>

          <Pressable
            accessibilityLabel="Tháng sau"
            accessibilityRole="button"
            disabled={!hasNextMonth}
            hitSlop={9}
            onPress={onNextMonth}
            style={[styles.arrowBtn, !hasNextMonth && styles.disabledBtn]}
          >
            <ChevronRight
              color={hasNextMonth ? colors.textSecondary : colors.border}
              size={18}
              strokeWidth={2.4}
            />
          </Pressable>
        </View>
      </View>

      <View style={styles.statsRow}>
        {stats.map((s) => (
          <StatItem key={s.id} stat={s} />
        ))}
      </View>

      <View style={styles.progressRow}>
        <View style={styles.progressTrack}>
          <View style={[styles.progressFill, { width: fillWidth }]} />
        </View>
        <Text style={styles.progressLabel}>
          {progress.current}/{progress.total} công
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    padding: spacing.md,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.md,
  },
  title: {
    color: colors.text,
    fontSize: typography.subtitle,
    fontWeight: '800',
  },
  monthSelector: {
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: radius.pill,
    flexDirection: 'row',
    paddingHorizontal: 6,
    paddingVertical: 3,
  },
  arrowBtn: {
    alignItems: 'center',
    height: 26,
    justifyContent: 'center',
    width: 26,
  },
  disabledBtn: {
    opacity: 0.35,
  },
  selectorLabel: {
    color: colors.text,
    fontSize: 12,
    fontWeight: '600',
    paddingHorizontal: 4,
  },
  statsRow: {
    flexDirection: 'row',
    gap: spacing.xs,
    justifyContent: 'space-between',
  },
  stat: {
    alignItems: 'center',
    flex: 1,
  },
  statIcon: {
    alignItems: 'center',
    borderRadius: radius.pill,
    height: 34,
    justifyContent: 'center',
    width: 34,
  },
  statValue: {
    fontSize: 19,
    fontWeight: '800',
    marginTop: spacing.xs,
  },
  statLabel: {
    color: colors.textSecondary,
    fontSize: 11,
    marginTop: 2,
    textAlign: 'center',
  },
  progressRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.sm,
    marginTop: spacing.md,
  },
  progressTrack: {
    backgroundColor: '#E5E7EB',
    borderRadius: radius.pill,
    flex: 1,
    height: 8,
    overflow: 'hidden',
  },
  progressFill: {
    backgroundColor: '#10B981',
    borderRadius: radius.pill,
    height: '100%',
  },
  progressLabel: {
    color: colors.textSecondary,
    fontSize: typography.caption,
    fontWeight: '600',
  },
});
