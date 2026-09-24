import { CalendarDays, CircleMinus, Clock3 } from 'lucide-react-native';
import { StyleSheet, Text, View } from 'react-native';

import { colors } from '@/shared/theme';

import { formatVnd, type Payslip } from '../data/payroll.mock';

export function SalaryBreakdownCard({ payslip }: { payslip: Payslip }) {
  return (
    <View style={styles.card}>
      <View style={styles.column}>
        <View style={[styles.icon, styles.blueSoft]}><CalendarDays color="#176FE7" size={21} strokeWidth={2.5} /></View>
        <Text style={styles.number}>{payslip.workDays}</Text>
        <Text style={styles.label}>Ngày công</Text>
        <Text style={styles.caption}>/ {payslip.totalWorkDays} ngày</Text>
      </View>
      <View style={[styles.column, styles.bordered]}>
        <View style={[styles.icon, styles.orangeSoft]}><Clock3 color="#F6A221" size={22} strokeWidth={2.4} /></View>
        <Text style={styles.number}>{payslip.overtimeHours} giờ</Text>
        <Text style={styles.label}>Tăng ca</Text>
        <Text style={styles.caption}>OT</Text>
      </View>
      <View style={[styles.column, styles.bordered]}>
        <View style={[styles.icon, styles.redSoft]}><CircleMinus color="#E74255" size={22} strokeWidth={2.6} /></View>
        <Text style={[styles.number, styles.red]}>{formatVnd(payslip.deduction)}</Text>
        <Text style={styles.label}>Tổng khấu trừ</Text>
        <Text numberOfLines={1} style={styles.caption}>BHXH, BHYT, BHTN...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: colors.surface, borderRadius: 14, flexDirection: 'row', paddingVertical: 11 },
  column: { alignItems: 'center', flex: 1, justifyContent: 'center', minWidth: 0 },
  bordered: { borderLeftColor: '#E8EDF5', borderLeftWidth: 1 },
  icon: { alignItems: 'center', borderRadius: 20, height: 29, justifyContent: 'center', width: 29 },
  blueSoft: { backgroundColor: '#EDF5FF' },
  orangeSoft: { backgroundColor: '#FFF5E8' },
  redSoft: { backgroundColor: '#FFF0F2' },
  number: { color: colors.text, fontSize: 17, fontWeight: '800', marginTop: 3 },
  red: { color: '#CB2734' },
  label: { color: colors.text, fontSize: 11, marginTop: 1 },
  caption: { color: colors.textSecondary, fontSize: 10, marginTop: 3, maxWidth: '92%' },
});
