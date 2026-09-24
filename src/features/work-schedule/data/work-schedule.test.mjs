import assert from 'node:assert/strict';
import test from 'node:test';

import { getScheduleDetail } from './work-schedule.mock.ts';

test('a day without a shift is not marked as working', () => {
  const detail = getScheduleDetail(20);

  assert.equal(detail.status, 'off');
  assert.equal(detail.shift, 'Không có ca');
  assert.equal(detail.workedTime, 'Không có giờ làm việc');
});

test('the reference workday retains its displayed shift', () => {
  const detail = getScheduleDetail(17);

  assert.equal(detail.status, 'working');
  assert.equal(detail.shiftTime, '08:00 - 17:30');
  assert.equal(detail.workedTime, 'Đã làm: 1 giờ 41 phút');
});

test('weekly schedule follows the selected date', async () => {
  const { getWeekSchedule } = await import('./work-schedule.mock.ts');

  assert.deepEqual(getWeekSchedule(17).map((day) => day.date), [
    '15/09', '16/09', '17/09', '18/09', '19/09',
  ]);
  assert.deepEqual(getWeekSchedule(2).map((day) => day.date), [
    '01/09', '02/09', '03/09', '04/09', '05/09',
  ]);
  assert.equal(getWeekSchedule(2)[3].label, 'Nghỉ phép');
});
