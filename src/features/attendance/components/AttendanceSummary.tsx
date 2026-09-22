import { BriefcaseBusiness, CircleCheckBig, ClockAlert } from 'lucide-react-native';
import { StyleSheet, Text, View } from 'react-native';

import { AppCard, IconBadge } from '@/shared/components';
import { colors, spacing, typography } from '@/shared/theme';

import { attendanceStats } from '../data/attendance.mock';

const icons = {
  work: { component: BriefcaseBusiness, color: colors.primary, background: colors.primarySoft },
  'on-time': { component: CircleCheckBig, color: colors.success, background: colors.successSoft },
  leave: { component: ClockAlert, color: colors.orange, background: colors.orangeSoft },
};

export function AttendanceSummary() {
  return (
    <View style={styles.container}>
      {attendanceStats.map((stat) => {
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
