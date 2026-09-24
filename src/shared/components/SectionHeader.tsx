import { ChevronRight } from 'lucide-react-native';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, spacing, typography } from '@/shared/theme';

type SectionHeaderProps = {
  title: string;
  actionLabel: string;
  onAction?: () => void;
};

export function SectionHeader({ title, actionLabel, onAction }: SectionHeaderProps) {
  const actionContent = (
    <>
      <Text style={styles.actionText}>{actionLabel}</Text>
      <ChevronRight color={colors.primary} size={17} strokeWidth={2.5} />
    </>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {onAction ? (
        <Pressable
          accessibilityLabel={actionLabel}
          accessibilityRole="button"
          onPress={onAction}
          style={styles.action}
        >
          {actionContent}
        </Pressable>
      ) : (
        <View style={styles.action}>{actionContent}</View>
      )}
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
