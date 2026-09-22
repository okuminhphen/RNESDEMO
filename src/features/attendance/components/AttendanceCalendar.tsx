import { StyleSheet, Text, View } from 'react-native';

import { AppCard } from '@/shared/components';
import { colors, radius, spacing, typography } from '@/shared/theme';

import { calendarDays, type AttendanceDayStatus } from '../data/attendance.mock';

const weekDays = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];

const dotColors: Partial<Record<AttendanceDayStatus, string>> = {
  normal: colors.success,
  late: colors.orange,
  leave: colors.red,
};

export function AttendanceCalendar() {
  return (
    <AppCard style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>Lịch chấm công</Text>
        <View style={styles.legend}>
          <View style={[styles.legendDot, { backgroundColor: colors.success }]} />
          <Text style={styles.legendText}>Đủ công</Text>
          <View style={[styles.legendDot, { backgroundColor: colors.orange }]} />
          <Text style={styles.legendText}>Đi muộn</Text>
        </View>
      </View>

      <View style={styles.weekRow}>
        {weekDays.map((day) => (
          <Text key={day} style={styles.weekDay}>
            {day}
          </Text>
        ))}
      </View>

      <View style={styles.days}>
        {calendarDays.map((item) => {
          const selected = item.status === 'selected';
          const weekend = item.status === 'weekend';
          const dotColor = dotColors[item.status];

          return (
            <View key={item.day} style={styles.dayCell}>
              <View style={[styles.dayCircle, selected && styles.selectedDay]}>
                <Text
                  style={[
                    styles.dayText,
                    weekend && styles.weekendText,
                    selected && styles.selectedText,
                  ]}
                >
                  {item.day}
                </Text>
                {dotColor ? <View style={[styles.dayDot, { backgroundColor: dotColor }]} /> : null}
              </View>
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
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.sm,
    justifyContent: 'space-between',
  },
  title: {
    color: colors.text,
    fontSize: typography.subtitle,
    fontWeight: '700',
  },
  legend: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.xs,
  },
  legendDot: {
    borderRadius: radius.pill,
    height: 6,
    marginLeft: spacing.xs,
    width: 6,
  },
  legendText: {
    color: colors.textMuted,
    fontSize: 10,
  },
  weekRow: {
    flexDirection: 'row',
    marginTop: spacing.lg,
  },
  weekDay: {
    color: colors.textMuted,
    flex: 1,
    fontSize: typography.caption,
    fontWeight: '700',
    textAlign: 'center',
  },
  days: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: spacing.sm,
  },
  dayCell: {
    alignItems: 'center',
    height: 46,
    justifyContent: 'center',
    width: '14.2857%',
  },
  dayCircle: {
    alignItems: 'center',
    borderRadius: radius.pill,
    height: 38,
    justifyContent: 'center',
    position: 'relative',
    width: 38,
  },
  selectedDay: {
    backgroundColor: colors.primary,
  },
  dayText: {
    color: colors.text,
    fontSize: typography.bodySmall,
    fontWeight: '600',
  },
  weekendText: {
    color: colors.textMuted,
  },
  selectedText: {
    color: colors.surface,
    fontWeight: '800',
  },
  dayDot: {
    borderRadius: radius.pill,
    bottom: 3,
    height: 4,
    position: 'absolute',
    width: 4,
  },
});
