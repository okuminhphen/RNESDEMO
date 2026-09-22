import { Tabs } from 'expo-router';
import { Clock3, FileText, House, Menu, WalletCards } from 'lucide-react-native';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { colors, typography } from '@/shared/theme';

export default function TabLayout() {
  const insets = useSafeAreaInsets();
  const bottomInset = Math.max(insets.bottom, 8);

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        sceneStyle: styles.scene,
        tabBarActiveTintColor: colors.primary,
        tabBarHideOnKeyboard: true,
        tabBarInactiveTintColor: colors.textSecondary,
        tabBarLabelStyle: styles.label,
        tabBarStyle: [
          styles.tabBar,
          {
            height: 58 + bottomInset,
            paddingBottom: bottomInset,
          },
        ],
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Trang chủ',
          tabBarIcon: ({ color, focused }) => (
            <House color={color} fill={focused ? color : 'transparent'} size={23} strokeWidth={2} />
          ),
        }}
      />
      <Tabs.Screen
        name="attendance"
        options={{
          title: 'Công',
          tabBarIcon: ({ color }) => <Clock3 color={color} size={24} strokeWidth={2} />,
        }}
      />
      <Tabs.Screen
        name="requests"
        options={{
          title: 'Đơn từ',
          tabBarIcon: ({ color }) => <FileText color={color} size={23} strokeWidth={2} />,
        }}
      />
      <Tabs.Screen
        name="payroll"
        options={{
          title: 'Lương',
          tabBarIcon: ({ color }) => <WalletCards color={color} size={24} strokeWidth={2} />,
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          title: 'Khác',
          tabBarIcon: ({ color }) => <Menu color={color} size={25} strokeWidth={2} />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  scene: {
    backgroundColor: colors.background,
  },
  tabBar: {
    backgroundColor: colors.surface,
    borderTopColor: colors.border,
    borderTopWidth: 1,
    elevation: 10,
    paddingTop: 7,
  },
  label: {
    fontSize: typography.caption,
    fontWeight: '600',
  },
});
