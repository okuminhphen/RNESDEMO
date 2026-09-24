import { CircleMinus, Clock3, Coins, Gift, Wallet } from 'lucide-react-native';
import { StyleSheet, Text, View } from 'react-native';

import { colors } from '@/shared/theme';

import { formatVnd, getNetSalary, type Payslip } from '../data/payroll.mock';
import { PayrollIllustration } from './PayrollIllustration';

type Props = { payslip: Payslip };

const breakdownIcons = [Wallet, Coins, Clock3, Gift, CircleMinus] as const;
const iconColors = ['#2D7DE7', '#17BC8C', '#F7A83A', '#F45172', '#EB4B58'] as const;
const iconBackgrounds = ['#EBF4FF', '#E8FBF5', '#FFF5E8', '#FFF0F3', '#FFF0F2'] as const;

export function SalaryOverviewCard({ payslip }: Props) {
  const rows = [
    { label: 'Lương cơ bản', value: payslip.baseSalary },
    { label: 'Phụ cấp', value: payslip.allowance },
    { label: 'Tăng ca', value: payslip.overtimePay },
    { label: 'Thưởng', value: payslip.bonus },
    { label: 'Khấu trừ', value: -payslip.deduction },
  ];

  return (
    <View style={styles.card}>
      <View style={styles.headingRow}>
        <Text style={styles.heading}>Phiếu lương tháng {payslip.month}/{payslip.year}</Text>
        <View style={styles.status}>
          <View style={styles.statusDot}><Text style={styles.check}>✓</Text></View>
          <Text style={styles.statusText}>Đã phát hành</Text>
        </View>
      </View>
      <Text style={styles.issued}>Ngày phát hành: {payslip.issuedAt}</Text>

      <View style={styles.hero}>
        <View style={styles.amountPanel}>
          <Text style={styles.amountLabel}>Thực lĩnh</Text>
          <Text numberOfLines={1} adjustsFontSizeToFit style={styles.amount}>
            {formatVnd(getNetSalary(payslip))}
          </Text>
        </View>
        <View style={styles.illustration}><PayrollIllustration /></View>
      </View>

      <View style={styles.rows}>
        {rows.map((row, index) => {
          const Icon = breakdownIcons[index];
          return (
            <View key={row.label} style={[styles.row, index > 0 && styles.divider]}>
              <View style={[styles.icon, { backgroundColor: iconBackgrounds[index] }]}>
                <Icon color={iconColors[index]} size={18} strokeWidth={2.4} />
              </View>
              <Text style={styles.label}>{row.label}</Text>
              <Text style={[styles.value, row.value < 0 && styles.deduction]}>
                {row.value < 0 ? '- ' : ''}{formatVnd(Math.abs(row.value))}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: colors.surface, borderRadius: 14, paddingHorizontal: 14, paddingTop: 12, paddingBottom: 9 },
  headingRow: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', gap: 4 },
  heading: { color: colors.text, fontSize: 17, fontWeight: '800', flexShrink: 1 },
  status: { alignItems: 'center', backgroundColor: '#E9FBF4', borderRadius: 20, flexDirection: 'row', gap: 6, paddingHorizontal: 9, paddingVertical: 5 },
  statusDot: { alignItems: 'center', backgroundColor: '#20BA8D', borderRadius: 10, height: 16, justifyContent: 'center', width: 16 },
  check: { color: colors.surface, fontSize: 11, fontWeight: '900', lineHeight: 14 },
  statusText: { color: '#128D6A', fontSize: 11, fontWeight: '700' },
  issued: { color: colors.textSecondary, fontSize: 12, marginTop: 3 },
  hero: { alignItems: 'center', flexDirection: 'row', height: 98, marginTop: 3 },
  amountPanel: { backgroundColor: '#EEF5FF', borderRadius: 12, flex: 1, height: 82, justifyContent: 'center', paddingHorizontal: 16 },
  amountLabel: { color: colors.text, fontSize: 14, fontWeight: '700' },
  amount: { color: '#1464CF', fontSize: 29, fontWeight: '800', letterSpacing: -0.5, marginTop: 3 },
  illustration: { alignItems: 'center', justifyContent: 'center', marginLeft: -5, width: 138 },
  rows: { marginTop: 1 },
  row: { alignItems: 'center', flexDirection: 'row', height: 34, gap: 10 },
  divider: { borderTopColor: '#EDF1F6', borderTopWidth: 1 },
  icon: { alignItems: 'center', borderRadius: 18, height: 27, justifyContent: 'center', width: 27 },
  label: { color: colors.text, flex: 1, fontSize: 13 },
  value: { color: colors.text, fontSize: 13, fontWeight: '700' },
  deduction: { color: '#D83441' },
});
