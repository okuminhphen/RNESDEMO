import { CalendarPlus, ClockAlert, Laptop, TimerReset } from 'lucide-react-native';
import { StyleSheet, Text, View } from 'react-native';

import { AppCard, IconBadge } from '@/shared/components';
import { colors, spacing, typography } from '@/shared/theme';

import { requestTypes } from '../data/requests.mock';

const icons = {
  leave: { component: CalendarPlus, color: colors.primary, background: colors.primarySoft },
  overtime: { component: TimerReset, color: colors.orange, background: colors.orangeSoft },
  remote: { component: Laptop, color: colors.success, background: colors.successSoft },
  late: { component: ClockAlert, color: colors.red, background: '#FFE9EC' },
};

export function RequestTypeGrid() {
  return (
    <View>
      <Text style={styles.heading}>Tạo đơn mới</Text>
      <View style={styles.grid}>
        {requestTypes.map((requestType) => {
          const icon = icons[requestType.icon];
          const Icon = icon.component;

          return (
            <AppCard accessibilityRole="button" key={requestType.id} style={styles.card} variant="soft">
              <IconBadge backgroundColor={icon.background} size={44}>
                <Icon color={icon.color} size={24} strokeWidth={2.1} />
              </IconBadge>
              <View style={styles.copy}>
                <Text style={styles.title}>{requestType.title}</Text>
                <Text style={styles.subtitle}>{requestType.subtitle}</Text>
              </View>
            </AppCard>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    color: colors.text,
    fontSize: typography.subtitle,
    fontWeight: '700',
    marginBottom: spacing.md,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.md,
  },
  card: {
    alignItems: 'center',
    flexBasis: '47%',
    flexDirection: 'row',
    flexGrow: 1,
    gap: spacing.md,
    minHeight: 88,
    padding: spacing.md,
  },
  copy: {
    flex: 1,
    minWidth: 0,
  },
  title: {
    color: colors.text,
    fontSize: typography.bodySmall,
    fontWeight: '700',
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: 10,
    lineHeight: 15,
    marginTop: 2,
  },
});
