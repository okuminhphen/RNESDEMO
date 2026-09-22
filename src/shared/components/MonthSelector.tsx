import { ChevronLeft, ChevronRight } from 'lucide-react-native';
import { StyleSheet, Text, View } from 'react-native';

import { colors, radius, spacing, typography } from '@/shared/theme';

type MonthSelectorProps = {
  label: string;
};

export function MonthSelector({ label }: MonthSelectorProps) {
  return (
    <View style={styles.container}>
      <View accessibilityRole="button" style={styles.button}>
        <ChevronLeft color={colors.textSecondary} size={20} strokeWidth={2.2} />
      </View>
      <Text style={styles.label}>{label}</Text>
      <View accessibilityRole="button" style={styles.button}>
        <ChevronRight color={colors.textSecondary} size={20} strokeWidth={2.2} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: radius.md,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: spacing.sm,
  },
  button: {
    alignItems: 'center',
    backgroundColor: colors.surfaceSoft,
    borderRadius: radius.sm,
    height: 36,
    justifyContent: 'center',
    width: 36,
  },
  label: {
    color: colors.text,
    fontSize: typography.body,
    fontWeight: '700',
  },
});
