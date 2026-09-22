import { LinearGradient } from 'expo-linear-gradient';
import { Eye, TrendingUp, WalletCards } from 'lucide-react-native';
import { StyleSheet, Text, View } from 'react-native';

import { colors, radius, spacing, typography } from '@/shared/theme';

export function SalaryOverviewCard() {
  return (
    <LinearGradient
      colors={[colors.primary, '#0861D6']}
      end={{ x: 1, y: 1 }}
      start={{ x: 0, y: 0 }}
      style={styles.card}
    >
      <View style={styles.header}>
        <View style={styles.titleRow}>
          <WalletCards color={colors.surface} size={22} strokeWidth={2.1} />
          <Text style={styles.label}>Thực nhận tháng này</Text>
        </View>
        <View accessibilityRole="button" style={styles.eyeButton}>
          <Eye color={colors.surface} size={19} strokeWidth={2} />
        </View>
      </View>

      <Text style={styles.amount}>19.434.000 ₫</Text>

      <View style={styles.footer}>
        <View style={styles.comparison}>
          <TrendingUp color="#A9F5D2" size={17} strokeWidth={2.3} />
          <Text style={styles.comparisonText}>Tăng 2,7% so với tháng trước</Text>
        </View>
        <Text style={styles.paymentDate}>Dự kiến trả 30/09</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: radius.xl,
    padding: spacing.xl,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.sm,
  },
  label: {
    color: 'rgba(255,255,255,0.85)',
    fontSize: typography.bodySmall,
    fontWeight: '600',
  },
  eyeButton: {
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.16)',
    borderRadius: radius.pill,
    height: 36,
    justifyContent: 'center',
    width: 36,
  },
  amount: {
    color: colors.surface,
    fontSize: 32,
    fontWeight: '800',
    letterSpacing: -0.5,
    marginTop: spacing.lg,
  },
  footer: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    gap: spacing.sm,
    justifyContent: 'space-between',
    marginTop: spacing.xl,
  },
  comparison: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
    gap: spacing.xs,
  },
  comparisonText: {
    color: '#D8FCEC',
    fontSize: 11,
    fontWeight: '600',
  },
  paymentDate: {
    color: 'rgba(255,255,255,0.72)',
    fontSize: 10,
  },
});
