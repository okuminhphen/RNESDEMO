import { Clock3, FileText, House, Menu, WalletCards } from 'lucide-react-native';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { cardShadow, colors, spacing, typography } from '@/shared/theme';

import { bottomNavigation } from '../data/home.mock';
import type { BottomNavIcon } from '../types/home.types';

const navigationIcons = {
  home: House,
  time: Clock3,
  forms: FileText,
  salary: WalletCards,
  more: Menu,
} satisfies Record<BottomNavIcon, typeof House>;

export function HomeBottomNav() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingBottom: Math.max(insets.bottom, spacing.sm) }]}>
      {bottomNavigation.map((item) => {
        const Icon = navigationIcons[item.icon];
        const color = item.active ? colors.primary : colors.textSecondary;

        return (
          <View accessibilityRole="button" key={item.id} style={styles.item}>
            <Icon color={color} fill={item.active ? colors.primary : 'transparent'} size={23} strokeWidth={2} />
            <Text style={[styles.label, { color }, item.active && styles.activeLabel]}>{item.label}</Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...cardShadow,
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderTopColor: colors.border,
    borderTopWidth: 1,
    flexDirection: 'row',
    paddingTop: spacing.sm,
  },
  item: {
    alignItems: 'center',
    flex: 1,
    gap: 3,
    justifyContent: 'center',
    minHeight: 48,
  },
  label: {
    fontSize: typography.caption,
    fontWeight: '500',
  },
  activeLabel: {
    fontWeight: '700',
  },
});
