import { Clock3, FileText, MapPin, UsersRound } from 'lucide-react-native';
import { StyleSheet, Text, View } from 'react-native';

import { colors, radius, spacing } from '@/shared/theme';

import type { ScheduleDetail } from '../types/work-schedule.types';

type WorkScheduleDayDetailProps = {
  detail: ScheduleDetail;
};

const statusCopy = {
  working: 'Đang làm việc',
  leave: 'Nghỉ phép',
  'business-trip': 'Công tác',
  off: 'Không có ca',
} as const;

export function WorkScheduleDayDetail({ detail }: WorkScheduleDayDetailProps) {
  const isWorking = detail.status === 'working';
  const statusColor = isWorking ? colors.success : detail.status === 'leave' ? colors.red : colors.textSecondary;
  const statusBackground = isWorking ? colors.successSoft : detail.status === 'leave' ? colors.pinkSoft : colors.surfaceSoft;

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>Chi tiết ngày {detail.date}</Text>
        <View style={[styles.statusBadge, { backgroundColor: statusBackground }]}>
          <View style={[styles.statusDot, { backgroundColor: statusColor }]} />
          <Text style={[styles.statusText, { color: statusColor }]}>{statusCopy[detail.status]}</Text>
        </View>
      </View>

      <View style={styles.row}>
        <IconCircle icon={<Clock3 color={colors.primary} size={21} strokeWidth={2.25} />} />
        <View style={styles.copy}>
          <Text style={styles.rowTitle}>{detail.shift}</Text>
          <Text style={styles.rowSubtitle}>{detail.shiftTime}</Text>
        </View>
        {isWorking ? (
          <View style={styles.workedTime}>
            <Text style={styles.workedTimeLabel}>Giờ làm việc</Text>
            <Text style={styles.workedTimeValue}>{detail.workedTime}</Text>
          </View>
        ) : null}
      </View>

      {isWorking ? (
        <>
          <DetailRow
            icon={<MapPin color={colors.primary} size={21} strokeWidth={2.25} />}
            subtitle={detail.address}
            title={detail.location}
          />
          <DetailRow
            icon={<UsersRound color={colors.primary} size={21} strokeWidth={2.25} />}
            subtitle={detail.manager}
            title={detail.department}
          />
        </>
      ) : null}
      <DetailRow
        icon={<FileText color={colors.primary} size={20} strokeWidth={2.25} />}
        subtitle={detail.note}
        title="Ghi chú"
      />
    </View>
  );
}

function DetailRow({
  icon,
  subtitle,
  title,
}: {
  icon: React.ReactNode;
  subtitle: string;
  title: string;
}) {
  return (
    <View style={styles.row}>
      <IconCircle icon={icon} />
      <View style={styles.copy}>
        <Text style={styles.rowTitle}>{title}</Text>
        <Text style={styles.rowSubtitle}>{subtitle}</Text>
      </View>
    </View>
  );
}

function IconCircle({ icon }: { icon: React.ReactNode }) {
  return <View style={styles.iconCircle}>{icon}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    padding: spacing.md,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.xs,
  },
  title: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '800',
  },
  statusBadge: {
    alignItems: 'center',
    borderRadius: radius.pill,
    flexDirection: 'row',
    gap: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  statusDot: {
    borderRadius: radius.pill,
    height: 7,
    width: 7,
  },
  statusText: {
    fontSize: 11,
    fontWeight: '700',
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.sm,
    minHeight: 44,
  },
  iconCircle: {
    alignItems: 'center',
    backgroundColor: colors.primarySoft,
    borderRadius: radius.pill,
    height: 36,
    justifyContent: 'center',
    width: 36,
  },
  copy: {
    flex: 1,
    minWidth: 0,
  },
  rowTitle: {
    color: colors.text,
    fontSize: 13,
    fontWeight: '700',
  },
  rowSubtitle: {
    color: colors.textSecondary,
    fontSize: 11,
    lineHeight: 15,
    marginTop: 2,
  },
  workedTime: {
    alignItems: 'flex-end',
    maxWidth: 126,
  },
  workedTimeLabel: {
    backgroundColor: colors.primarySoft,
    borderRadius: radius.pill,
    color: colors.primary,
    fontSize: 10,
    fontWeight: '700',
    overflow: 'hidden',
    paddingHorizontal: 9,
    paddingVertical: 4,
  },
  workedTimeValue: {
    color: colors.textSecondary,
    fontSize: 10,
    marginTop: 4,
    textAlign: 'right',
  },
});
