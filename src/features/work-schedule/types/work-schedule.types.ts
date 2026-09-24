export type ScheduleStatus =
  | 'morning'
  | 'afternoon'
  | 'leave'
  | 'business-trip'
  | 'off';

export type ScheduleCalendarDay = {
  day: number;
  status: ScheduleStatus;
};

export type ScheduleDetail = {
  date: string;
  status: 'working' | 'leave' | 'business-trip' | 'off';
  shift: string;
  shiftTime: string;
  workedTime: string;
  location: string;
  address: string;
  department: string;
  manager: string;
  note: string;
};

export type WeekScheduleDay = {
  weekday: string;
  date: string;
  status: ScheduleStatus;
  label: string;
  time?: string;
};
