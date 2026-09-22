export type AttendanceDayStatus = 'normal' | 'late' | 'leave' | 'selected' | 'weekend';

export type AttendanceCalendarDay = {
  day: number;
  status: AttendanceDayStatus;
};

export const attendanceStats = [
  { id: 'work-days', label: 'Ngày làm', value: '22', icon: 'work' },
  { id: 'on-time', label: 'Đúng giờ', value: '21', icon: 'on-time' },
  { id: 'leave', label: 'Ngày nghỉ', value: '1', icon: 'leave' },
] as const;

const lateDays = new Set([8]);
const leaveDays = new Set([12]);
const weekendDays = new Set([6, 7, 13, 14, 20, 21, 27, 28]);

export const calendarDays: AttendanceCalendarDay[] = Array.from({ length: 30 }, (_, index) => {
  const day = index + 1;

  if (day === 17) return { day, status: 'selected' };
  if (lateDays.has(day)) return { day, status: 'late' };
  if (leaveDays.has(day)) return { day, status: 'leave' };
  if (weekendDays.has(day)) return { day, status: 'weekend' };
  return { day, status: 'normal' };
});

export const attendanceRecords = [
  {
    id: '2025-09-17',
    date: 'Thứ Tư, 17/09/2025',
    checkIn: '07:58',
    checkOut: '--:--',
    status: 'Đang làm việc',
    tone: 'info',
  },
  {
    id: '2025-09-16',
    date: 'Thứ Ba, 16/09/2025',
    checkIn: '07:55',
    checkOut: '17:35',
    status: 'Đủ công',
    tone: 'success',
  },
  {
    id: '2025-09-15',
    date: 'Thứ Hai, 15/09/2025',
    checkIn: '08:07',
    checkOut: '17:31',
    status: 'Đi muộn 7 phút',
    tone: 'warning',
  },
] as const;
