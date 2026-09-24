import { ChevronRight, FileText } from 'lucide-react-native';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors } from '@/shared/theme';

import { formatVnd, getNetSalary, type Payslip } from '../data/payroll.mock';

type Props = {
  payslips: Payslip[];
  onSelect: (id: string) => void;
  onSeeAll: () => void;
};

export function PayslipList({ payslips, onSelect, onSeeAll }: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>Lịch sử phiếu lương</Text>
        <Pressable accessibilityRole="button" onPress={onSeeAll} style={styles.seeAll}>
          <Text style={styles.seeAllText}>Xem tất cả</Text>
          <ChevronRight color="#1469DD" size={17} strokeWidth={2.4} />
        </Pressable>
      </View>
      {payslips.map((payslip, index) => (
        <Pressable
          accessibilityLabel={`Xem phiếu lương tháng ${payslip.month}/${payslip.year}`}
          accessibilityRole="button"
          key={payslip.id}
          onPress={() => onSelect(payslip.id)}
          style={[styles.row, index > 0 && styles.divider]}
        >
          <View style={styles.documentIcon}><FileText color="#1A71E5" size={24} strokeWidth={2.3} /></View>
          <View style={styles.copy}>
            <Text style={styles.month}>Tháng {payslip.month}/{payslip.year}</Text>
            <Text style={styles.net}>Thực lĩnh: <Text style={styles.netValue}>{formatVnd(getNetSalary(payslip))}</Text></Text>
            <Text style={styles.date}>Ngày phát hành: {payslip.issuedAt}</Text>
          </View>
          <View style={styles.paid}>
            <View style={styles.paidDot}><Text style={styles.check}>✓</Text></View>
            <Text style={styles.paidText}>Đã thanh toán</Text>
          </View>
          <ChevronRight color="#79A4D9" size={17} strokeWidth={2.2} />
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: colors.surface, borderRadius: 14, paddingHorizontal: 14, paddingTop: 13, paddingBottom: 4 },
  header: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 2 },
  title: { color: colors.text, fontSize: 16, fontWeight: '800' },
  seeAll: { alignItems: 'center', flexDirection: 'row', gap: 2, paddingVertical: 4 },
  seeAllText: { color: '#1268D7', fontSize: 12 },
  row: { alignItems: 'center', flexDirection: 'row', gap: 8, minHeight: 55 },
  divider: { borderTopColor: '#EEF1F6', borderTopWidth: 1 },
  documentIcon: { alignItems: 'center', backgroundColor: '#EDF5FF', borderRadius: 28, height: 41, justifyContent: 'center', width: 41 },
  copy: { flex: 1, minWidth: 0 },
  month: { color: colors.text, fontSize: 12, fontWeight: '800' },
  net: { color: colors.textSecondary, fontSize: 11, marginTop: 2 },
  netValue: { color: '#1763CF', fontWeight: '800' },
  date: { color: colors.textSecondary, fontSize: 10, marginTop: 2 },
  paid: { alignItems: 'center', backgroundColor: '#E9FBF4', borderRadius: 18, flexDirection: 'row', gap: 4, paddingHorizontal: 6, paddingVertical: 5 },
  paidDot: { alignItems: 'center', backgroundColor: '#22BD90', borderRadius: 9, height: 15, justifyContent: 'center', width: 15 },
  check: { color: colors.surface, fontSize: 10, fontWeight: '900', lineHeight: 13 },
  paidText: { color: '#148E6C', fontSize: 9, fontWeight: '700' },
});
