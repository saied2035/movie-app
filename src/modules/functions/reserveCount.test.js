/**
 * @jest-environment jsdom
 */
import { reserveCount } from './addReserve.js';

test('Returns count of Reservations', () => {
  document.body.innerHTML = '<div id ="reserveCount"></div>';
  const test1 = [
    {
      date_start: '2022-03-02',
      username: 'Max',
      date_end: '2022-03-22',
    },
  ];
  const result1 = reserveCount(test1);
  expect(result1).toBe(1);

  const test2 = [
    {
      date_start: '2022-03-02',
      username: 'Max',
      date_end: '2022-03-22',
    },

    {
      date_start: '2022-03-02',
      username: 'Joe',
      date_end: '2022-03-22',
    },
  ];
  const result2 = reserveCount(test2);
  expect(result2).toBe(2);

  const test3 = [
    {
      date_start: '2022-03-02',
      username: 'Max',
      date_end: '2022-03-22',
    },
    {
      date_start: '2022-03-02',
      username: 'Joe',
      date_end: '2022-03-22',
    },
    {
      date_start: '2022-03-02',
      username: 'John',
      date_end: '2022-03-22',
    },
  ];
  const result3 = reserveCount(test3);
  expect(result3).toBe(3);
});