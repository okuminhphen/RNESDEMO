export const requestStats = [
  { id: 'pending', label: 'Chờ duyệt', value: '2', tone: 'warning', icon: 'pending' },
  { id: 'approved', label: 'Đã duyệt', value: '12', tone: 'success', icon: 'approved' },
  { id: 'rejected', label: 'Từ chối', value: '1', tone: 'danger', icon: 'rejected' },
] as const;

export const requestTypes = [
  { id: 'leave', title: 'Nghỉ phép', subtitle: 'Phép năm, nghỉ ốm', icon: 'leave' },
  { id: 'overtime', title: 'Làm thêm giờ', subtitle: 'Đăng ký OT', icon: 'overtime' },
  { id: 'remote', title: 'Làm từ xa', subtitle: 'Đăng ký WFH', icon: 'remote' },
  { id: 'late', title: 'Đi muộn / về sớm', subtitle: 'Bổ sung lý do', icon: 'late' },
] as const;

export const recentRequests = [
  {
    id: 'REQ-0925-018',
    type: 'Nghỉ phép năm',
    period: '17/09/2025 · 1 ngày',
    submittedAt: 'Gửi ngày 15/09/2025',
    status: 'Đã duyệt',
    tone: 'success',
  },
  {
    id: 'REQ-0925-021',
    type: 'Làm thêm giờ',
    period: '19/09/2025 · 18:00–20:00',
    submittedAt: 'Gửi ngày 17/09/2025',
    status: 'Chờ duyệt',
    tone: 'warning',
  },
  {
    id: 'REQ-0925-006',
    type: 'Làm việc từ xa',
    period: '05/09/2025 · 1 ngày',
    submittedAt: 'Gửi ngày 03/09/2025',
    status: 'Từ chối',
    tone: 'danger',
  },
] as const;
