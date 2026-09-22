import { LogOut, Settings } from 'lucide-react-native';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { IconBadge, PageHeader, ScreenContainer } from '@/shared/components';
import { colors, radius, spacing, typography } from '@/shared/theme';

import { MenuGroup } from '../components/MenuGroup';
import { ProfileCard } from '../components/ProfileCard';
import { menuGroups } from '../data/more.mock';

export function MoreScreen() {
  return (
    <ScreenContainer>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <PageHeader
          action={
            <IconBadge backgroundColor={colors.primarySoft} size={46}>
              <Settings color={colors.primary} size={25} strokeWidth={2.2} />
            </IconBadge>
          }
          subtitle="Tài khoản, cài đặt và hỗ trợ"
          title="Khác"
        />
        <ProfileCard />
        {menuGroups.map((group) => (
          <MenuGroup group={group} key={group.id} />
        ))}
        <View accessibilityRole="button" style={styles.logoutButton}>
          <LogOut color={colors.red} size={20} strokeWidth={2.2} />
          <Text style={styles.logoutText}>Đăng xuất</Text>
        </View>
        <Text style={styles.footer}>RNESDEMO · Enterprise HRM</Text>
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  content: {
    gap: spacing.lg,
    paddingBottom: spacing.xxl,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
  },
  logoutButton: {
    alignItems: 'center',
    backgroundColor: '#FFF1F3',
    borderColor: '#FFD8DE',
    borderRadius: radius.md,
    borderWidth: 1,
    flexDirection: 'row',
    gap: spacing.sm,
    justifyContent: 'center',
    minHeight: 52,
  },
  logoutText: {
    color: colors.red,
    fontSize: typography.body,
    fontWeight: '700',
  },
  footer: {
    color: colors.textMuted,
    fontSize: typography.caption,
    textAlign: 'center',
  },
});
