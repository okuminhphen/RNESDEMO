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
        <MonthlyOverviewCard />
        <QuickActionGrid />
        <NotificationCard />
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  content: {
    gap: spacing.sm,
    paddingBottom: spacing.md,
    paddingHorizontal: spacing.md,
    paddingTop: spacing.sm,
  },
});
