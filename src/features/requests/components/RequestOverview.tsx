import { CircleCheckBig, CircleX, Clock3 } from 'lucide-react-native';
import { StyleSheet, Text, View } from 'react-native';

import { AppCard, IconBadge } from '@/shared/components';
import { colors, spacing, typography } from '@/shared/theme';

import { requestStats } from '../data/requests.mock';

const icons = {
  pending: { component: Clock3, color: colors.orange, background: colors.orangeSoft },
  approved: { component: CircleCheckBig, color: colors.success, background: colors.successSoft },
  rejected: { component: CircleX, color: colors.red, background: '#FFE9EC' },
};

export function RequestOverview() {
  return (
    <View style={styles.container}>
      {requestStats.map((stat) => {
        const icon = icons[stat.icon];
        const Icon = icon.component;

        return (
          <AppCard key={stat.id} style={styles.card}>
            <IconBadge backgroundColor={icon.background} size={38}>
              <Icon color={icon.color} size={21} strokeWidth={2.2} />
            </IconBadge>
            <Text style={styles.value}>{stat.value}</Text>
            <Text style={styles.label}>{stat.label}</Text>
          </AppCard>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  card: {
    flex: 1,
    padding: spacing.md,
  },
  value: {
    color: colors.text,
    fontSize: 22,
    fontWeight: '800',
    marginTop: spacing.sm,
  },
  label: {
    color: colors.textSecondary,
    fontSize: typography.caption,
    marginTop: 2,
  },
});
