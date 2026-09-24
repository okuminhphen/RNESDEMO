import { Building2, Mail, UserRound } from 'lucide-react-native';
import { StyleSheet, Text, View } from 'react-native';

import { AppCard } from '@/shared/components';
import { colors, radius, spacing, typography } from '@/shared/theme';

import { profile } from '../data/more.mock';

export function ProfileCard() {
  return (
    <AppCard style={styles.card} variant="soft">
      <View style={styles.topRow}>
        <View style={styles.avatar}>
          <UserRound color={colors.primaryDark} size={38} strokeWidth={1.8} />
        </View>
        <View style={styles.copy}>
          <Text style={styles.name}>{profile.name}</Text>
          <Text style={styles.employeeCode}>{profile.employeeCode}</Text>
          <Text style={styles.position}>{profile.position}</Text>
        </View>
      </View>

      <View style={styles.details}>
        <View style={styles.detailRow}>
          <Building2 color={colors.textSecondary} size={17} strokeWidth={2} />
          <Text style={styles.detailText}>{profile.department}</Text>
        </View>
        <View style={styles.detailRow}>
          <Mail color={colors.textSecondary} size={17} strokeWidth={2} />
          <Text style={styles.detailText}>{profile.email}</Text>
        </View>
      </View>
    </AppCard>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: spacing.lg,
  },
  topRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.md,
  },
  avatar: {
    alignItems: 'center',
    backgroundColor: colors.primarySoft,
    borderRadius: radius.pill,
    height: 72,
    justifyContent: 'center',
    width: 72,
  },
  copy: {
    flex: 1,
  },
  name: {
    color: colors.text,
    fontSize: 20,
    fontWeight: '800',
  },
  employeeCode: {
    color: colors.primary,
    fontSize: typography.caption,
    fontWeight: '700',
    marginTop: 3,
  },
  position: {
    color: colors.textSecondary,
    fontSize: typography.bodySmall,
    marginTop: 3,
  },
  details: {
    backgroundColor: colors.surfaceSoft,
    borderRadius: radius.md,
    gap: spacing.sm,
    marginTop: spacing.lg,
    padding: spacing.md,
  },
  detailRow: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.sm,
  },
  detailText: {
    color: colors.textSecondary,
    flex: 1,
    fontSize: typography.bodySmall,
  },
});
