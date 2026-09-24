import type {
  AttendanceCalendarDay,
  AttendanceRecord,
  DayDetail,
  MonthTimesheetData,
  TimesheetStat,
} from '../types/attendance.types';

/* -- Bảng công Tháng 9/2025 (Reference Ảnh 2 chuẩn) -- */

export const timesheetStatsSep2025: TimesheetStat[] = [
  {
    id: 'work-days',
    label: 'Công đã ghi nhận',
    value: '18 / 22',
    icon: 'calendar',
    color: '#1A56DB',
    backgroundColor: '#EBF5FF',
  },
  {
    id: 'leave-days',
    label: 'Nghỉ phép',
    value: '1',
    icon: 'leaf',
    color: '#047857',
    backgroundColor: '#DEF7EC',
  },
  {
    id: 'late-arrivals',
    label: 'Đi muộn',
    value: '2',
    icon: 'clock',
    color: '#E02424',
    backgroundColor: '#FDE8E8',
  },
  {
    id: 'missing-work',
    label: 'Thiếu công',
    value: '0',
    icon: 'warning',
    color: '#E02424',
    backgroundColor: '#FDE8E8',
  },
];

export const timesheetProgressSep2025 = { current: 18, total: 22 };

/* -- Trạng thái từng ngày Tháng 9/2025 (30 ngày) -- */
const lateDaysSep = new Set([4, 16]); // Ngày 4, 16 đi muộn (chấm đỏ)
const leaveDaysSep = new Set([10]); // Ngày 10 nghỉ phép (chấm vàng cam)
const weekendDaysSep = new Set([6, 7, 13, 14, 20, 21, 27, 28]);
const futureDaysSep = new Set([19, 22, 23, 24, 25, 26, 29, 30]);

export const calendarDaysSep2025: AttendanceCalendarDay[] = Array.from(
  { length: 30 },
  (_, index) => {
    const day = index + 1;
    if (day === 17) return { day, status: 'selected' as const };
    if (lateDaysSep.has(day)) return { day, status: 'late' as const };
    if (leaveDaysSep.has(day)) return { day, status: 'leave' as const };
    if (futureDaysSep.has(day)) return { day, status: 'future' as const };
    if (weekendDaysSep.has(day)) return { day, status: 'weekend' as const };
    return { day, status: 'attended' as const };
  },
);

/* -- Chi tiết từng ngày khi bấm vào lịch -- */
export const dayDetailsSep2025: Record<number, DayDetail> = {
  17: {
    date: '17/09/2025',
    status: 'on-time',
    statusLabel: 'Đúng giờ',
    checkIn: {
      time: '07:58',
      location: 'Văn phòng Hà Nội',
      address: 'Tòa nhà VFI, Duy Tân, Cầu Giấy, Hà Nội',
    },
    checkOut: {
      time: '17:32',
      location: 'Văn phòng Hà Nội',
      address: 'Tòa nhà VFI, Duy Tân, Cầu Giấy, Hà Nội',
    },
    shift: '08:00 - 17:30',
  },
  16: {
    date: '16/09/2025',
    status: 'late',
    statusLabel: 'Đi muộn 5 phút',
    checkIn: {
      time: '08:05',
      location: 'Văn phòng Hà Nội',
      address: 'Tòa nhà VFI, Duy Tân, Cầu Giấy, Hà Nội',
    },
    checkOut: {
      time: '17:35',
      location: 'Văn phòng Hà Nội',
      address: 'Tòa nhà VFI, Duy Tân, Cầu Giấy, Hà Nội',
    },
    shift: '08:00 - 17:30',
  },
  10: {
    date: '10/09/2025',
    status: 'leave',
    statusLabel: 'Nghỉ phép',
    checkIn: null,
    checkOut: null,
    shift: '08:00 - 17:30',
  },
  4: {
    date: '04/09/2025',
    status: 'late',
    statusLabel: 'Đi muộn 12 phút',
    checkIn: {
      time: '08:12',
      location: 'Văn phòng Hà Nội',
      address: 'Tòa nhà VFI, Duy Tân, Cầu Giấy, Hà Nội',
    },
    checkOut: {
      time: '17:30',
      location: 'Văn phòng Hà Nội',
      address: 'Tòa nhà VFI, Duy Tân, Cầu Giấy, Hà Nội',
    },
    shift: '08:00 - 17:30',
  },
};

