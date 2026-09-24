import { ChevronLeft, ChevronRight } from 'lucide-react-native';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, radius, spacing, typography } from '@/shared/theme';

import type { AttendanceCalendarDay, AttendanceDayStatus } from '../types/attendance.types';

const weekDays = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];

const dotColors: Record<string, string> = {
  attended: '#2563EB', // Xanh dương
  leave: '#F59E0B',    // Vàng cam
  late: '#EF4444',     // Đỏ
  missing: '#9CA3AF',  // Xám
  weekend: '#D1D5DB',  // Xám nhạt
  future: '#E5E7EB',   // Xám rất nhạt
};

type TimesheetCalendarProps = {
  monthLabel: string;
  calendarDays: AttendanceCalendarDay[];
  startWeekday?: number; // 0 = T2, 1 = T3, ..., 6 = CN
  selectedDay: number;
  onSelectDay: (day: number) => void;
  onPrevMonth?: () => void;
  onNextMonth?: () => void;
  hasPrevMonth?: boolean;
  hasNextMonth?: boolean;
};

export function TimesheetCalendar({
  monthLabel,
  calendarDays,
  startWeekday = 0,
  selectedDay,
  onSelectDay,
  onPrevMonth,
  onNextMonth,
  hasPrevMonth = true,
  hasNextMonth = true,
}: TimesheetCalendarProps) {
  // Tạo các ô trống đầu tháng nếu ngày 1 không rơi vào Thứ 2
  const emptyPrefix = Array.from({ length: startWeekday }, (_, i) => i);

  return (
    <View style={styles.card}>
      {/* Month nav header */}
      <View style={styles.monthNav}>
        <Text style={styles.monthLabel}>{monthLabel}</Text>
        <View style={styles.navControls}>
          <Pressable
            accessibilityLabel="Tháng trước"
            accessibilityRole="button"
            disabled={!hasPrevMonth}
            hitSlop={6}
            onPress={onPrevMonth}
            style={[styles.navBtn, !hasPrevMonth && styles.disabledBtn]}
          >
            <ChevronLeft
              color={hasPrevMonth ? colors.textSecondary : colors.border}
              size={20}
              strokeWidth={2.2}
            />
          </Pressable>
          <Pressable
            accessibilityLabel="Tháng sau"
            accessibilityRole="button"
            disabled={!hasNextMonth}
            hitSlop={6}
            onPress={onNextMonth}
            style={[styles.navBtn, !hasNextMonth && styles.disabledBtn]}
          >
            <ChevronRight
              color={hasNextMonth ? colors.textSecondary : colors.border}
              size={20}
              strokeWidth={2.2}
            />
          </Pressable>
        </View>
      </View>

      {/* Weekday headers */}
      <View style={styles.weekRow}>
        {weekDays.map((d) => (
          <Text key={d} style={styles.weekDay}>
            {d}
          </Text>
        ))}
      </View>

      {/* Days grid */}
      <View style={styles.daysGrid}>
        {emptyPrefix.map((slot) => (
          <View key={`empty-${slot}`} style={styles.dayCell} />
        ))}

        {calendarDays.map((item) => {
          const isSelected = item.day === selectedDay;
          const isWeekend = item.status === 'weekend';
          const isFuture = item.status === 'future';
          const dotColor = isSelected ? '#FFFFFF' : dotColors[item.status] || '#9CA3AF';

          return (
            <Pressable
              key={item.day}
              accessibilityLabel={`Ngày ${item.day}`}
              accessibilityRole="button"
              onPress={() => onSelectDay(item.day)}
              style={styles.dayCell}
            >
              <View style={[styles.dayCircle, isSelected && styles.selectedCircle]}>
                <Text
                  style={[
                    styles.dayText,
                    isWeekend && styles.weekendText,
                    isFuture && styles.futureText,
                    isSelected && styles.selectedText,
                  ]}
                >
                  {item.day}
                </Text>
                <View style={[styles.dayDot, { backgroundColor: dotColor }]} />
              </View>
            </Pressable>
          );
        })}
      </View>

      {/* Legend chú giải màu (Khớp Ảnh 2: Đã chấm công, Nghỉ phép, Đi muộn, Thiếu công) */}
      <View style={styles.legendRow}>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: '#2563EB' }]} />
          <Text style={styles.legendLabel}>Đã chấm công</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: '#F59E0B' }]} />
          <Text style={styles.legendLabel}>Nghỉ phép</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: '#EF4444' }]} />
          <Text style={styles.legendLabel}>Đi muộn</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: '#9CA3AF' }]} />
          <Text style={styles.legendLabel}>Thiếu công</Text>
        </View>
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
  monthNav: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.sm,
  },
  monthLabel: {
    color: colors.text,
    fontSize: typography.body,
    fontWeight: '800',
  },
  navControls: {
    flexDirection: 'row',
    gap: spacing.xs,
  },
  navBtn: {
    alignItems: 'center',
    borderRadius: radius.sm,
    height: 32,
    justifyContent: 'center',
    width: 32,
  },
  disabledBtn: {
    opacity: 0.35,
  },
  weekRow: {
    flexDirection: 'row',
    marginBottom: spacing.xs,
  },
  weekDay: {
    color: colors.textMuted,
    flex: 1,
    fontSize: typography.caption,
    fontWeight: '700',
    textAlign: 'center',
  },
  daysGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  dayCell: {
    alignItems: 'center',
    height: 44,
    justifyContent: 'center',
    width: '14.2857%',
  },
  dayCircle: {
    alignItems: 'center',
    borderRadius: radius.pill,
    height: 38,
    justifyContent: 'center',
    width: 38,
  },
  selectedCircle: {
    backgroundColor: '#1D4ED8',
    elevation: 2,
    shadowColor: '#1D4ED8',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  dayText: {
    color: colors.text,
    fontSize: 13,
    fontWeight: '600',
  },
  weekendText: {
    color: '#9CA3AF',
  },
  futureText: {
    color: '#D1D5DB',
  },
  selectedText: {
    color: '#FFFFFF',
    fontWeight: '800',
  },
  dayDot: {
    borderRadius: radius.pill,
    height: 4,
    marginTop: 2,
    width: 4,
  },
  legendRow: {
    borderTopColor: '#F3F4F6',
    borderTopWidth: 1,
    flexDirection: 'row',
    gap: spacing.xs,
    justifyContent: 'space-between',
    marginTop: spacing.sm,
    paddingTop: spacing.sm,
  },
  legendItem: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 4,
  },
  legendDot: {
    borderRadius: radius.pill,
    height: 7,
    width: 7,
  },
  legendLabel: {
    color: colors.textSecondary,
    fontSize: 10,
    fontWeight: '500',
  },
});
