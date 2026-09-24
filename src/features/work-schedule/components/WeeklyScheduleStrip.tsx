import { ChevronRight } from 'lucide-react-native';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, radius, spacing } from '@/shared/theme';

import type { ScheduleStatus, WeekScheduleDay } from '../types/work-schedule.types';

const dotColors: Record<ScheduleStatus, string> = {
  morning: colors.primary,
  afternoon: '#F59E0B',
  leave: colors.red,
  'business-trip': '#14B87A',
  off: '#CBD5E1',
};

type WeeklyScheduleStripProps = {
  days: WeekScheduleDay[];
  selectedDay: number;
  actionLabel: string;
  onAction: () => void;
  onSelectDay: (day: number) => void;
};

export function WeeklyScheduleStrip({ days, selectedDay, actionLabel, onAction, onSelectDay }: WeeklyScheduleStripProps) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>Lịch làm việc trong tuần</Text>
        <Pressable accessibilityRole="button" onPress={onAction} style={styles.action}>
          <Text style={styles.actionText}>{actionLabel}</Text>
          <ChevronRight color={colors.primary} size={15} strokeWidth={2.5} />
        </Pressable>
      </View>

      <View style={styles.daysRow}>
        {days.map((day) => {
          const isSelected = day.date === `${String(selectedDay).padStart(2, '0')}/09`;
          const canSelect = day.date.endsWith('/09');
          return (
            <Pressable
              accessibilityLabel={`${day.weekday}, ngày ${day.date}, ${day.label}`}
              accessibilityRole="button"
              accessibilityState={{ disabled: !canSelect, selected: isSelected }}
              disabled={!canSelect}
              key={day.date}
              onPress={() => onSelectDay(Number(day.date.slice(0, 2)))}
              style={[styles.day, isSelected && styles.selectedDay]}
            >
              <Text style={styles.weekday}>{day.weekday}</Text>
              <Text style={styles.date}>{day.date}</Text>
              <View style={[styles.dot, { backgroundColor: dotColors[day.status] }]} />
              <Text numberOfLines={1} style={styles.label}>{day.label}</Text>
              <Text numberOfLines={1} style={styles.time}>{day.time ?? 'Cả ngày'}</Text>
            </Pressable>
          );
        })}
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
    marginBottom: spacing.xs,
  },
  title: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '800',
  },
  action: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 2,
  },
  actionText: {
    color: colors.primary,
    fontSize: 11,
    fontWeight: '700',
  },
  daysRow: {
    flexDirection: 'row',
    gap: 4,
  },
  day: {
    alignItems: 'center',
    backgroundColor: '#F9FBFE',
    borderRadius: radius.sm,
    flex: 1,
    minWidth: 0,
    paddingHorizontal: 2,
    paddingVertical: 5,
  },
  selectedDay: {
    backgroundColor: '#F6FAFF',
    borderColor: colors.primary,
    borderWidth: 1,
  },
  weekday: {
    color: colors.textSecondary,
    fontSize: 10,
    fontWeight: '700',
  },
  date: {
    color: colors.textSecondary,
    fontSize: 10,
    fontWeight: '600',
    marginTop: 1,
  },
  dot: {
    borderRadius: radius.pill,
    height: 7,
    marginTop: 5,
    width: 7,
  },
  label: {
    color: colors.text,
    fontSize: 10,
    fontWeight: '700',
    marginTop: 3,
  },
  time: {
    color: colors.textSecondary,
    fontSize: 9,
    marginTop: 1,
  },
});
