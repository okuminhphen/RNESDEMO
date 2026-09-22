import { ChevronRight } from 'lucide-react-native';
import { StyleSheet, Text, View } from 'react-native';

import { colors, spacing, typography } from '@/shared/theme';

type SectionHeaderProps = {
  title: string;
  actionLabel: string;
};

export function SectionHeader({ title, actionLabel }: SectionHeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.action}>
        <Text style={styles.actionText}>{actionLabel}</Text>
        <ChevronRight color={colors.primary} size={17} strokeWidth={2.5} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: colors.text,
    fontSize: typography.subtitle,
    fontWeight: '700',
  },
  action: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.xs,
  },
  actionText: {
    color: colors.primary,
    fontSize: typography.bodySmall,
    fontWeight: '600',
  },
});
