import { WalletCards } from 'lucide-react-native';
import { ScrollView, StyleSheet } from 'react-native';

import { IconBadge, MonthSelector, PageHeader, ScreenContainer } from '@/shared/components';
import { colors, spacing } from '@/shared/theme';

import { PayslipList } from '../components/PayslipList';
import { SalaryBreakdownCard } from '../components/SalaryBreakdownCard';
import { SalaryOverviewCard } from '../components/SalaryOverviewCard';

export function PayrollScreen() {
  return (
    <ScreenContainer>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <PageHeader
          action={
            <IconBadge backgroundColor={colors.orangeSoft} size={46}>
              <WalletCards color={colors.orange} size={25} strokeWidth={2.2} />
            </IconBadge>
          }
          subtitle="Theo dõi thu nhập và phiếu lương"
          title="Lương"
        />
        <MonthSelector label="Tháng 9, 2025" />
        <SalaryOverviewCard />
        <SalaryBreakdownCard />
        <PayslipList />
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
