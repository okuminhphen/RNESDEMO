export type QuickActionIcon =
  | 'calendar'
  | 'wallet'
  | 'plane'
  | 'document'
  | 'approval'
  | 'employee';

export type QuickAction = {
  id: string;
  title: string;
  icon: QuickActionIcon;
  color: string;
  backgroundColor: string;
  href: '/attendance' | '/requests' | '/payroll' | '/more';
};

export type OverviewIcon = 'work' | 'leave' | 'remaining';

export type OverviewStat = {
  id: string;
  label: string;
  value: string;
  icon: OverviewIcon;
  color: string;
  backgroundColor: string;
};
