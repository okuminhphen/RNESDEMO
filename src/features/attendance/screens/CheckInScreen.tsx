import { useLocalSearchParams, useRouter } from 'expo-router';
import { ArrowLeft, Clock3, History } from 'lucide-react-native';
import { useEffect, useState } from 'react';
import { Alert, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { AttendanceCard } from '@/features/home/components/AttendanceCard';
import { AppCard, ScreenContainer } from '@/shared/components';
import { colors, radius, spacing, typography } from '@/shared/theme';

import { AttendanceRecordList } from '../components/AttendanceRecordList';
import { CheckoutConfirmSheet } from '../components/CheckoutConfirmSheet';
import { TimesheetHistoryList } from '../components/TimesheetHistoryList';
import { attendanceRecords } from '../data/attendance.mock';

type CheckInTab = 'today' | 'history';

export function CheckInScreen() {
  const router = useRouter();
  const { confirm } = useLocalSearchParams<{ confirm?: string }>();
  const [activeTab, setActiveTab] = useState<CheckInTab>('today');
  const [sheetVisible, setSheetVisible] = useState(false);

  useEffect(() => {
    if (confirm === 'checkout') {
      setActiveTab('today');
      setSheetVisible(true);
    }
  }, [confirm]);

  const closeSheet = () => {
    setSheetVisible(false);
    router.setParams({ confirm: '' });
  };

  const confirmCheckout = () => {
    closeSheet();
    Alert.alert(
      'Chưa ghi nhận công',
      'Đây là bản xem trước giao diện. Ứng dụng chưa kết nối GPS và máy chủ chấm công thực tế.',
    );
  };

  return (
    <ScreenContainer>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <Pressable
            accessibilityLabel="Quay lại"
            accessibilityRole="button"
            onPress={() => router.back()}
            style={styles.headerButton}
          >
            <ArrowLeft color={colors.text} size={22} strokeWidth={2} />
          </Pressable>

          <Text style={styles.title}>Chấm công</Text>

          <Pressable
            accessibilityLabel="Xem lịch sử chấm công"
            accessibilityRole="button"
            onPress={() => setActiveTab('history')}
            style={styles.headerButton}
          >
            <History color={colors.text} size={22} strokeWidth={2} />
          </Pressable>
        </View>

        {/* Segmented tabs */}
        <View accessibilityRole="tablist" style={styles.segmented}>
          <Pressable
            accessibilityLabel="Hôm nay"
            accessibilityRole="tab"
            accessibilityState={{ selected: activeTab === 'today' }}
            onPress={() => setActiveTab('today')}
            style={[styles.segment, activeTab === 'today' && styles.activeSegment]}
          >
            <Text
              style={[
                styles.segmentText,
                activeTab === 'today' && styles.activeSegmentText,
              ]}
            >
              Hôm nay
            </Text>
          </Pressable>

          <Pressable
            accessibilityLabel="Lịch sử"
            accessibilityRole="tab"
            accessibilityState={{ selected: activeTab === 'history' }}
            onPress={() => setActiveTab('history')}
            style={[
              styles.segment,
              activeTab === 'history' && styles.activeSegment,
            ]}
          >
            <Text
              style={[
                styles.segmentText,
                activeTab === 'history' && styles.activeSegmentText,
              ]}
            >
              Lịch sử
            </Text>
          </Pressable>
        </View>

        {activeTab === 'today' ? (
          <>
            <AttendanceCard onCheckout={() => setSheetVisible(true)} />

            <AppCard style={styles.shiftCard} variant="soft">
              <View style={styles.shiftIcon}>
                <Clock3 color={colors.primary} size={22} strokeWidth={2} />
              </View>
              <View style={styles.shiftCopy}>
                <Text style={styles.shiftTitle}>Ca làm việc hôm nay</Text>
                <Text style={styles.shiftSubtitle}>
                  Chấm công vào 07:58 - Chưa chấm công ra
                </Text>
              </View>
              <Text style={styles.shiftTime}>08:00 - 17:30</Text>
            </AppCard>

            <AttendanceRecordList />

            <Text style={styles.demoNote}>
              Chế độ xem trước giao diện. Thao tác chấm công không ghi nhận dữ liệu thực.
            </Text>
          </>
        ) : (
          <TimesheetHistoryList records={attendanceRecords} />
        )}
      </ScrollView>

      <CheckoutConfirmSheet
        onClose={closeSheet}
        onConfirm={confirmCheckout}
        visible={sheetVisible}
      />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  content: {
    gap: spacing.md,
    paddingBottom: spacing.xxl,
    paddingHorizontal: spacing.md,
    paddingTop: spacing.xs,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: spacing.xs,
  },
  headerButton: {
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: radius.pill,
    height: 40,
    justifyContent: 'center',
    width: 40,
  },
  title: {
    color: colors.text,
    fontSize: typography.title,
    fontWeight: '800',
  },
  segmented: {
    backgroundColor: '#F3F4F6',
    borderRadius: radius.pill,
    flexDirection: 'row',
    padding: 3,
  },
  segment: {
    alignItems: 'center',
    borderRadius: radius.pill,
    flex: 1,
    paddingVertical: 10,
  },
  activeSegment: {
    backgroundColor: colors.primary,
    elevation: 2,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  segmentText: {
    color: colors.textSecondary,
    fontSize: typography.bodySmall,
    fontWeight: '700',
  },
  activeSegmentText: {
    color: colors.surface,
    fontWeight: '800',
  },
  shiftCard: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.sm,
    padding: spacing.md,
  },
  shiftIcon: {
    alignItems: 'center',
    backgroundColor: colors.primarySoft,
    borderRadius: radius.sm,
    height: 38,
    justifyContent: 'center',
    width: 38,
  },
  shiftCopy: {
    flex: 1,
    minWidth: 0,
  },
  shiftTitle: {
    color: colors.text,
    fontSize: typography.bodySmall,
    fontWeight: '700',
  },
  shiftSubtitle: {
    color: colors.textSecondary,
    fontSize: 11,
    marginTop: 2,
  },
  shiftTime: {
    color: colors.primaryDark,
    fontSize: typography.caption,
    fontWeight: '700',
  },
  demoNote: {
    color: colors.textMuted,
    fontSize: typography.caption,
    lineHeight: 16,
    textAlign: 'center',
  },
});
