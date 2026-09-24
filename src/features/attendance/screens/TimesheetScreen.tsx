import { useRouter } from 'expo-router';
import { ArrowLeft, CalendarDays } from 'lucide-react-native';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { ScreenContainer } from '@/shared/components';
import { colors, radius, spacing, typography } from '@/shared/theme';

import { TimesheetCalendar } from '../components/TimesheetCalendar';
import { TimesheetDayDetail } from '../components/TimesheetDayDetail';
import { TimesheetHistoryList } from '../components/TimesheetHistoryList';
import { TimesheetSummary } from '../components/TimesheetSummary';
import {
  attendanceRecords,
  availableMonthKeys,
  monthsData,
} from '../data/attendance.mock';

type TimesheetTab = 'month' | 'history';

export function TimesheetScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TimesheetTab>('month');

  // Quản lý tháng hiện tại: mặc định '2025-09' (index = 1 trong ['2025-08', '2025-09', '2025-10'])
  const [monthIndex, setMonthIndex] = useState(1);
  const currentKey = availableMonthKeys[monthIndex];
  const currentMonthData = monthsData[currentKey];

  // Ngày đang chọn trong tháng
  const [selectedDay, setSelectedDay] = useState(17);

  const hasPrev = monthIndex > 0;
  const hasNext = monthIndex < availableMonthKeys.length - 1;

  const handlePrevMonth = () => {
    if (hasPrev) {
      const newIdx = monthIndex - 1;
      setMonthIndex(newIdx);
      setSelectedDay(1); // Chọn ngày 1 của tháng mới
    }
  };

  const handleNextMonth = () => {
    if (hasNext) {
      const newIdx = monthIndex + 1;
      setMonthIndex(newIdx);
      setSelectedDay(1);
    }
  };

  // Nút icon Lịch trên Header: Nhảy nhanh về Hôm nay (17/09/2025)
  const handleJumpToToday = () => {
    setActiveTab('month');
    setMonthIndex(1); // Tháng 9/2025
    setSelectedDay(17);
  };

  const selectedDayDetail = currentMonthData.dayDetails[selectedDay];

  return (
    <ScreenContainer>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Header: Quay lại | Tiêu đề "Bảng công" | Nút Lịch nhảy về hôm nay */}
        <View style={styles.header}>
          <Pressable
            accessibilityLabel="Về trang chủ"
            accessibilityRole="button"
            onPress={() => router.navigate('/')}
            style={styles.headerButton}
          >
            <ArrowLeft color={colors.text} size={22} strokeWidth={2} />
          </Pressable>

          <Text style={styles.title}>Bảng công</Text>

          <Pressable
            accessibilityLabel="Nhảy về ngày hôm nay"
            accessibilityRole="button"
            onPress={handleJumpToToday}
            style={styles.headerButton}
          >
            <CalendarDays color={colors.text} size={22} strokeWidth={2} />
          </Pressable>
        </View>

        {/* Phân đoạn Tab: "Tháng" | "Lịch sử" (Hoạt động thật với mock data) */}
        <View accessibilityRole="tablist" style={styles.segmented}>
          <Pressable
            accessibilityLabel="Xem theo Tháng"
            accessibilityRole="tab"
            accessibilityState={{ selected: activeTab === 'month' }}
            onPress={() => setActiveTab('month')}
            style={[styles.segment, activeTab === 'month' && styles.activeSegment]}
          >
            <Text
              style={[
                styles.segmentText,
                activeTab === 'month' && styles.activeSegmentText,
              ]}
            >
              Tháng
            </Text>
          </Pressable>

          <Pressable
            accessibilityLabel="Xem Lịch sử chấm công"
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

        {/* Nội dung tab tương ứng */}
        {activeTab === 'month' ? (
          <>
            {/* Card 1: Thống kê tháng (icon lịch, lá, đồng hồ, tam giác cảnh báo + chuyển tháng) */}
            <TimesheetSummary
              hasNextMonth={hasNext}
              hasPrevMonth={hasPrev}
              monthLabel={currentMonthData.label}
              onNextMonth={handleNextMonth}
              onPrevMonth={handlePrevMonth}
              progress={currentMonthData.progress}
              stats={currentMonthData.stats}
            />

            {/* Card 2: Lịch theo tháng + chấm trạng thái + chú giải màu + chọn ngày */}
            <TimesheetCalendar
              calendarDays={currentMonthData.calendarDays}
              hasNextMonth={hasNext}
              hasPrevMonth={hasPrev}
              monthLabel={currentMonthData.label}
              onNextMonth={handleNextMonth}
              onPrevMonth={handlePrevMonth}
              onSelectDay={setSelectedDay}
              selectedDay={selectedDay}
              startWeekday={currentMonthData.startWeekday}
            />

            {/* Card 3: Chi tiết ngày được chọn */}
            <TimesheetDayDetail
              dayDetail={selectedDayDetail}
              fallbackDateStr={`${selectedDay < 10 ? '0' + selectedDay : selectedDay}/${currentKey.split('-')[1]}/${currentKey.split('-')[0]}`}
            />
          </>
        ) : (
          /* Tab Lịch sử: Danh sách chi tiết các lần chấm công có đầy đủ dữ liệu */
          <TimesheetHistoryList records={attendanceRecords} />
        )}
      </ScrollView>
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
});
