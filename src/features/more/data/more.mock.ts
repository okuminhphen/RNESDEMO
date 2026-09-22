export const profile = {
  name: 'Nguyễn Văn A',
  employeeCode: 'NV-2025-018',
  position: 'Kỹ sư phần mềm',
  department: 'Khối Công nghệ',
  email: 'nguyenvana@company.vn',
};

export const menuGroups = [
  {
    id: 'account',
    title: 'Tài khoản',
    items: [
      { id: 'profile', label: 'Thông tin cá nhân', icon: 'profile' },
      { id: 'notifications', label: 'Cài đặt thông báo', icon: 'notifications', value: 'Đang bật' },
      { id: 'security', label: 'Đổi mật khẩu', icon: 'security' },
    ],
  },
  {
    id: 'support',
    title: 'Hỗ trợ',
    items: [
      { id: 'help', label: 'Trung tâm trợ giúp', icon: 'help' },
      { id: 'about', label: 'Thông tin ứng dụng', icon: 'about', value: 'v1.0.0' },
    ],
  },
] as const;
