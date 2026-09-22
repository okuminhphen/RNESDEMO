import type { PropsWithChildren } from 'react';
import { StyleSheet, View, type ViewProps } from 'react-native';

import { cardShadow, colors, radius } from '@/shared/theme';

type AppCardProps = PropsWithChildren<ViewProps>;

export function AppCard({ children, style, ...props }: AppCardProps) {
  return (
    <View style={[styles.card, style]} {...props}>
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
});
