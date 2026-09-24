import { useRouter } from 'expo-router';
import { Bell, ScanLine, UserRound } from 'lucide-react-native';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { cardShadow, colors, radius, spacing, typography } from '@/shared/theme';

import { homeProfile } from '../data/home.mock';

export function HomeHeader() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <UserRound color={colors.primaryDark} size={28} strokeWidth={1.8} />
      </View>

      <View style={styles.copy}>
        <Text style={styles.greeting}>{homeProfile.greeting}</Text>
        <Text style={styles.name}>{homeProfile.name}</Text>
        <Text numberOfLines={1} style={styles.subtitle}>
          {homeProfile.subtitle}
        </Text>
      </View>

      <View style={styles.actions}>
        <Pressable
          accessibilityLabel="Xem thông báo"
          accessibilityRole="button"
          onPress={() => router.push('/requests/notifications')}
          style={styles.notification}
        >
          <Bell color={colors.navy} size={22} strokeWidth={2} />
          <View style={styles.notificationDot} />
        </Pressable>

        <View accessibilityLabel="Quét mã" style={styles.scan}>
          <ScanLine color={colors.navy} size={22} strokeWidth={2} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.sm,
  },
  avatar: {
    alignItems: 'center',
    backgroundColor: '#DCEEFF',
    borderColor: colors.surface,
    borderRadius: radius.pill,
    borderWidth: 3,
    height: 48,
    justifyContent: 'center',
    width: 48,
  },
  copy: {
    flex: 1,
    minWidth: 0,
  },
  actions: {
    flexDirection: 'row',
    gap: spacing.xs,
  },
  greeting: {
    color: colors.textSecondary,
    fontSize: typography.caption,
    lineHeight: 16,
  },
  name: {
    color: colors.text,
    fontSize: typography.subtitle,
    fontWeight: '800',
    lineHeight: 22,
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: 11,
    lineHeight: 15,
  },
  notification: {
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: radius.pill,
    borderWidth: 1,
    ...cardShadow,
    height: 38,
    justifyContent: 'center',
    position: 'relative',
    width: 38,
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
  scan: {
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: radius.md,
    borderWidth: 1,
    ...cardShadow,
    height: 38,
    justifyContent: 'center',
    width: 38,
  },
});
