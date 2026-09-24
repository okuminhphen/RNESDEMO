import {
  Bell,
  ChevronRight,
  CircleHelp,
  Info,
  ShieldCheck,
  UserRound,
} from 'lucide-react-native';
import { StyleSheet, Text, View } from 'react-native';

import { AppCard, IconBadge } from '@/shared/components';
import { colors, spacing, typography } from '@/shared/theme';

import type { menuGroups } from '../data/more.mock';

type MenuGroupData = (typeof menuGroups)[number];
type MenuIcon = MenuGroupData['items'][number]['icon'];

const icons = {
  profile: UserRound,
  notifications: Bell,
  security: ShieldCheck,
  help: CircleHelp,
  about: Info,
} satisfies Record<MenuIcon, typeof UserRound>;

type MenuGroupProps = {
  group: MenuGroupData;
};

export function MenuGroup({ group }: MenuGroupProps) {
  return (
    <View>
      <Text style={styles.heading}>{group.title}</Text>
      <AppCard style={styles.card} variant="soft">
        {group.items.map((item, index) => {
          const Icon = icons[item.icon];
          const value = 'value' in item ? item.value : undefined;

          return (
            <View
              accessibilityRole="button"
              key={item.id}
              style={[styles.item, index > 0 && styles.divider]}
            >
              <IconBadge backgroundColor={colors.primarySoft} size={38}>
                <Icon color={colors.primary} size={20} strokeWidth={2.1} />
              </IconBadge>
              <Text style={styles.label}>{item.label}</Text>
              {value ? <Text style={styles.value}>{value}</Text> : null}
              <ChevronRight color={colors.textMuted} size={19} strokeWidth={2} />
            </View>
          );
        })}
      </AppCard>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    color: colors.text,
    fontSize: typography.body,
    fontWeight: '700',
    marginBottom: spacing.sm,
  },
  card: {
    paddingHorizontal: spacing.lg,
  },
  item: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.md,
    minHeight: 64,
  },
  divider: {
    borderTopColor: colors.border,
    borderTopWidth: 1,
  },
  label: {
    color: colors.text,
    flex: 1,
    fontSize: typography.bodySmall,
    fontWeight: '600',
  },
  value: {
    color: colors.textMuted,
    fontSize: typography.caption,
  },
});
