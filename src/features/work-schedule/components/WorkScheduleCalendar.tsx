import { ChevronLeft, ChevronRight } from 'lucide-react-native';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, radius, spacing } from '@/shared/theme';

import type { ScheduleCalendarDay, ScheduleStatus } from '../types/work-schedule.types';

const weekdays = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];

const statusColors: Record<ScheduleStatus, string> = {
  morning: colors.primary,
  afternoon: '#F59E0B',
  leave: colors.red,
  'business-trip': '#14B87A',
  off: '#CBD5E1',
};

const legendItems: { label: string; status: ScheduleStatus }[] = [
  { label: 'Ca sáng', status: 'morning' },
  { label: 'Ca chiều', status: 'afternoon' },
  { label: 'Nghỉ', status: 'leave' },
  { label: 'Công tác', status: 'business-trip' },
  { label: 'Không có ca', status: 'off' },
];

type WorkScheduleCalendarProps = {
  days: ScheduleCalendarDay[];
  selectedDay: number;
  onSelectDay: (day: number) => void;
  onChangeMonth: () => void;
};

export function WorkScheduleCalendar({
  days,
  selectedDay,
  onSelectDay,
  onChangeMonth,
}: WorkScheduleCalendarProps) {
  const cells: Array<ScheduleCalendarDay | undefined> = [...days];
  while (cells.length < 35) cells.push(undefined);

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>Tháng 9/2025</Text>
        <View style={styles.monthControl}>
          <Pressable accessibilityLabel="Tháng trước" accessibilityRole="button" onPress={onChangeMonth}>
            <ChevronLeft color={colors.primary} size={18} strokeWidth={2.5} />
          </Pressable>
          <Text style={styles.monthLabel}>Tháng 9/2025</Text>
          <Pressable accessibilityLabel="Tháng sau" accessibilityRole="button" onPress={onChangeMonth}>
            <ChevronRight color={colors.primary} size={18} strokeWidth={2.5} />
          </Pressable>
        </View>
      </View>

      <View style={styles.weekdays}>
        {weekdays.map((weekday) => (
          <Text key={weekday} style={styles.weekday}>
            {weekday}
          </Text>
        ))}
      </View>

      <View style={styles.grid}>
        {cells.map((item, index) => {
          const isLastColumn = index % 7 === 6;
          const isLastRow = index >= 28;

          if (!item) {
            return (
              <View
                key={`empty-${index}`}
                style={[
                  styles.cell,
                  !isLastColumn && styles.cellRightBorder,
                  !isLastRow && styles.cellBottomBorder,
                ]}
              />
            );
          }

          const selected = item.day === selectedDay;
          const isMuted = item.status === 'off';
          const dotColor = selected ? colors.surface : statusColors[item.status];

          return (
            <Pressable
              accessibilityLabel={`Ngày ${item.day} tháng 9 năm 2025`}
              accessibilityRole="button"
              key={item.day}
              onPress={() => onSelectDay(item.day)}
              style={[
                styles.cell,
                !isLastColumn && styles.cellRightBorder,
                !isLastRow && styles.cellBottomBorder,
              ]}
            >
              <View style={[styles.dayCircle, selected && styles.selectedDay]}>
                <Text style={[styles.dayText, isMuted && styles.mutedText, selected && styles.selectedText]}>
                  {item.day}
                </Text>
                <View style={[styles.dot, { backgroundColor: dotColor }]} />
              </View>
            </Pressable>
          );
        })}
      </View>

      <View style={styles.legend}>
        {legendItems.map((item) => (
          <View key={item.status} style={styles.legendItem}>
            <View style={[styles.legendDot, { backgroundColor: statusColors[item.status] }]} />
            <Text style={styles.legendText}>{item.label}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    overflow: 'hidden',
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.md,
    paddingTop: spacing.md,
  },
  title: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '800',
  },
  monthControl: {
    alignItems: 'center',
    backgroundColor: '#F7FAFE',
    borderRadius: radius.pill,
    flexDirection: 'row',
    gap: spacing.xs,
    paddingHorizontal: 6,
    paddingVertical: 5,
  },
  monthLabel: {
    color: colors.textSecondary,
    fontSize: 11,
    fontWeight: '600',
  },
  weekdays: {
    flexDirection: 'row',
    paddingTop: spacing.md,
  },
  weekday: {
    color: colors.textSecondary,
    flex: 1,
    fontSize: 11,
    fontWeight: '600',
    paddingBottom: spacing.sm,
    textAlign: 'center',
  },
  grid: {
    borderTopColor: '#F0F4F9',
    borderTopWidth: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cell: {
    alignItems: 'center',
    height: 43,
    justifyContent: 'center',
    width: '14.2857%',
  },
  cellRightBorder: {
    borderRightColor: '#F0F4F9',
    borderRightWidth: 1,
  },
  cellBottomBorder: {
    borderBottomColor: '#F0F4F9',
    borderBottomWidth: 1,
  },
  dayCircle: {
    alignItems: 'center',
    borderRadius: 20,
    height: 40,
    justifyContent: 'center',
    width: 40,
  },
  selectedDay: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    overflow: 'hidden',
  },
  dayText: {
    color: colors.text,
    fontSize: 13,
    fontWeight: '600',
  },
  mutedText: {
    color: colors.textMuted,
  },
  selectedText: {
    color: colors.surface,
    fontWeight: '800',
  },
  dot: {
    borderRadius: radius.pill,
    height: 5,
    marginTop: 3,
    width: 5,
  },
  legend: {
    borderTopColor: '#F0F4F9',
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.md,
    paddingVertical: 11,
  },
  legendItem: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 4,
  },
  legendDot: {
    borderRadius: radius.pill,
    height: 8,
    width: 8,
  },
  legendText: {
    color: colors.textSecondary,
    fontSize: 9,
    fontWeight: '500',
  },
});
