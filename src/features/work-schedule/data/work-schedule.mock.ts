import type {
  ScheduleCalendarDay,
  ScheduleDetail,
  ScheduleStatus,
  WeekScheduleDay,
} from '../types/work-schedule.types';

const leaveDays = new Set([4, 16]);
const afternoonDays = new Set([10]);
const offDays = new Set([6, 7, 13, 14, 20, 21, 27, 28]);

function statusForDay(day: number): ScheduleStatus {
  if (leaveDays.has(day)) return 'leave';
  if (afternoonDays.has(day)) return 'afternoon';
  if (offDays.has(day)) return 'off';
  return 'morning';
}

export const scheduleCalendarSep2025: ScheduleCalendarDay[] = Array.from(
  { length: 30 },
  (_, index) => {
    const day = index + 1;
    return { day, status: statusForDay(day) };
  },
);

export function getWeekSchedule(day: number): WeekScheduleDay[] {
  const monday = new Date(Date.UTC(2025, 8, day));
  monday.setUTCDate(monday.getUTCDate() - ((monday.getUTCDay() + 6) % 7));

  return Array.from({ length: 5 }, (_, index) => {
    const date = new Date(monday);
    date.setUTCDate(monday.getUTCDate() + index);
    const inSeptember = date.getUTCMonth() === 8;
    const status = inSeptember ? statusForDay(date.getUTCDate()) : 'off';
    const labels: Record<ScheduleStatus, string> = {
      morning: 'Ca sáng',
      afternoon: 'Ca chiều',
      leave: 'Nghỉ phép',
      'business-trip': 'Công tác',
      off: 'Không có ca',
    };

    return {
      weekday: `T${index + 2}`,
      date: `${String(date.getUTCDate()).padStart(2, '0')}/${String(date.getUTCMonth() + 1).padStart(2, '0')}`,
      status,
      label: labels[status],
      time: status === 'morning' ? '08:00 - 17:30' : status === 'afternoon' ? '13:00 - 21:30' : undefined,
    };
  });
}

export function getScheduleDetail(day: number): ScheduleDetail {
  const status = statusForDay(day);
  const date = `${String(day).padStart(2, '0')}/09/2025`;

  if (status === 'leave') {
    return {
      date,
      status: 'leave',
      shift: 'Nghỉ phép',
      shiftTime: 'Cả ngày',
      workedTime: 'Không có giờ làm việc',
      location: 'Văn phòng Hà Nội',
      address: 'Tòa nhà VFI, Duy Tân, Cầu Giấy, Hà Nội',
      department: 'Phòng Nhân sự',
      manager: 'Quản lý trực tiếp: Nguyễn Văn Hòa',
      note: 'Đơn nghỉ phép đã được phê duyệt.',
    };
  }

  if (status === 'off') {
    return {
      date,
      status: 'off',
      shift: 'Không có ca',
      shiftTime: 'Không có lịch làm việc',
      workedTime: 'Không có giờ làm việc',
      location: '',
      address: '',
      department: '',
      manager: '',
      note: 'Không có ca làm việc cho ngày này.',
    };
  }

  return {
    date,
    status: 'working',
    shift: status === 'afternoon' ? 'Ca chiều' : 'Ca hành chính',
    shiftTime: status === 'afternoon' ? '13:00 - 21:30' : '08:00 - 17:30',
    workedTime: day === 17 ? 'Đã làm: 1 giờ 41 phút' : 'Giờ làm việc theo ca',
    location: 'Văn phòng Hà Nội',
    address: 'Tòa nhà VFI, Duy Tân, Cầu Giấy, Hà Nội',
    department: 'Phòng Nhân sự',
    manager: 'Quản lý trực tiếp: Nguyễn Văn Hòa',
    note: 'Không có ghi chú cho ngày này',
  };
}
