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

export type BottomNavIcon = 'home' | 'time' | 'forms' | 'salary' | 'more';

export type BottomNavItem = {
  id: string;
  label: string;
  icon: BottomNavIcon;
  active?: boolean;
};
