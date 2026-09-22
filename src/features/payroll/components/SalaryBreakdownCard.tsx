import { CircleMinus, CirclePlus } from 'lucide-react-native';
import { StyleSheet, Text, View } from 'react-native';

import { AppCard } from '@/shared/components';
import { colors, radius, spacing, typography } from '@/shared/theme';

import { salaryBreakdown } from '../data/payroll.mock';

export function SalaryBreakdownCard() {
  return (
    <AppCard style={styles.card}>
      <Text style={styles.heading}>Chi tiết thu nhập</Text>
      <View style={styles.list}>
        {salaryBreakdown.map((item, index) => {
          const positive = item.tone === 'positive';
          const Icon = positive ? CirclePlus : CircleMinus;

          return (
            <View key={item.id} style={[styles.row, index > 0 && styles.divider]}>
              <View
                style={[
                  styles.icon,
                  { backgroundColor: positive ? colors.successSoft : '#FFE9EC' },
                ]}
              >
                <Icon color={positive ? colors.success : colors.red} size={20} strokeWidth={2.1} />
              </View>
              <Text style={styles.label}>{item.label}</Text>
              <Text style={[styles.value, !positive && styles.negativeValue]}>{item.value}</Text>
            </View>
          );
        })}
      </View>
      <View style={styles.totalRow}>
        <Text style={styles.totalLabel}>Tổng thực nhận</Text>
        <Text style={styles.totalValue}>19.434.000 ₫</Text>
      </View>
    </AppCard>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: spacing.lg,
  },
  heading: {
    color: colors.text,
    fontSize: typography.subtitle,
    fontWeight: '700',
  },
  list: {
    marginTop: spacing.md,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.sm,
    minHeight: 54,
  },
  divider: {
    borderTopColor: colors.border,
    borderTopWidth: 1,
  },
  icon: {
    alignItems: 'center',
    borderRadius: radius.pill,
    height: 32,
    justifyContent: 'center',
    width: 32,
  },
  label: {
    color: colors.textSecondary,
    flex: 1,
    fontSize: typography.bodySmall,
  },
  value: {
    color: colors.text,
    fontSize: typography.bodySmall,
    fontWeight: '700',
  },
  negativeValue: {
    color: colors.red,
  },
  totalRow: {
    alignItems: 'center',
    backgroundColor: colors.surfaceSoft,
    borderRadius: radius.md,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spacing.md,
    padding: spacing.md,
  },
  totalLabel: {
    color: colors.text,
    fontSize: typography.bodySmall,
    fontWeight: '700',
  },
  totalValue: {
    color: colors.primary,
    fontSize: typography.body,
    fontWeight: '800',
  },
});
