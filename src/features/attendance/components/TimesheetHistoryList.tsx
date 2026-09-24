import { CalendarCheck, Clock, LogIn, LogOut } from 'lucide-react-native';
import { StyleSheet, Text, View } from 'react-native';

import { StatusBadge } from '@/shared/components';
import { colors, radius, spacing, typography } from '@/shared/theme';

import type { AttendanceRecord } from '../types/attendance.types';

type TimesheetHistoryListProps = {
  records: AttendanceRecord[];
};

export function TimesheetHistoryList({ records }: TimesheetHistoryListProps) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>Lịch sử chấm công</Text>
        <Text style={styles.counter}>{records.length} bản ghi</Text>
      </View>

      <View style={styles.list}>
        {records.map((rec, index) => (
          <View
            key={rec.id}
            style={[styles.item, index > 0 && styles.divider]}
          >
            <View style={styles.iconWrap}>
              <CalendarCheck color={colors.primary} size={20} strokeWidth={2.2} />
            </View>

            <View style={styles.itemBody}>
              <Text style={styles.dateText}>{rec.date}</Text>
              <View style={styles.timeRow}>
                <View style={styles.timeBadge}>
                  <LogIn color="#10B981" size={13} />
                  <Text style={styles.timeText}>{rec.checkIn}</Text>
                </View>

                <View style={styles.timeBadge}>
                  <LogOut color="#3B82F6" size={13} />
                  <Text style={styles.timeText}>{rec.checkOut}</Text>
                </View>

                {rec.duration && (
                  <View style={styles.timeBadge}>
                    <Clock color="#6B7280" size={12} />
                    <Text style={styles.durationText}>{rec.duration}</Text>
                  </View>
                )}
              </View>
            </View>

            <StatusBadge label={rec.status} tone={rec.tone} />
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
    padding: spacing.md,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.sm,
  },
  title: {
    color: colors.text,
    fontSize: typography.body,
    fontWeight: '800',
  },
  counter: {
    color: colors.textSecondary,
    fontSize: typography.caption,
  },
  list: {
    marginTop: spacing.xs,
  },
  item: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.sm,
    paddingVertical: spacing.sm,
  },
  divider: {
    borderTopColor: '#F3F4F6',
    borderTopWidth: 1,
  },
  iconWrap: {
    alignItems: 'center',
    backgroundColor: '#EFF6FF',
    borderRadius: radius.sm,
    height: 38,
    justifyContent: 'center',
    width: 38,
  },
  itemBody: {
    flex: 1,
    minWidth: 0,
  },
  dateText: {
    color: colors.text,
    fontSize: 13,
    fontWeight: '700',
  },
  timeRow: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginTop: 4,
  },
  timeBadge: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 3,
  },
  timeText: {
    color: colors.text,
    fontSize: 12,
    fontWeight: '600',
  },
  durationText: {
    color: colors.textMuted,
    fontSize: 11,
  },
});
