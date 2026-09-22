import type { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

import { radius } from '@/shared/theme';

type IconBadgeProps = {
  children: ReactNode;
  backgroundColor: string;
  size?: number;
};

export function IconBadge({ children, backgroundColor, size = 42 }: IconBadgeProps) {
  return (
    <View
      style={[
        styles.container,
        { backgroundColor, borderRadius: Math.min(radius.md, size / 3), height: size, width: size },
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
