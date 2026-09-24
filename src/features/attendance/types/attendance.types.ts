export type AttendanceDayStatus =
  | 'attended'
  | 'late'
  | 'leave'
  | 'missing'
  | 'selected'
  | 'weekend'
  | 'future';

export type AttendanceCalendarDay = {
  day: number;
  status: AttendanceDayStatus;
};

/* -- Thống kê tháng (Khớp Reference Ảnh 2: lịch xanh, lá xanh, đồng hồ đỏ, tam giác cảnh báo đỏ) -- */
export type TimesheetStat = {
  id: string;
  label: string;
  value: string;
  icon: 'calendar' | 'leaf' | 'clock' | 'warning';
  color: string;
  backgroundColor: string;
};

/* -- Chi tiết ngày được chọn -- */
export type DayDetail = {
  date: string;
  status: 'on-time' | 'late' | 'leave' | 'missing' | 'holiday' | 'weekend';
  statusLabel: string;
  checkIn: { time: string; location: string; address: string } | null;
  checkOut: { time: string; location: string; address: string } | null;
  shift: string;
};

/* -- Dữ liệu bảng công theo tháng -- */
export type MonthTimesheetData = {
  key: string;
  label: string;
  stats: TimesheetStat[];
  progress: { current: number; total: number };
  calendarDays: AttendanceCalendarDay[];
  startWeekday: number; // 0 = Thứ 2, ..., 6 = Chủ Nhật
  dayDetails: Record<number, DayDetail>;
};

/* -- Bản ghi lịch sử chấm công -- */
export type AttendanceRecord = {
  id: string;
  date: string;
  checkIn: string;
  checkOut: string;
  duration?: string;
  status: string;
  tone: 'success' | 'warning' | 'danger' | 'info' | 'neutral';
};
