export const salaryBreakdown = [
  { id: 'base', label: 'Lương cơ bản', value: '18.000.000 ₫', tone: 'positive' },
  { id: 'allowance', label: 'Phụ cấp', value: '2.500.000 ₫', tone: 'positive' },
  { id: 'overtime', label: 'Làm thêm giờ', value: '1.280.000 ₫', tone: 'positive' },
  { id: 'insurance', label: 'Bảo hiểm & thuế', value: '-2.346.000 ₫', tone: 'negative' },
] as const;

export const payslips = [
  { id: '2025-09', month: 'Tháng 9/2025', issuedAt: '30/09/2025', net: '19.434.000 ₫' },
  { id: '2025-08', month: 'Tháng 8/2025', issuedAt: '31/08/2025', net: '18.920.000 ₫' },
  { id: '2025-07', month: 'Tháng 7/2025', issuedAt: '31/07/2025', net: '19.105.000 ₫' },
] as const;
