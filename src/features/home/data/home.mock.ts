import { colors } from '@/shared/theme';

import type { BottomNavItem, OverviewStat, QuickAction } from '../types/home.types';

export const homeProfile = {
  greeting: 'Xin chào,',
  name: 'Nguyễn Văn A',
  subtitle: 'Chúc bạn một ngày làm việc hiệu quả!',
};

export const attendanceSummary = {
  date: 'Thứ Tư, 17 Tháng 9, 2025',
  time: '08:15:30',
  status: 'Đã chấm công vào',
  checkInTime: '07:58',
  location: 'Văn phòng Hà Nội',
  coordinates: 'GPS: 21.0285, 105.8542',
};

export const quickActions: QuickAction[] = [
  {
    id: 'my-attendance',
    title: 'Công của tôi',
    icon: 'calendar',
    color: colors.primary,
    backgroundColor: colors.primarySoft,
  },
  {
    id: 'salary-summary',
    title: 'Tổng hợp lương',
    icon: 'wallet',
    color: colors.orange,
    backgroundColor: colors.orangeSoft,
  },
  {
    id: 'leave-registration',
    title: 'Đăng ký nghỉ',
    icon: 'plane',
    color: colors.primary,
    backgroundColor: colors.primarySoft,
  },
  {
    id: 'my-forms',
    title: 'Đơn của tôi',
    icon: 'document',
    color: colors.primary,
    backgroundColor: colors.primarySoft,
  },
  {
    id: 'approval',
    title: 'Phê duyệt',
    icon: 'approval',
    color: colors.success,
    backgroundColor: colors.successSoft,
  },
  {
    id: 'employee-information',
    title: 'Thông tin nhân sự',
    icon: 'employee',
    color: colors.primary,
    backgroundColor: colors.primarySoft,
  },
];

export const overviewStats: OverviewStat[] = [
  {
    id: 'work-days',
    label: 'Ngày làm việc',
    value: '22',
    icon: 'work',
    color: colors.primary,
    backgroundColor: colors.primarySoft,
  },
  {
    id: 'leave-days',
    label: 'Ngày nghỉ',
    value: '1',
    icon: 'leave',
    color: colors.success,
    backgroundColor: colors.successSoft,
  },
  {
    id: 'remaining-leave',
    label: 'Ngày nghỉ còn lại',
    value: '0',
    icon: 'remaining',
    color: colors.orange,
    backgroundColor: colors.orangeSoft,
  },
];

export const bottomNavigation: BottomNavItem[] = [
  { id: 'home', label: 'Trang chủ', icon: 'home', active: true },
  { id: 'attendance', label: 'Công', icon: 'time' },
  { id: 'forms', label: 'Đơn từ', icon: 'forms' },
  { id: 'salary', label: 'Lương', icon: 'salary' },
  { id: 'more', label: 'Khác', icon: 'more' },
];
