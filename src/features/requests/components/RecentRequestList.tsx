import { ChevronRight, FileText } from 'lucide-react-native';
import { StyleSheet, Text, View } from 'react-native';

import { AppCard, SectionHeader, StatusBadge } from '@/shared/components';
import { colors, radius, spacing, typography } from '@/shared/theme';

import { recentRequests } from '../data/requests.mock';

export function RecentRequestList() {
  return (
    <AppCard style={styles.card}>
      <SectionHeader actionLabel="Xem tất cả" title="Đơn gần đây" />
      <View style={styles.list}>
        {recentRequests.map((request, index) => (
          <View key={request.id} style={[styles.item, index > 0 && styles.divider]}>
            <View style={styles.icon}>
              <FileText color={colors.primary} size={21} strokeWidth={2.1} />
            </View>
            <View style={styles.copy}>
              <Text style={styles.type}>{request.type}</Text>
              <Text style={styles.period}>{request.period}</Text>
              <Text style={styles.submitted}>{request.submittedAt}</Text>
            </View>
            <View style={styles.trailing}>
              <StatusBadge label={request.status} tone={request.tone} />
              <ChevronRight color={colors.textMuted} size={17} />
            </View>
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
    minHeight: 86,
    paddingVertical: spacing.md,
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
  type: {
    color: colors.text,
    fontSize: typography.bodySmall,
    fontWeight: '700',
  },
  period: {
    color: colors.textSecondary,
    fontSize: typography.caption,
    marginTop: 3,
  },
  submitted: {
    color: colors.textMuted,
    fontSize: 10,
    marginTop: 3,
  },
  trailing: {
    alignItems: 'flex-end',
    gap: spacing.sm,
  },
});
