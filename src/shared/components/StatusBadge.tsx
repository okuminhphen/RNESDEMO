import { StyleSheet, Text, View } from 'react-native';

import { colors, radius, spacing, typography } from '@/shared/theme';

type StatusTone = 'success' | 'warning' | 'danger' | 'info' | 'neutral';

type StatusBadgeProps = {
  label: string;
  tone?: StatusTone;
};

const toneStyles: Record<StatusTone, { backgroundColor: string; color: string }> = {
  success: { backgroundColor: colors.successSoft, color: '#15945A' },
  warning: { backgroundColor: colors.orangeSoft, color: '#C76C09' },
  danger: { backgroundColor: '#FFE9EC', color: '#D9364A' },
  info: { backgroundColor: colors.primarySoft, color: colors.primaryDark },
  neutral: { backgroundColor: '#EEF1F5', color: colors.textSecondary },
};

export function StatusBadge({ label, tone = 'neutral' }: StatusBadgeProps) {
  const toneStyle = toneStyles[tone];

  return (
    <View style={[styles.badge, { backgroundColor: toneStyle.backgroundColor }]}>
      <Text style={[styles.label, { color: toneStyle.color }]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    alignSelf: 'flex-start',
    borderRadius: radius.pill,
    paddingHorizontal: spacing.sm,
    paddingVertical: 5,
  },
  label: {
    fontSize: typography.caption,
    fontWeight: '700',
  },
});
