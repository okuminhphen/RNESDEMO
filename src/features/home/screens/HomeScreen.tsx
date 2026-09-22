import { ScrollView, StyleSheet } from 'react-native';

import { ScreenContainer } from '@/shared/components';
import { spacing } from '@/shared/theme';

import {
  AttendanceCard,
  HomeHeader,
  MonthlyOverviewCard,
  NotificationCard,
  QuickActionGrid,
} from '../components';

export function HomeScreen() {
  return (
    <ScreenContainer>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <HomeHeader />
        <AttendanceCard />
        <QuickActionGrid />
        <MonthlyOverviewCard />
        <NotificationCard />
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  content: {
    gap: spacing.lg,
    paddingBottom: spacing.xl,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
  },
});