/* -- Bảng công Tháng 8/2025 (Tháng trước) -- */
export const timesheetStatsAug2025: TimesheetStat[] = [
  {
    id: 'work-days',
    label: 'Công đã ghi nhận',
    value: '22 / 22',
    icon: 'calendar',
    color: '#1A56DB',
    backgroundColor: '#EBF5FF',
  },
  {
    id: 'leave-days',
    label: 'Nghỉ phép',
    value: '0',
    icon: 'leaf',
    color: '#047857',
    backgroundColor: '#DEF7EC',
  },
  {
    id: 'late-arrivals',
    label: 'Đi muộn',
    value: '1',
    icon: 'clock',
    color: '#E02424',
    backgroundColor: '#FDE8E8',
  },
  {
    id: 'missing-work',
    label: 'Thiếu công',
    value: '0',
    icon: 'warning',
    color: '#E02424',
    backgroundColor: '#FDE8E8',
  },
];

export const timesheetProgressAug2025 = { current: 22, total: 22 };

export const calendarDaysAug2025: AttendanceCalendarDay[] = Array.from(
  { length: 31 },
  (_, index) => {
    const day = index + 1;
    if (day === 8) return { day, status: 'late' as const };
    if ([2, 3, 9, 10, 16, 17, 23, 24, 30, 31].includes(day)) {
      return { day, status: 'weekend' as const };
    }
    return { day, status: 'attended' as const };
  },
);

export const dayDetailsAug2025: Record<number, DayDetail> = {
  8: {
    date: '08/08/2025',
    status: 'late',
    statusLabel: 'Đi muộn 7 phút',
    checkIn: {
      time: '08:07',
      location: 'Văn phòng Hà Nội',
      address: 'Tòa nhà VFI, Duy Tân, Cầu Giấy, Hà Nội',
    },
    checkOut: {
      time: '17:31',
      location: 'Văn phòng Hà Nội',
      address: 'Tòa nhà VFI, Duy Tân, Cầu Giấy, Hà Nội',
    },
    shift: '08:00 - 17:30',
  },
  29: {
    date: '29/08/2025',
    status: 'on-time',
    statusLabel: 'Đúng giờ',
    checkIn: {
      time: '07:54',
      location: 'Văn phòng Hà Nội',
      address: 'Tòa nhà VFI, Duy Tân, Cầu Giấy, Hà Nội',
    },
    checkOut: {
      time: '17:30',
      location: 'Văn phòng Hà Nội',
      address: 'Tòa nhà VFI, Duy Tân, Cầu Giấy, Hà Nội',
    },
    shift: '08:00 - 17:30',
  },
};

/* -- Bảng công Tháng 10/2025 (Tháng tới) -- */
export const timesheetStatsOct2025: TimesheetStat[] = [
  {
    id: 'work-days',
    label: 'Công đã ghi nhận',
    value: '0 / 23',
    icon: 'calendar',
    color: '#1A56DB',
    backgroundColor: '#EBF5FF',
  },
  {
    id: 'leave-days',
    label: 'Nghỉ phép',
    value: '0',
    icon: 'leaf',
    color: '#047857',
    backgroundColor: '#DEF7EC',
  },
  {
    id: 'late-arrivals',
    label: 'Đi muộn',
    value: '0',
    icon: 'clock',
    color: '#E02424',
    backgroundColor: '#FDE8E8',
  },
  {
    id: 'missing-work',
    label: 'Thiếu công',
    value: '0',
    icon: 'warning',
    color: '#E02424',
    backgroundColor: '#FDE8E8',
  },
];

export const timesheetProgressOct2025 = { current: 0, total: 23 };

export const calendarDaysOct2025: AttendanceCalendarDay[] = Array.from(
  { length: 31 },
  (_, index) => ({
    day: index + 1,
    status: [4, 5, 11, 12, 18, 19, 25, 26].includes(index + 1)
      ? ('weekend' as const)
      : ('future' as const),
  }),
);

/* -- Bộ dữ liệu theo tháng có thể điều hướng -- */
export const monthsData: Record<string, MonthTimesheetData> = {
  '2025-08': {
    key: '2025-08',
    label: 'Tháng 8/2025',
    stats: timesheetStatsAug2025,
    progress: timesheetProgressAug2025,
    calendarDays: calendarDaysAug2025,
    startWeekday: 4, // 1/8/2025 là Thứ 6 (index 4)
    dayDetails: dayDetailsAug2025,
  },
  '2025-09': {
    key: '2025-09',
    label: 'Tháng 9/2025',
    stats: timesheetStatsSep2025,
    progress: timesheetProgressSep2025,
    calendarDays: calendarDaysSep2025,
    startWeekday: 0, // 1/9/2025 là Thứ 2 (index 0)
    dayDetails: dayDetailsSep2025,
  },
  '2025-10': {
    key: '2025-10',
    label: 'Tháng 10/2025',
    stats: timesheetStatsOct2025,
    progress: timesheetProgressOct2025,
    calendarDays: calendarDaysOct2025,
    startWeekday: 2, // 1/10/2025 là Thứ 4 (index 2)
    dayDetails: {},
  },
};

