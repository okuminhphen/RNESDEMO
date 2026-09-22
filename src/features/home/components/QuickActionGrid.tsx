import {
  CalendarDays,
  CircleCheckBig,
  FileText,
  Plane,
  UserRound,
  WalletCards,
} from 'lucide-react-native';
import { StyleSheet, Text, View } from 'react-native';

import { AppCard, IconBadge } from '@/shared/components';
import { colors, spacing, typography } from '@/shared/theme';

import { quickActions } from '../data/home.mock';
import type { QuickActionIcon } from '../types/home.types';

const actionIcons = {
  calendar: CalendarDays,
  wallet: WalletCards,
  plane: Plane,
  document: FileText,
  approval: CircleCheckBig,
  employee: UserRound,
} satisfies Record<QuickActionIcon, typeof CalendarDays>;

export function QuickActionGrid() {
  return (
    <View style={styles.grid}>
      {quickActions.map((action) => {
        const Icon = actionIcons[action.icon];

        return (
          <AppCard accessibilityRole="button" key={action.id} style={styles.item}>
            <IconBadge backgroundColor={action.backgroundColor} size={44}>
              <Icon color={action.color} size={26} strokeWidth={2.2} />
            </IconBadge>
            <Text style={styles.label}>{action.title}</Text>
          </AppCard>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.md,
  },
  item: {
    alignItems: 'center',
    flexBasis: '30%',
    flexGrow: 1,
    justifyContent: 'center',
    minHeight: 112,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.md,
  },
  label: {
    color: colors.text,
    fontSize: typography.bodySmall,
    fontWeight: '600',
    lineHeight: 18,
    marginTop: spacing.sm,
    textAlign: 'center',
  },
});
