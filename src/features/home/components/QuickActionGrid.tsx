import {
  CalendarDays,
  ClipboardPlus,
  CircleCheckBig,
  FileText,
  WalletCards,
} from 'lucide-react-native';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { AppCard, IconBadge } from '@/shared/components';
import { colors, radius, spacing, typography } from '@/shared/theme';

import { quickActions } from '../data/home.mock';
import type { QuickActionIcon } from '../types/home.types';

const actionIcons = {
  calendar: CalendarDays,
  wallet: WalletCards,
  'create-request': ClipboardPlus,
  document: FileText,
  approval: CircleCheckBig,
  schedule: CalendarDays,
} satisfies Record<QuickActionIcon, typeof CalendarDays>;

export function QuickActionGrid() {
  const router = useRouter();

  return (
    <View style={styles.grid}>
      {[quickActions.slice(0, 3), quickActions.slice(3, 6)].map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((action) => {
            const Icon = actionIcons[action.icon];

            return (
              <Pressable
                accessibilityLabel={action.title}
                accessibilityRole="link"
                key={action.id}
                onPress={() => router.push(action.href)}
                style={({ pressed }) => [styles.item, pressed && styles.pressed]}
              >
                <AppCard style={styles.card} variant="soft">
                  {action.badge ? <View style={styles.badge}><Text style={styles.badgeText}>{action.badge}</Text></View> : null}
                  <IconBadge backgroundColor={action.backgroundColor} size={34}>
                    <Icon color={action.color} size={22} strokeWidth={2.2} />
                  </IconBadge>
                  <Text numberOfLines={1} style={styles.label}>{action.title}</Text>
                  <Text numberOfLines={3} style={styles.description}>{action.description}</Text>
                </AppCard>
              </Pressable>
            );
          })}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    gap: spacing.sm,
  },
  row: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  item: {
    flex: 1,
    minWidth: 0,
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 104,
    paddingHorizontal: spacing.sm,
    paddingVertical: 6,
    width: '100%',
  },
  badge: {
    alignItems: 'center',
    backgroundColor: colors.red,
    borderColor: colors.surface,
    borderRadius: radius.pill,
    borderWidth: 2,
    height: 24,
    justifyContent: 'center',
    position: 'absolute',
    right: spacing.xs,
    top: spacing.xs,
    width: 24,
  },
  badgeText: {
    color: colors.surface,
    fontSize: 11,
    fontWeight: '800',
  },
  pressed: {
    opacity: 0.72,
    transform: [{ scale: 0.98 }],
  },
  label: {
    color: colors.text,
    fontSize: typography.caption,
    fontWeight: '600',
    lineHeight: 15,
    marginTop: spacing.xs,
    textAlign: 'center',
  },
  description: {
    color: colors.textSecondary,
    fontSize: 10,
    lineHeight: 13,
    marginTop: 2,
    textAlign: 'center',
  },
});
