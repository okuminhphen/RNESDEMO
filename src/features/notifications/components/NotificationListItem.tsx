import {
  ChevronRight,
  CircleCheck,
  Clock,
  FileText,
  Megaphone,
  Users,
  Wallet,
} from 'lucide-react-native';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors, radius } from '@/shared/theme';

import type { NotificationIconType, NotificationItem } from '../types/notifications.types';

type NotificationListItemProps = {
  item: NotificationItem;
  onPress: (item: NotificationItem) => void;
};

const iconConfig: Record<
  NotificationIconType,
  { icon: typeof FileText; color: string; bg: string }
> = {
  payslip: {
    icon: FileText,
    color: '#2563EB',
    bg: '#EFF6FF',
  },
  leave: {
    icon: CircleCheck,
    color: '#10B981',
    bg: '#ECFDF5',
  },
  clock: {
    icon: Clock,
    color: '#2563EB',
    bg: '#EFF6FF',
  },
  holiday: {
    icon: Megaphone,
    color: '#EF4444',
    bg: '#FEF2F2',
  },
  approval: {
    icon: FileText,
    color: '#8B5CF6',
    bg: '#F5F3FF',
  },
  allowance: {
    icon: Wallet,
    color: '#F97316',
    bg: '#FFF7ED',
  },
  welcome: {
    icon: Users,
    color: '#10B981',
    bg: '#ECFDF5',
  },
};

export function NotificationListItem({
  item,
  onPress,
}: NotificationListItemProps) {
  const config = iconConfig[item.iconType] || iconConfig.payslip;
  const IconComponent = config.icon;

  return (
    <Pressable
      accessibilityLabel={item.title}
      accessibilityRole="button"
      onPress={() => onPress(item)}
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
    >
      {/* Icon pastel bên trái */}
      <View style={[styles.iconWrap, { backgroundColor: config.bg }]}>
        <IconComponent color={config.color} size={20} strokeWidth={2.2} />
      </View>

      {/* Nội dung ở giữa: Tiêu đề, Nội dung, Thời gian ở dưới bên trái */}
      <View style={styles.contentWrap}>
        <Text numberOfLines={2} style={styles.title}>
          {item.title}
        </Text>
        <Text style={styles.body}>
          {item.body}
        </Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>

      {/* Chấm đỏ chưa đọc + Chevron ở bên phải */}
      <View style={styles.trailingWrap}>
        {item.isUnread && <View style={styles.unreadDot} />}
        <ChevronRight color="#CBD5E1" size={18} strokeWidth={2.2} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    flexDirection: 'row',
    gap: 9,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  pressed: {
    backgroundColor: '#F8FAFC',
  },
  iconWrap: {
    alignItems: 'center',
    borderRadius: radius.pill,
    height: 38,
    justifyContent: 'center',
    width: 38,
  },
  contentWrap: {
    flex: 1,
    minWidth: 0,
  },
  title: {
    color: '#12213F',
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 16,
  },
  body: {
    color: '#68758C',
    fontSize: 10.5,
    lineHeight: 14,
    marginTop: 2,
  },
  time: {
    color: '#98A3B5',
    fontSize: 10,
    fontWeight: '500',
    marginTop: 3,
  },
  trailingWrap: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
  },
  unreadDot: {
    backgroundColor: '#FF4D5E', // Chấm đỏ unread
    borderRadius: radius.pill,
    height: 8,
    width: 8,
  },
});
