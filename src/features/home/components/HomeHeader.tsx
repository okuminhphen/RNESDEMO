import { Bell, UserRound } from 'lucide-react-native';
import { StyleSheet, Text, View } from 'react-native';

import { colors, radius, spacing, typography } from '@/shared/theme';

import { homeProfile } from '../data/home.mock';

export function HomeHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <UserRound color={colors.primaryDark} size={34} strokeWidth={1.8} />
      </View>

      <View style={styles.copy}>
        <Text style={styles.greeting}>{homeProfile.greeting}</Text>
        <Text style={styles.name}>{homeProfile.name}</Text>
        <Text numberOfLines={1} style={styles.subtitle}>
          {homeProfile.subtitle}
        </Text>
      </View>

      <View accessibilityLabel="Có thông báo mới" style={styles.notification}>
        <Bell color={colors.navy} size={25} strokeWidth={2} />
        <View style={styles.notificationDot} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.md,
  },
  avatar: {
    alignItems: 'center',
    backgroundColor: '#DCEEFF',
    borderColor: colors.surface,
    borderRadius: radius.pill,
    borderWidth: 3,
    height: 64,
    justifyContent: 'center',
    width: 64,
  },
  copy: {
    flex: 1,
    minWidth: 0,
  },
  greeting: {
    color: colors.textSecondary,
    fontSize: typography.body,
    lineHeight: 20,
  },
  name: {
    color: colors.text,
    fontSize: 22,
    fontWeight: '800',
    lineHeight: 27,
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: typography.bodySmall,
    lineHeight: 19,
    marginTop: 2,
  },
  notification: {
    alignItems: 'center',
    height: 42,
    justifyContent: 'center',
    position: 'relative',
    width: 42,
  },
  notificationDot: {
    backgroundColor: colors.red,
    borderColor: colors.background,
    borderRadius: radius.pill,
    borderWidth: 2,
    height: 11,
    position: 'absolute',
    right: 6,
    top: 5,
    width: 11,
  },
});
