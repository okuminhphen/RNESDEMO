import type { NotificationItem } from '../types/notifications.types';

export const initialNotifications: NotificationItem[] = [
  // Nhóm 1: Hôm nay, 17 Tháng 9, 2025
  {
    id: 'notif-1',
    title: 'Phiếu lương tháng 8/2025 đã được phát hành',
    body: 'Bạn có thể xem chi tiết phiếu lương tháng 8/2025 trong mục Lương.',
    time: '10:30',
    dateGroup: 'Hôm nay, 17 Tháng 9, 2025',
    isUnread: true,
    category: 'system',
    iconType: 'payslip',
  },
  {
    id: 'notif-2',
    title: 'Yêu cầu nghỉ phép đã được phê duyệt',
    body: 'Yêu cầu nghỉ phép từ 22/09/2025 - 24/09/2025 đã được phê duyệt bởi Quản lý.',
    time: '09:15',
    dateGroup: 'Hôm nay, 17 Tháng 9, 2025',
    isUnread: true,
    category: 'hr',
    iconType: 'leave',
  },
  {
    id: 'notif-3',
    title: 'Nhắc nhở chấm công',
    body: 'Bạn chưa chấm công vào sáng nay. Vui lòng chấm công trước 08:30 để đảm bảo đầy đủ công.',
    time: '07:50',
    dateGroup: 'Hôm nay, 17 Tháng 9, 2025',
    isUnread: true,
    category: 'system',
    iconType: 'clock',
  },

  // Nhóm 2: Hôm qua, 16 Tháng 9, 2025
  {
    id: 'notif-4',
    title: 'Thông báo lịch nghỉ Lễ Quốc khánh 2/9',
    body: 'Công ty thông báo lịch nghỉ Lễ Quốc khánh 2/9 (từ 30/08/2025 đến 02/09/2025). Xem chi tiết tại đây.',
    time: '16:20',
    dateGroup: 'Hôm qua, 16 Tháng 9, 2025',
    isUnread: false,
    category: 'system',
    iconType: 'holiday',
  },
  {
    id: 'notif-5',
    title: 'Có 2 yêu cầu phê duyệt đang chờ xử lý',
    body: 'Bạn có 2 yêu cầu (nghỉ phép, làm thêm giờ) đang chờ phê duyệt.',
    time: '14:05',
    dateGroup: 'Hôm qua, 16 Tháng 9, 2025',
    isUnread: false,
    category: 'hr',
    iconType: 'approval',
  },

  // Nhóm 3: 15 Tháng 9, 2025
  {
    id: 'notif-6',
    title: 'Phụ cấp tháng 8/2025 đã được cập nhật',
    body: 'Các khoản phụ cấp tháng 8/2025 đã được cập nhật vào hệ thống.',
    time: '15/09/2025 11:10',
    dateGroup: '15 Tháng 9, 2025',
    isUnread: false,
    category: 'system',
    iconType: 'allowance',
  },
  {
    id: 'notif-7',
    title: 'Chào mừng thành viên mới',
    body: 'Chào mừng bạn Trần Minh Khoa đã gia nhập Công ty từ ngày 15/09/2025.',
    time: '15/09/2025 09:30',
    dateGroup: '15 Tháng 9, 2025',
    isUnread: false,
    category: 'hr',
    iconType: 'welcome',
  },
];
