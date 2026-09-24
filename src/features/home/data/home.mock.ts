import { colors } from "@/shared/theme";

import type { OverviewStat, QuickAction } from "../types/home.types";

export const homeProfile = {
  greeting: "Xin chào,",
  name: "Lê Minh Phụng",
  subtitle: "Chúc bạn một ngày làm việc hiệu quả!",
};

export const attendanceSummary = {
  date: "Thứ Tư, 17 Tháng 9, 2025",
  time: "08:15:30",
  status: "Đã chấm công vào",
  checkInTime: "07:58",
  location: "Văn phòng Hà Nội",
  address: "Tòa nhà VFI, Duy Tân, Cầu Giấy, Hà Nội",
};

export const quickActions: QuickAction[] = [
  {
    id: "my-attendance",
    title: "Bảng công",
    icon: "calendar",
    color: colors.primary,
    backgroundColor: colors.primarySoft,
    description: "Xem công theo ngày, tháng",
    href: "/attendance",
  },
  {
    id: "salary-summary",
    title: "Phiếu lương",
    icon: "wallet",
    color: colors.orange,
    backgroundColor: colors.orangeSoft,
    description: "Xem lương, phụ cấp, khấu trừ",
    href: "/payroll",
  },
  {
    id: "create-request",
    title: "Tạo yêu cầu",
    icon: "create-request",
    color: colors.success,
    backgroundColor: colors.successSoft,
    description: "Nghỉ phép, công tác, bổ sung công...",
    href: "/requests",
  },
  {
    id: "my-forms",
    title: "Yêu cầu của tôi",
    icon: "document",
    color: colors.violet,
    backgroundColor: colors.violetSoft,
    description: "Theo dõi trạng thái đơn",
    href: "/requests",
  },
  {
    id: "work-schedule",
    title: "Lịch làm việc",
    icon: "schedule",
    color: colors.pink,
    backgroundColor: colors.pinkSoft,
    description: "Xem ca làm, lịch nghỉ",
    href: "/attendance/schedule",
  },
  {
    id: "approval",
    title: "Phê duyệt",
    icon: "approval",
    color: colors.success,
    backgroundColor: colors.successSoft,
    description: "Duyệt yêu cầu",
    badge: "3",
    href: "/requests",
  },
];

export const overviewStats: OverviewStat[] = [
  {
    id: "work-days",
    label: "Công đã ghi nhận",
    value: "18 / 22",
    icon: "work",
    color: colors.primary,
    backgroundColor: colors.primarySoft,
  },
  {
    id: "leave-days",
    label: "Ngày nghỉ phép",
    value: "1",
    icon: "leave",
    color: colors.success,
    backgroundColor: colors.successSoft,
  },
  {
    id: "late-arrivals",
    label: "Lần đi muộn",
    value: "2",
    icon: "late",
    color: colors.red,
    backgroundColor: colors.pinkSoft,
  },
  {
    id: "missing-work",
    label: "Ngày thiếu công",
    value: "0",
    icon: "missing-work",
    color: colors.red,
    backgroundColor: colors.pinkSoft,
  },
];
