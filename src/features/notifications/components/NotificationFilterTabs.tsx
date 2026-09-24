import { Circle, Settings, Users } from 'lucide-react-native';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, radius } from '@/shared/theme';

import type { NotificationFilter } from '../types/notifications.types';

type NotificationFilterTabsProps = {
  activeFilter: NotificationFilter;
  onSelectFilter: (filter: NotificationFilter) => void;
};

const filterTabs = [
  { key: 'all', label: 'Tất cả' },
  { key: 'unread', label: 'Chưa đọc', icon: Circle },
  { key: 'system', label: 'Hệ thống', icon: Settings },
  { key: 'hr', label: 'Nhân sự', icon: Users },
] satisfies { key: NotificationFilter; label: string; icon?: typeof Circle }[];

export function NotificationFilterTabs({
  activeFilter,
  onSelectFilter,
}: NotificationFilterTabsProps) {
  return (
    <View style={styles.container}>
      {filterTabs.map((tab) => {
        const isActive = activeFilter === tab.key;
        const Icon = tab.icon;
        const iconColor = isActive ? '#FFFFFF' : colors.navy;

        return (
          <Pressable
            key={tab.key}
            accessibilityLabel={tab.label}
            accessibilityRole="tab"
            accessibilityState={{ selected: isActive }}
            onPress={() => onSelectFilter(tab.key)}
            style={[styles.tab, isActive ? styles.activeTab : styles.inactiveTab]}
          >
            <View style={styles.tabContent}>
              {Icon ? <Icon color={iconColor} size={16} strokeWidth={2} /> : null}
              <Text
                style={[
                  styles.tabText,
                  isActive ? styles.activeTabText : styles.inactiveTabText,
                ]}
              >
                {tab.label}
              </Text>
            </View>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 7,
  },
  tab: {
    alignItems: 'center',
    borderRadius: radius.pill,
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 8,
  },
  activeTab: {
    backgroundColor: '#075FD7', // Xanh dương đậm chuẩn reference
  },
  inactiveTab: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E7EDF5',
    borderWidth: 1,
  },
  tabText: {
    fontSize: 13,
    fontWeight: '700',
  },
  tabContent: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 6,
  },
  activeTabText: {
    color: '#FFFFFF',
  },
  inactiveTabText: {
    color: colors.navy, // Chữ navy
  },
});
