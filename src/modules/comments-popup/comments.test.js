/**
 * @jest-environment jsdom
 */

import commentsCounter from './mockCommentCounter.js';

describe('Counts the total number of comments for each movie', () => {
  document.body.innerHTML = '<li id="comments-count"></li>';

  test('Reads added comments correctly and updates', () => {
    const testArr1 = [{ date: new Date('22/02/2022'), username: 'Saied', message: 'lets gooooooo!' }];
    const result1 = commentsCounter(testArr1);
    expect(result1).toBe(1);

    const testArr2 = [{ date: new Date('22/02/2022'), username: 'Saied', message: 'lets gooooooo!' }, { date: new Date('22/02/2022'), username: 'Max', message: 'hell yea!' }];
    const result2 = commentsCounter(testArr2);
    expect(result2).toBe(2);

    const testArr3 = [{ date: new Date('22/02/2022'), username: 'Saied', message: 'lets gooooooo!' }, { date: new Date('22/02/2022'), username: 'Max', message: 'hell yea!' }, { date: new Date('22/02/2022'), username: 'Chia', message: 'haha!' }];
    const result3 = commentsCounter(testArr3);
    expect(result3).toBe(3);
  });
});