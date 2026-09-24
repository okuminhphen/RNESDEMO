export type QuickActionIcon =
  | 'calendar'
  | 'wallet'
  | 'create-request'
  | 'document'
  | 'approval'
  | 'schedule';

export type QuickAction = {
  id: string;
  title: string;
  icon: QuickActionIcon;
  color: string;
  backgroundColor: string;
  description: string;
  badge?: string;
  href: '/attendance' | '/requests' | '/payroll' | '/more';
};

export type OverviewIcon = 'work' | 'leave' | 'late' | 'missing-work';

export type OverviewStat = {
  id: string;
  label: string;
  value: string;
  icon: OverviewIcon;
  color: string;
  backgroundColor: string;
};
