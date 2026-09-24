import { FileText, Megaphone } from 'lucide-react-native';
import type { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { AppCard, SectionHeader } from '@/shared/components';
import { colors, radius, spacing } from '@/shared/theme';

export function NotificationCard() {
  return (
    <AppCard style={styles.card} variant="soft">
      <SectionHeader actionLabel="Xem tất cả" title="Thông báo" />
      <NotificationRow
        icon={<Megaphone color={colors.success} size={18} strokeWidth={2.2} />}
        iconBackground={colors.successSoft}
        message="Phiếu lương tháng 8/2025 đã được phát hành"
        detail="Bạn có thể xem chi tiết tại mục Lương."
        date="15/09/2025"
        time="10:30"
      />
      <NotificationRow
        icon={<FileText color={colors.primary} size={18} strokeWidth={2.2} />}
        iconBackground={colors.primarySoft}
        message="Yêu cầu nghỉ phép đã được phê duyệt"
        detail="Thời gian: 22/09/2025 - 24/09/2025"
        date="14/09/2025"
        time="16:20"
      />
    </AppCard>
  );
}

type NotificationRowProps = {
  icon: ReactNode;
  iconBackground: string;
  message: string;
  detail: string;
  date: string;
  time: string;
};

function NotificationRow({ icon, iconBackground, message, detail, date, time }: NotificationRowProps) {
  return (
    <View style={styles.notificationRow}>
      <View style={[styles.statusIcon, { backgroundColor: iconBackground }]}>{icon}</View>
      <View style={styles.copy}>
        <Text numberOfLines={2} style={styles.message}>{message}</Text>
        <Text numberOfLines={2} style={styles.detail}>{detail}</Text>
      </View>
      <View style={styles.meta}>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>
      <View style={styles.unreadDot} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
  },
  notificationRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.xs,
    borderTopColor: colors.border,
    borderTopWidth: 1,
    marginTop: spacing.xs,
    paddingTop: spacing.xs,
  },
  statusIcon: {
    alignItems: 'center',
    borderRadius: radius.pill,
    height: 30,
    justifyContent: 'center',
    width: 30,
  },
  copy: {
    flex: 1,
    minWidth: 0,
  },
  message: {
    color: colors.text,
    fontSize: 11,
    fontWeight: '700',
    lineHeight: 15,
  },
  detail: {
    color: colors.textMuted,
    fontSize: 10,
    lineHeight: 13,
    marginTop: 2,
  },
  meta: {
    alignItems: 'flex-end',
  },
  date: {
    color: colors.textSecondary,
    fontSize: 9,
  },
  time: {
    color: colors.textSecondary,
    fontSize: 9,
    marginTop: 2,
  },
  unreadDot: {
    backgroundColor: colors.red,
    borderRadius: radius.pill,
    height: 6,
    width: 6,
  },
});
