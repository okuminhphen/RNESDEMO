export type Payslip = {
  id: string;
  month: number;
  year: number;
  issuedAt: string;
  baseSalary: number;
  allowance: number;
  overtimePay: number;
  bonus: number;
  deduction: number;
  workDays: number;
  totalWorkDays: number;
  overtimeHours: number;
};

// Mock data until the payroll API is available. Net amounts are derived from
// the displayed line items so the card and history remain consistent.
export const payslips: Payslip[] = [
  {
    id: '2025-09', month: 9, year: 2025, issuedAt: '25/09/2025',
    baseSalary: 12000000, allowance: 2000000, overtimePay: 800000,
    bonus: 1000000, deduction: 520000, workDays: 18, totalWorkDays: 22,
    overtimeHours: 12,
  },
  {
    id: '2025-08', month: 8, year: 2025, issuedAt: '25/08/2025',
    baseSalary: 11500000, allowance: 2000000, overtimePay: 750000,
    bonus: 1000000, deduction: 500000, workDays: 20, totalWorkDays: 22,
    overtimeHours: 10,
  },
  {
    id: '2025-07', month: 7, year: 2025, issuedAt: '25/07/2025',
    baseSalary: 11000000, allowance: 2000000, overtimePay: 500000,
    bonus: 1000000, deduction: 520000, workDays: 19, totalWorkDays: 23,
    overtimeHours: 8,
  },
];

export function getNetSalary(payslip: Payslip) {
  return payslip.baseSalary + payslip.allowance + payslip.overtimePay
    + payslip.bonus - payslip.deduction;
}

export function formatVnd(amount: number) {
  return `${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')} đ`;
}
