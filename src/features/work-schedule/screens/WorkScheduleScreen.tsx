import { useRouter } from 'expo-router';
import { ArrowLeft, CalendarDays } from 'lucide-react-native';
import { useState } from 'react';
import { Alert, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { ScreenContainer } from '@/shared/components';
import { colors, radius, spacing, typography } from '@/shared/theme';

import { WorkScheduleCalendar } from '../components/WorkScheduleCalendar';
import { WorkScheduleDayDetail } from '../components/WorkScheduleDayDetail';
import { WeeklyScheduleStrip } from '../components/WeeklyScheduleStrip';
import {
  getScheduleDetail,
  getWeekSchedule,
  scheduleCalendarSep2025,
} from '../data/work-schedule.mock';

type ScheduleView = 'month' | 'week';

export function WorkScheduleScreen() {
  const router = useRouter();
  const [activeView, setActiveView] = useState<ScheduleView>('month');
  const [selectedDay, setSelectedDay] = useState(17);
  const detail = getScheduleDetail(selectedDay);
  const weekDays = getWeekSchedule(selectedDay);

  const handleBack = () => {
    if (router.canGoBack()) {
      router.back();
      return;
    }
    router.navigate('/attendance');
  };

  const goToToday = () => {
    setActiveView('month');
    setSelectedDay(17);
  };

  return (
    <ScreenContainer>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Pressable
            accessibilityLabel="Quay lại"
            accessibilityRole="button"
            hitSlop={6}
            onPress={handleBack}
            style={styles.headerButton}
          >
            <ArrowLeft color={colors.text} size={21} strokeWidth={2.4} />
          </Pressable>
          <Text style={styles.title}>Lịch làm việc</Text>
          <Pressable
            accessibilityLabel="Trở về lịch làm việc hôm nay"
            accessibilityRole="button"
            hitSlop={6}
            onPress={goToToday}
            style={styles.headerButton}
          >
            <CalendarDays color={colors.text} size={20} strokeWidth={2.2} />
          </Pressable>
        </View>

        <View accessibilityRole="tablist" style={styles.segmented}>
          <ScheduleTab active={activeView === 'month'} label="Tháng" onPress={() => setActiveView('month')} />
          <ScheduleTab active={activeView === 'week'} label="Tuần" onPress={() => setActiveView('week')} />
        </View>

        {activeView === 'month' ? (
          <WorkScheduleCalendar
            days={scheduleCalendarSep2025}
            onChangeMonth={() => Alert.alert('Chưa có dữ liệu', 'Hiện chỉ có lịch làm việc mẫu tháng 9/2025.')}
            onSelectDay={setSelectedDay}
            selectedDay={selectedDay}
          />
        ) : null}

        {activeView === 'week' ? (
          <WeeklyScheduleStrip
            actionLabel="Xem tháng"
            days={weekDays}
            onAction={() => setActiveView('month')}
            onSelectDay={setSelectedDay}
            selectedDay={selectedDay}
          />
        ) : null}
        <WorkScheduleDayDetail detail={detail} />
        {activeView === 'month' ? (
          <WeeklyScheduleStrip
            actionLabel="Xem chi tiết"
            days={weekDays}
            onAction={() => setActiveView('week')}
            onSelectDay={setSelectedDay}
            selectedDay={selectedDay}
          />
        ) : null}
      </ScrollView>
    </ScreenContainer>
  );
}

function ScheduleTab({
  active,
  label,
  onPress,
}: {
  active: boolean;
  label: string;
  onPress: () => void;
}) {
  return (
    <Pressable
      accessibilityRole="tab"
      accessibilityState={{ selected: active }}
      onPress={onPress}
      style={[styles.segment, active && styles.activeSegment]}
    >
      <Text style={[styles.segmentText, active && styles.activeSegmentText]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  content: {
    gap: spacing.sm,
    marginTop: -3,
    paddingBottom: spacing.xxl,
    paddingHorizontal: spacing.md,
    paddingTop: 0,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 2,
  },
  headerButton: {
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: radius.sm,
    borderWidth: 1,
    height: 34,
    justifyContent: 'center',
    width: 34,
  },
  title: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '800',
  },
  segmented: {
    backgroundColor: '#EAF2FD',
    borderRadius: radius.sm,
    flexDirection: 'row',
    padding: 3,
  },
  segment: {
    alignItems: 'center',
    borderRadius: 8,
    flex: 1,
    paddingVertical: 7,
  },
  activeSegment: {
    backgroundColor: colors.primary,
    elevation: 2,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  segmentText: {
    color: colors.textSecondary,
    fontSize: typography.bodySmall,
    fontWeight: '700',
  },
  activeSegmentText: {
    color: colors.surface,
  },
});
