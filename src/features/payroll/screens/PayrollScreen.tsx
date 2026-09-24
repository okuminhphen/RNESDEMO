import { useRouter } from 'expo-router';
import { ChevronLeft, ChevronRight } from 'lucide-react-native';
import { useRef, useState } from 'react';
import { Alert, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { ScreenContainer } from '@/shared/components';
import { colors } from '@/shared/theme';

import { PayslipList } from '../components/PayslipList';
import { SalaryBreakdownCard } from '../components/SalaryBreakdownCard';
import { SalaryOverviewCard } from '../components/SalaryOverviewCard';
import { payslips } from '../data/payroll.mock';

export function PayrollScreen() {
  const router = useRouter();
  const scrollRef = useRef<ScrollView>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = payslips[selectedIndex];

  const selectPayslip = (id: string) => {
    const index = payslips.findIndex((item) => item.id === id);
    if (index < 0) return;
    setSelectedIndex(index);
    scrollRef.current?.scrollTo({ y: 0, animated: true });
  };

  const handleBack = () => {
    if (router.canGoBack()) router.back();
    else router.navigate('/');
  };

  const changeMonth = (direction: -1 | 1) => {
    const nextIndex = selectedIndex + direction;
    if (nextIndex < 0 || nextIndex >= payslips.length) {
      Alert.alert('Chưa có phiếu lương', 'Hiện chưa có dữ liệu mẫu cho tháng này.');
      return;
    }
    setSelectedIndex(nextIndex);
  };

  return (
    <ScreenContainer>
      <ScrollView ref={scrollRef} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Pressable accessibilityLabel="Quay lại" accessibilityRole="button" onPress={handleBack} style={styles.backButton}>
            <ChevronLeft color={colors.text} size={22} strokeWidth={2.5} />
          </Pressable>
          <Text style={styles.screenTitle}>Phiếu lương</Text>
          <View style={styles.headerSpacer} />
        </View>

        <View style={styles.monthBar}>
          <Pressable
            accessibilityLabel="Tháng trước"
            accessibilityRole="button"
            onPress={() => changeMonth(1)}
            style={styles.monthArrow}
          >
            <ChevronLeft color="#136FDF" size={22} strokeWidth={2.3} />
          </Pressable>
          <Text style={styles.monthLabel}>Tháng {selected.month}/{selected.year}</Text>
          <Pressable
            accessibilityLabel="Tháng sau"
            accessibilityRole="button"
            onPress={() => changeMonth(-1)}
            style={styles.monthArrow}
          >
            <ChevronRight color="#136FDF" size={22} strokeWidth={2.3} />
          </Pressable>
        </View>

        <SalaryOverviewCard payslip={selected} />
        <SalaryBreakdownCard payslip={selected} />
        <PayslipList
          onSeeAll={() => Alert.alert('Lịch sử phiếu lương', 'Hiện có 3 phiếu lương mẫu từ tháng 7 đến tháng 9/2025.')}
          onSelect={selectPayslip}
          payslips={payslips}
        />
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  content: { gap: 9, paddingBottom: 18, paddingHorizontal: 14, paddingTop: 2 },
  header: { alignItems: 'center', flexDirection: 'row', height: 43, justifyContent: 'space-between' },
  backButton: { alignItems: 'center', backgroundColor: colors.surface, borderRadius: 10, height: 34, justifyContent: 'center', width: 34 },
  headerSpacer: { width: 34 },
  screenTitle: { color: colors.text, fontSize: 19, fontWeight: '800' },
  monthBar: { alignItems: 'center', backgroundColor: '#EAF3FF', borderRadius: 11, flexDirection: 'row', height: 36, justifyContent: 'space-between', marginBottom: 2 },
  monthArrow: { alignItems: 'center', height: 36, justifyContent: 'center', width: 42 },
  monthLabel: { color: colors.text, fontSize: 17, fontWeight: '800' },
});
