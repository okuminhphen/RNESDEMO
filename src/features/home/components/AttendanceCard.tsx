import { LinearGradient } from 'expo-linear-gradient';
import { CalendarDays, LogOut, MapPin } from 'lucide-react-native';
import { StyleSheet, Text, View } from 'react-native';

import { colors, radius, spacing, typography } from '@/shared/theme';

import { attendanceSummary } from '../data/home.mock';
import { OfficeIllustration } from './OfficeIllustration';

export function AttendanceCard() {
  return (
    <LinearGradient
      colors={['#E9F4FF', '#D8EBFF']}
      end={{ x: 1, y: 1 }}
      start={{ x: 0, y: 0 }}
      style={styles.card}
    >
      <View style={styles.dateRow}>
        <Text style={styles.date}>{attendanceSummary.date}</Text>
        <View style={styles.todayBadge}>
          <CalendarDays color={colors.primary} size={18} strokeWidth={2.4} />
          <Text style={styles.todayText}>Hôm nay</Text>
        </View>
      </View>

      <View style={styles.summary}>
        <View style={styles.summaryCopy}>
          <Text style={styles.time}>{attendanceSummary.time}</Text>
          <View style={styles.statusRow}>
            <View style={styles.statusDot} />
            <Text style={styles.statusText}>{attendanceSummary.status}</Text>
          </View>
          <Text style={styles.checkInTime}>{attendanceSummary.checkInTime}</Text>

          <View style={styles.locationRow}>
            <MapPin color={colors.navy} size={22} strokeWidth={2} />
            <View style={styles.locationCopy}>
              <Text style={styles.location}>{attendanceSummary.location}</Text>
              <Text style={styles.coordinates}>{attendanceSummary.coordinates}</Text>
            </View>
          </View>
        </View>

        <View style={styles.illustration}>
          <OfficeIllustration />
          <View style={styles.messageBubble}>
            <Text style={styles.message}>Làm việc tốt</Text>
            <Text style={styles.message}>Tạo giá trị lớn!</Text>
          </View>
        </View>
      </View>

      <View accessibilityRole="button" style={styles.checkoutButton}>
        <LogOut color={colors.surface} size={22} strokeWidth={2.2} />
        <Text style={styles.checkoutText}>Chấm công ra</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: radius.xl,
    overflow: 'hidden',
    padding: spacing.lg,
  },
  dateRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.sm,
    justifyContent: 'space-between',
  },
  date: {
    color: colors.textSecondary,
    flex: 1,
    fontSize: typography.body,
    fontWeight: '500',
  },
  todayBadge: {
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.72)',
    borderRadius: radius.pill,
    flexDirection: 'row',
    gap: spacing.sm,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
  todayText: {
    color: colors.primary,
    fontSize: typography.bodySmall,
    fontWeight: '700',
  },
  summary: {
    flexDirection: 'row',
    minHeight: 188,
    paddingTop: spacing.sm,
  },
  summaryCopy: {
    flex: 1,
    zIndex: 2,
  },
  time: {
    color: colors.text,
    fontSize: typography.display,
    fontVariant: ['tabular-nums'],
    fontWeight: '800',
    letterSpacing: -1,
    lineHeight: 49,
  },
  statusRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.md,
    marginTop: spacing.xs,
  },
  statusDot: {
    backgroundColor: colors.success,
    borderRadius: radius.pill,
    height: 18,
    width: 18,
  },
  statusText: {
    color: '#15945A',
    fontSize: typography.body,
    fontWeight: '800',
  },
  checkInTime: {
    color: colors.text,
    fontSize: typography.body,
    marginLeft: 30,
    marginTop: 2,
  },
  locationRow: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    gap: spacing.sm,
    marginTop: spacing.lg,
  },
  locationCopy: {
    flex: 1,
  },
  location: {
    color: colors.text,
    fontSize: typography.bodySmall,
    fontWeight: '600',
  },
  coordinates: {
    color: colors.textSecondary,
    fontSize: 11,
    marginTop: 2,
  },
  illustration: {
    bottom: -1,
    position: 'absolute',
    right: -14,
    width: 142,
  },
  messageBubble: {
    backgroundColor: 'rgba(255,255,255,0.68)',
    borderRadius: radius.md,
    bottom: 4,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    position: 'absolute',
    right: 0,
    width: 132,
  },
  message: {
    color: colors.primaryDark,
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 18,
  },
  checkoutButton: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: radius.pill,
    flexDirection: 'row',
    gap: spacing.md,
    justifyContent: 'center',
    minHeight: 52,
  },
  checkoutText: {
    color: colors.surface,
    fontSize: typography.subtitle,
    fontWeight: '700',
  },
});
