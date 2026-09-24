export type NotificationFilter = 'all' | 'unread' | 'system' | 'hr';

export type NotificationCategory = 'system' | 'hr';

export type NotificationIconType =
  | 'payslip'
  | 'leave'
  | 'clock'
  | 'holiday'
  | 'approval'
  | 'allowance'
  | 'welcome';

export type NotificationDateGroup =
  | 'Hôm nay, 17 Tháng 9, 2025'
  | 'Hôm qua, 16 Tháng 9, 2025'
  | '15 Tháng 9, 2025';

export type NotificationItem = {
  id: string;
  title: string;
  body: string;
  time: string;
  dateGroup: NotificationDateGroup;
  isUnread: boolean;
  category: NotificationCategory;
  iconType: NotificationIconType;
};
