import { useRouter } from 'expo-router';
import { ArrowLeft, Funnel } from 'lucide-react-native';
import { useState } from 'react';
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { colors, typography } from '@/shared/theme';

import { NotificationFilterTabs } from '../components/NotificationFilterTabs';
import { NotificationListItem } from '../components/NotificationListItem';
import { initialNotifications } from '../data/notifications.mock';
import type {
  NotificationDateGroup,
  NotificationFilter,
  NotificationItem,
} from '../types/notifications.types';

const dateGroupOrder: NotificationDateGroup[] = [
  'Hôm nay, 17 Tháng 9, 2025',
  'Hôm qua, 16 Tháng 9, 2025',
  '15 Tháng 9, 2025',
];

export function NotificationsScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const [activeFilter, setActiveFilter] = useState<NotificationFilter>('all');
  const [notifications, setNotifications] =
    useState<NotificationItem[]>(initialNotifications);

  // Điều hướng back an toàn
  const handleBack = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.navigate('/');
    }
  };

  // Đánh dấu đã đọc khi bấm vào item
  const handleItemPress = (item: NotificationItem) => {
    if (item.isUnread) {
      setNotifications((prev) =>
        prev.map((n) => (n.id === item.id ? { ...n, isUnread: false } : n)),
      );
    }
    Alert.alert(item.title, item.body);
  };

  // Lọc theo tab
  const filteredNotifications = notifications.filter((item) => {
    if (activeFilter === 'unread') return item.isUnread;
    if (activeFilter === 'system') return item.category === 'system';
    if (activeFilter === 'hr') return item.category === 'hr';
    return true; // 'all'
  });

  // Gom nhóm theo ngày
  const groupedNotifications = dateGroupOrder.map((groupTitle) => ({
    title: groupTitle,
    items: filteredNotifications.filter((n) => n.dateGroup === groupTitle),
  }));

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      {/* Header: Nút back | Tiêu đề "Thông báo" | Nút Filter outline vuông bo tròn */}
      <View style={styles.header}>
        <Pressable
          accessibilityLabel="Quay lại"
          accessibilityRole="button"
          onPress={handleBack}
          style={styles.headerBtn}
        >
          <ArrowLeft color="#12213F" size={20} strokeWidth={2.2} />
        </Pressable>

        <Text style={styles.headerTitle}>Thông báo</Text>

        <Pressable
          accessibilityLabel={activeFilter === 'unread' ? 'Hiện tất cả thông báo' : 'Chỉ hiện thông báo chưa đọc'}
          accessibilityRole="button"
          onPress={() => setActiveFilter((filter) => filter === 'unread' ? 'all' : 'unread')}
          style={styles.headerBtn}
        >
          <Funnel color={activeFilter === 'unread' ? colors.primary : colors.text} size={19} strokeWidth={2.2} />
        </Pressable>
      </View>

      {/* 4 Tab Filter: Tất cả | Chưa đọc | Hệ thống | Nhân sự */}
      <NotificationFilterTabs
        activeFilter={activeFilter}
        onSelectFilter={setActiveFilter}
      />

      {/* Danh sách thông báo gom theo 3 nhóm ngày */}
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {filteredNotifications.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
              Không có thông báo nào trong mục này.
            </Text>
          </View>
        ) : (
          groupedNotifications.map((group) => {
            if (group.items.length === 0) return null;

            return (
              <View key={group.title} style={styles.groupContainer}>
                <Text style={styles.groupHeader}>{group.title}</Text>
                <View style={styles.groupList}>
                  {group.items.map((item) => (
                    <NotificationListItem
                      key={item.id}
                      item={item}
                      onPress={handleItemPress}
                    />
                  ))}
                </View>
              </View>
            );
          })
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F7FC', // Nền xanh-xám cực nhạt chuẩn reference
    flex: 1,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 6,
  },
  headerBtn: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderColor: '#E7EDF5',
    borderRadius: 10,
    borderWidth: 1,
    height: 38,
    justifyContent: 'center',
    width: 38,
  },
  headerTitle: {
    color: '#12213F',
    fontSize: 18,
    fontWeight: '800',
  },
  scrollContent: {
    paddingBottom: 24,
    paddingHorizontal: 16,
  },
  groupContainer: {
    marginTop: 8,
  },
  groupHeader: {
    color: '#68758C',
    fontSize: 12,
    fontWeight: '700',
    marginBottom: 5,
  },
  groupList: {
    gap: 6,
  },
  emptyContainer: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  emptyText: {
    color: '#98A3B5',
    fontSize: typography.bodySmall,
  },
});
