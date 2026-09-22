import { FilePlus2 } from 'lucide-react-native';
import { ScrollView, StyleSheet } from 'react-native';

import { IconBadge, PageHeader, ScreenContainer } from '@/shared/components';
import { colors, spacing } from '@/shared/theme';

import { RecentRequestList } from '../components/RecentRequestList';
import { RequestOverview } from '../components/RequestOverview';
import { RequestTypeGrid } from '../components/RequestTypeGrid';

export function RequestsScreen() {
  return (
    <ScreenContainer>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <PageHeader
          action={
            <IconBadge backgroundColor={colors.primarySoft} size={46}>
              <FilePlus2 color={colors.primary} size={25} strokeWidth={2.2} />
            </IconBadge>
          }
          subtitle="Tạo và theo dõi các yêu cầu nhân sự"
          title="Đơn từ"
        />
        <RequestOverview />
        <RequestTypeGrid />
        <RecentRequestList />
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
