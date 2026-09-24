import { Briefcase, LogIn, LogOut, MapPin } from 'lucide-react-native';
import { StyleSheet, Text, View } from 'react-native';

import { colors, radius, spacing, typography } from '@/shared/theme';

import type { DayDetail } from '../types/attendance.types';

type TimesheetDayDetailProps = {
  dayDetail?: DayDetail;
  fallbackDateStr: string;
};

export function TimesheetDayDetail({
  dayDetail,
  fallbackDateStr,
}: TimesheetDayDetailProps) {
  if (!dayDetail) {
    return (
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.title}>Chi tiết ngày {fallbackDateStr}</Text>
          <View style={[styles.badge, { backgroundColor: '#F3F4F6' }]}>
            <Text style={[styles.badgeText, { color: '#6B7280' }]}>Chưa có dữ liệu</Text>
          </View>
        </View>
        <Text style={styles.emptyText}>
          Không có dữ liệu chấm công được ghi nhận cho ngày này.
        </Text>
      </View>
    );
  }

  const isLate = dayDetail.status === 'late';
  const isLeave = dayDetail.status === 'leave';

  const badgeBg = isLate ? '#FEE2E2' : isLeave ? '#FEF3C7' : '#D1FAE5';
  const badgeColor = isLate ? '#DC2626' : isLeave ? '#D97706' : '#059669';

  return (
    <View style={styles.card}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Chi tiết ngày {dayDetail.date}</Text>
        <View style={[styles.badge, { backgroundColor: badgeBg }]}>
          <View style={[styles.badgeDot, { backgroundColor: badgeColor }]} />
          <Text style={[styles.badgeText, { color: badgeColor }]}>
            {dayDetail.statusLabel}
          </Text>
        </View>
      </View>

      {/* Main check-in & check-out list with timeline line */}
      <View style={styles.timelineContainer}>
        {/* Đường nối dọc timeline giữa Check-in và Check-out */}
        {dayDetail.checkIn && dayDetail.checkOut && (
          <View style={styles.timelineDottedLine} />
        )}

        {/* Check-in row */}
        {dayDetail.checkIn ? (
          <View style={styles.timeRow}>
            <View style={styles.timeIconWrap}>
              <LogIn color="#2563EB" size={17} strokeWidth={2.4} />
            </View>
            <View style={styles.timeContent}>
              <Text style={styles.timeValue}>{dayDetail.checkIn.time}</Text>
              <Text style={styles.timeLabel}>Chấm công vào</Text>
            </View>
            <View style={styles.locationWrap}>
              <MapPin color="#9CA3AF" size={14} style={{ marginTop: 2 }} />
              <View style={styles.locationContent}>
                <Text style={styles.locationTitle}>{dayDetail.checkIn.location}</Text>
                <Text numberOfLines={2} style={styles.locationAddress}>
                  {dayDetail.checkIn.address}
                </Text>
              </View>
            </View>
          </View>
        ) : (
          <View style={styles.timeRow}>
            <View style={styles.timeIconWrap}>
              <LogIn color="#9CA3AF" size={17} strokeWidth={2.4} />
            </View>
            <View style={styles.timeContent}>
              <Text style={styles.timeValue}>--:--</Text>
              <Text style={styles.timeLabel}>Chấm công vào</Text>
            </View>
            <View style={styles.locationWrap}>
              <Text style={styles.locationAddress}>Không có bản ghi</Text>
            </View>
          </View>
        )}

        {/* Check-out row */}
        {dayDetail.checkOut ? (
          <View style={styles.timeRow}>
            <View style={styles.timeIconWrap}>
              <LogOut color="#2563EB" size={17} strokeWidth={2.4} />
            </View>
            <View style={styles.timeContent}>
              <Text style={styles.timeValue}>{dayDetail.checkOut.time}</Text>
              <Text style={styles.timeLabel}>Chấm công ra</Text>
            </View>
            <View style={styles.locationWrap}>
              <MapPin color="#9CA3AF" size={14} style={{ marginTop: 2 }} />
              <View style={styles.locationContent}>
                <Text style={styles.locationTitle}>{dayDetail.checkOut.location}</Text>
                <Text numberOfLines={2} style={styles.locationAddress}>
                  {dayDetail.checkOut.address}
                </Text>
              </View>
            </View>
          </View>
        ) : (
          <View style={styles.timeRow}>
            <View style={styles.timeIconWrap}>
              <LogOut color="#9CA3AF" size={17} strokeWidth={2.4} />
            </View>
            <View style={styles.timeContent}>
              <Text style={styles.timeValue}>--:--</Text>
              <Text style={styles.timeLabel}>Chấm công ra</Text>
            </View>
            <View style={styles.locationWrap}>
              <Text style={styles.locationAddress}>Chưa chấm công ra</Text>
            </View>
          </View>
        )}
      </View>

      {/* Ca làm việc card (Khớp Ảnh 2) */}
      <View style={styles.shiftCard}>
        <View style={styles.shiftIcon}>
          <Briefcase color="#6B7280" size={18} strokeWidth={2.2} />
        </View>
        <View style={styles.shiftCopy}>
          <Text style={styles.shiftLabel}>Ca làm việc</Text>
          <Text style={styles.shiftValue}>{dayDetail.shift}</Text>
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
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.md,
  },
  title: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '800',
  },
  badge: {
    alignItems: 'center',
    borderRadius: radius.pill,
    flexDirection: 'row',
    gap: 5,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  badgeDot: {
    borderRadius: radius.pill,
    height: 6,
    width: 6,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '700',
  },
  emptyText: {
    color: colors.textMuted,
    fontSize: typography.bodySmall,
    paddingVertical: spacing.sm,
  },
  timelineContainer: {
    position: 'relative',
  },
  timelineDottedLine: {
    borderColor: '#D1D5DB',
    borderLeftWidth: 1.5,
    borderStyle: 'dashed',
    bottom: 30,
    left: 17,
    position: 'absolute',
    top: 30,
  },
  timeRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.sm,
    paddingVertical: 8,
  },
  timeIconWrap: {
    alignItems: 'center',
    backgroundColor: '#EFF6FF',
    borderRadius: 8,
    height: 36,
    justifyContent: 'center',
    width: 36,
    zIndex: 1,
  },
  timeContent: {
    width: 96,
  },
  timeValue: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '800',
  },
  timeLabel: {
    color: colors.textSecondary,
    fontSize: 12,
    marginTop: 1,
  },
  locationWrap: {
    alignItems: 'flex-start',
    flex: 1,
    flexDirection: 'row',
    gap: 4,
  },
  locationContent: {
    flex: 1,
  },
  locationTitle: {
    color: colors.text,
    fontSize: 12,
    fontWeight: '700',
  },
  locationAddress: {
    color: colors.textSecondary,
    fontSize: 10,
    lineHeight: 14,
    marginTop: 1,
  },
  shiftCard: {
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderRadius: radius.sm,
    flexDirection: 'row',
    gap: spacing.sm,
    marginTop: spacing.sm,
    paddingHorizontal: spacing.md,
    paddingVertical: 10,
  },
  shiftIcon: {
    alignItems: 'center',
    height: 24,
    justifyContent: 'center',
    width: 24,
  },
  shiftCopy: {
    flex: 1,
  },
  shiftLabel: {
    color: colors.textSecondary,
    fontSize: 11,
  },
  shiftValue: {
    color: colors.text,
    fontSize: 13,
    fontWeight: '700',
    marginTop: 1,
  },
});
