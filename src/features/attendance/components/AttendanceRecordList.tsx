import { CalendarCheck, LogIn, LogOut } from 'lucide-react-native';
import { StyleSheet, Text, View } from 'react-native';

import { AppCard, SectionHeader, StatusBadge } from '@/shared/components';
import { colors, radius, spacing, typography } from '@/shared/theme';

import { attendanceRecords } from '../data/attendance.mock';

export function AttendanceRecordList() {
  return (
    <AppCard style={styles.card}>
      <SectionHeader actionLabel="Xem tất cả" title="Chấm công gần đây" />
      <View style={styles.list}>
        {attendanceRecords.map((record, index) => (
          <View key={record.id} style={[styles.item, index > 0 && styles.divider]}>
            <View style={styles.icon}>
              <CalendarCheck color={colors.primary} size={21} strokeWidth={2.1} />
            </View>
            <View style={styles.copy}>
              <Text style={styles.date}>{record.date}</Text>
              <View style={styles.times}>
                <LogIn color={colors.success} size={14} />
                <Text style={styles.time}>{record.checkIn}</Text>
                <LogOut color={colors.orange} size={14} />
                <Text style={styles.time}>{record.checkOut}</Text>
              </View>
            </View>
            <StatusBadge label={record.status} tone={record.tone} />
          </View>
        ))}
      </View>
    </AppCard>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: spacing.lg,
  },
  list: {
    marginTop: spacing.md,
  },
  item: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.sm,
    minHeight: 72,
    paddingVertical: spacing.sm,
  },
  divider: {
    borderTopColor: colors.border,
    borderTopWidth: 1,
  },
  icon: {
    alignItems: 'center',
    backgroundColor: colors.primarySoft,
    borderRadius: radius.sm,
    height: 40,
    justifyContent: 'center',
    width: 40,
  },
  copy: {
    flex: 1,
    minWidth: 0,
  },
  date: {
    color: colors.text,
    fontSize: typography.bodySmall,
    fontWeight: '700',
  },
  times: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.xs,
    marginTop: spacing.xs,
  },
  time: {
    color: colors.textSecondary,
    fontSize: typography.caption,
    marginRight: spacing.xs,
  },
});
