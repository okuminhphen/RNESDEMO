import type { PropsWithChildren } from 'react';
import { StyleSheet, View, type ViewProps } from 'react-native';

import { cardShadow, colors, radius } from '@/shared/theme';

type AppCardProps = PropsWithChildren<ViewProps & { variant?: 'default' | 'soft' }>;

export function AppCard({ children, style, variant = 'default', ...props }: AppCardProps) {
  return (
    <View style={[styles.card, variant === 'soft' && styles.soft, style]} {...props}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: radius.lg,
    borderWidth: 1,
    ...cardShadow,
  },
  soft: {
    borderRadius: radius.md,
    borderWidth: 0,
    boxShadow: '0px 2px 14px rgba(42, 81, 140, 0.07)',
    elevation: 0,
    shadowOpacity: 0,
  },
});
