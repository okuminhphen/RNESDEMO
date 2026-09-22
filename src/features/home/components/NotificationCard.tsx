import { Check, ChevronRight } from 'lucide-react-native';
import { StyleSheet, Text, View } from 'react-native';

import { AppCard, SectionHeader } from '@/shared/components';
import { colors, radius, spacing, typography } from '@/shared/theme';

export function NotificationCard() {
  return (
    <AppCard style={styles.card}>
      <SectionHeader actionLabel="Xem tất cả" title="Thông báo" />
      <View style={styles.notificationRow}>
        <View style={styles.statusIcon}>
          <Check color={colors.surface} size={20} strokeWidth={2.6} />
        </View>
        <View style={styles.copy}>
          <Text numberOfLines={2} style={styles.message}>
            Đơn nghỉ phép ngày 17/09/2025 đã được phê duyệt
          </Text>
          <Text style={styles.time}>2 giờ trước</Text>
        </View>
        <ChevronRight color={colors.textMuted} size={20} strokeWidth={2} />
      </View>
    </AppCard>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: spacing.lg,
  },
  notificationRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.md,
    marginTop: spacing.lg,
  },
  statusIcon: {
    alignItems: 'center',
    backgroundColor: colors.success,
    borderRadius: radius.pill,
    height: 38,
    justifyContent: 'center',
    width: 38,
  },
  copy: {
    flex: 1,
    minWidth: 0,
  },
  message: {
    color: colors.text,
    fontSize: typography.bodySmall,
    fontWeight: '600',
    lineHeight: 19,
  },
  time: {
    color: colors.textMuted,
    fontSize: typography.caption,
    marginTop: 2,
  },
});