export const availableMonthKeys = ['2025-08', '2025-09', '2025-10'] as const;

/* Backward compatible default exports */
export const timesheetStats = timesheetStatsSep2025;
export const timesheetProgress = timesheetProgressSep2025;
export const calendarDays = calendarDaysSep2025;
export const dayDetails = dayDetailsSep2025;

/* -- Danh sách lịch sử chấm công đầy đủ (Cho tab Lịch sử) -- */
export const attendanceRecords: AttendanceRecord[] = [
  {
    id: 'rec-2025-09-17',
    date: 'Thứ Tư, 17/09/2025',
    checkIn: '07:58',
    checkOut: '17:32',
    duration: '8h 34m',
    status: 'Đúng giờ',
    tone: 'success',
  },
  {
    id: 'rec-2025-09-16',
    date: 'Thứ Ba, 16/09/2025',
    checkIn: '08:05',
    checkOut: '17:35',
    duration: '8h 30m',
    status: 'Đi muộn 5 phút',
    tone: 'warning',
  },
  {
    id: 'rec-2025-09-15',
    date: 'Thứ Hai, 15/09/2025',
    checkIn: '07:52',
    checkOut: '17:30',
    duration: '8h 38m',
    status: 'Đúng giờ',
    tone: 'success',
  },
  {
    id: 'rec-2025-09-12',
    date: 'Thứ Sáu, 12/09/2025',
    checkIn: '07:55',
    checkOut: '17:31',
    duration: '8h 36m',
    status: 'Đúng giờ',
    tone: 'success',
  },
  {
    id: 'rec-2025-09-11',
    date: 'Thứ Năm, 11/09/2025',
    checkIn: '07:58',
    checkOut: '17:30',
    duration: '8h 32m',
    status: 'Đúng giờ',
    tone: 'success',
  },
  {
    id: 'rec-2025-09-10',
    date: 'Thứ Tư, 10/09/2025',
    checkIn: '--:--',
    checkOut: '--:--',
    duration: '8h 00m',
    status: 'Nghỉ phép',
    tone: 'info',
  },
  {
    id: 'rec-2025-09-09',
    date: 'Thứ Ba, 09/09/2025',
    checkIn: '07:50',
    checkOut: '17:34',
    duration: '8h 44m',
    status: 'Đúng giờ',
    tone: 'success',
  },
  {
    id: 'rec-2025-09-08',
    date: 'Thứ Hai, 08/09/2025',
    checkIn: '07:56',
    checkOut: '17:32',
    duration: '8h 36m',
    status: 'Đúng giờ',
    tone: 'success',
  },
  {
    id: 'rec-2025-09-05',
    date: 'Thứ Sáu, 05/09/2025',
    checkIn: '07:51',
    checkOut: '17:30',
    duration: '8h 39m',
    status: 'Đúng giờ',
    tone: 'success',
  },
  {
    id: 'rec-2025-09-04',
    date: 'Thứ Năm, 04/09/2025',
    checkIn: '08:12',
    checkOut: '17:30',
    duration: '8h 18m',
    status: 'Đi muộn 12 phút',
    tone: 'warning',
  },
  {
    id: 'rec-2025-09-03',
    date: 'Thứ Tư, 03/09/2025',
    checkIn: '07:55',
    checkOut: '17:33',
    duration: '8h 38m',
    status: 'Đúng giờ',
    tone: 'success',
  },
  {
    id: 'rec-2025-09-02',
    date: 'Thứ Ba, 02/09/2025',
    checkIn: '--:--',
    checkOut: '--:--',
    duration: '--',
    status: 'Nghỉ lễ Quốc Khánh',
    tone: 'neutral',
  },
  {
    id: 'rec-2025-09-01',
    date: 'Thứ Hai, 01/09/2025',
    checkIn: '--:--',
    checkOut: '--:--',
    duration: '--',
    status: 'Nghỉ lễ Quốc Khánh',
    tone: 'neutral',
  },
];

/* Legacy export cho AttendanceSummary cũ */
export const attendanceStats = [
  { id: 'work-days', label: 'Ngày làm', value: '22', icon: 'work' },
  { id: 'on-time', label: 'Đúng giờ', value: '21', icon: 'on-time' },
  { id: 'leave', label: 'Ngày nghỉ', value: '1', icon: 'leave' },
] as const;
