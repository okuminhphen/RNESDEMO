import { Download, ReceiptText } from 'lucide-react-native';
import { StyleSheet, Text, View } from 'react-native';

import { AppCard, SectionHeader } from '@/shared/components';
import { colors, radius, spacing, typography } from '@/shared/theme';

import { payslips } from '../data/payroll.mock';

export function PayslipList() {
  return (
    <AppCard style={styles.card}>
      <SectionHeader actionLabel="Xem tất cả" title="Phiếu lương" />
      <View style={styles.list}>
        {payslips.map((payslip, index) => (
          <View key={payslip.id} style={[styles.item, index > 0 && styles.divider]}>
            <View style={styles.icon}>
              <ReceiptText color={colors.primary} size={21} strokeWidth={2.1} />
            </View>
            <View style={styles.copy}>
              <Text style={styles.month}>{payslip.month}</Text>
              <Text style={styles.date}>Phát hành {payslip.issuedAt}</Text>
            </View>
            <View style={styles.trailing}>
              <Text style={styles.net}>{payslip.net}</Text>
              <Download color={colors.textMuted} size={17} strokeWidth={2} />
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
    minHeight: 70,
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
  },
  month: {
    color: colors.text,
    fontSize: typography.bodySmall,
    fontWeight: '700',
  },
  date: {
    color: colors.textMuted,
    fontSize: 10,
    marginTop: 3,
  },
  trailing: {
    alignItems: 'flex-end',
    gap: spacing.xs,
  },
  net: {
    color: colors.text,
    fontSize: typography.caption,
    fontWeight: '700',
  },
});
