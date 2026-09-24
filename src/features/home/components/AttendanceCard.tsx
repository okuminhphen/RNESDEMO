import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { ChevronRight, CirclePlus, MapPin } from 'lucide-react-native';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, radius, spacing, typography } from '@/shared/theme';

import { attendanceSummary } from '../data/home.mock';
import { OfficeIllustration } from './OfficeIllustration';

export function AttendanceCard({ onCheckout }: { onCheckout?: () => void }) {
  const router = useRouter();

  return (
    <LinearGradient
      colors={['#E7F2FF', '#F3F8FF']}
      end={{ x: 1, y: 1 }}
      start={{ x: 0, y: 0 }}
      style={styles.card}
    >
      <Text style={styles.date}>{attendanceSummary.date}</Text>

      <View style={styles.summary}>
        <View style={styles.summaryCopy}>
          <Text style={styles.time}>{attendanceSummary.time}</Text>
          <View style={styles.statusRow}>
            <View style={styles.statusDot} />
            <Text style={styles.statusText}>{attendanceSummary.status}</Text>
          </View>
          <Text style={styles.checkInTime}>{attendanceSummary.checkInTime}</Text>

          <View style={styles.locationRow}>
            <MapPin color={colors.navy} size={18} strokeWidth={2} />
            <View style={styles.locationCopy}>
              <Text style={styles.location}>{attendanceSummary.location}</Text>
              <Text style={styles.address}>{attendanceSummary.address}</Text>
            </View>
          </View>
        </View>

        <View style={styles.illustration}>
          <OfficeIllustration />
        </View>
        <View style={styles.sideActions}>
          <Pressable
            accessibilityRole="button"
            onPress={
              onCheckout ??
              (() =>
                router.push({
                  pathname: '/checkin',
                  params: { confirm: 'checkout' },
                }))
            }
            style={({ pressed }) => [
              styles.checkoutButton,
              pressed && styles.pressed,
            ]}
          >
            <CirclePlus color={colors.surface} size={17} strokeWidth={2.2} />
            <Text style={styles.checkoutText}>Chấm công ra</Text>
          </Pressable>
          <View style={styles.scheduleLink}>
            <Text style={styles.scheduleText}>Xem lịch làm việc</Text>
            <ChevronRight
              color={colors.primaryDark}
              size={14}
              strokeWidth={2.5}
            />
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: radius.md,
    overflow: 'hidden',
    padding: 14,
  },
  date: {
    color: colors.text,
    fontSize: typography.bodySmall,
    fontWeight: '500',
  },
  summary: {
    flexDirection: 'row',
    minHeight: 116,
    paddingTop: spacing.sm,
  },
  summaryCopy: {
    flex: 1,
    minWidth: 0,
    zIndex: 2,
  },
  time: {
    color: colors.text,
    fontSize: 32,
    fontVariant: ['tabular-nums'],
    fontWeight: '800',
    letterSpacing: -1,
    lineHeight: 39,
  },
  statusRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.sm,
    marginTop: spacing.xs,
  },
  statusDot: {
    backgroundColor: colors.success,
    borderRadius: radius.pill,
    height: 8,
    width: 8,
  },
  statusText: {
    color: '#15945A',
    fontSize: typography.caption,
    fontWeight: '600',
  },
  checkInTime: {
    color: colors.text,
    fontSize: typography.caption,
    marginLeft: 16,
    marginTop: 2,
  },
  locationRow: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    gap: spacing.sm,
    marginTop: spacing.sm,
  },
  locationCopy: {
    flex: 1,
  },
  location: {
    color: colors.text,
    fontSize: typography.caption,
    fontWeight: '600',
  },
  address: {
    color: colors.textSecondary,
    fontSize: 10,
    lineHeight: 13,
    marginTop: 2,
  },
  illustration: {
    height: 116,
    opacity: 0.85,
    position: 'absolute',
    right: -8,
    top: -24,
    width: 180,
  },
  sideActions: {
    paddingTop: 43,
    width: 144,
    zIndex: 2,
  },
  scheduleLink: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  scheduleText: {
    color: colors.primaryDark,
    fontSize: 10,
    fontWeight: '600',
  },
  checkoutButton: {
    alignItems: 'center',
    backgroundColor: colors.primaryDark,
    borderRadius: radius.sm,
    flexDirection: 'row',
    gap: spacing.xs,
    justifyContent: 'center',
    minHeight: 39,
    paddingHorizontal: spacing.xs,
  },
  checkoutText: {
    color: colors.surface,
    fontSize: typography.caption,
    fontWeight: '700',
  },
  pressed: {
    opacity: 0.8,
  },
});
