import { Clock3 } from 'lucide-react-native';
import { ScrollView, StyleSheet } from 'react-native';

import { IconBadge, MonthSelector, PageHeader, ScreenContainer } from '@/shared/components';
import { colors, spacing } from '@/shared/theme';

import { AttendanceCalendar } from '../components/AttendanceCalendar';
import { AttendanceRecordList } from '../components/AttendanceRecordList';
import { AttendanceSummary } from '../components/AttendanceSummary';

export function AttendanceScreen() {
  return (
    <ScreenContainer>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <PageHeader
          action={
            <IconBadge backgroundColor={colors.primarySoft} size={46}>
              <Clock3 color={colors.primary} size={25} strokeWidth={2.2} />
            </IconBadge>
          }
          subtitle="Theo dõi ngày công và lịch sử vào ra"
          title="Công của tôi"
        />
        <MonthSelector label="Tháng 9, 2025" />
        <AttendanceSummary />
        <AttendanceCalendar />
        <AttendanceRecordList />
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
});
