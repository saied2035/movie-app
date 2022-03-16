/**
 * @jest-environment jsdom
 */
import { itemCounter } from './functions.js';

describe('itemCounter test', () => {
  document.body.innerHTML = '<li class="nav-item ml5-ns mr5-ns ml3-m mr3-m pointer bold-underline">Movies</li>';

  test('test number of itemCounter', () => {
    document.body.innerHTML += '<div class="movie-item w-50 w-40-m w-20-ns ma2 bg-white" id="movie1"></div>';
    const result1 = itemCounter();
    expect(result1).toBe(1);

    document.body.innerHTML += '<div class="movie-item w-50 w-40-m w-20-ns ma2 bg-white" id="movie1"></div>';
    const result2 = itemCounter();
    expect(result2).toBe(2);

    document.body.innerHTML += '<div class="movie-item w-50 w-40-m w-20-ns ma2 bg-white" id="movie1"></div>';
    const result3 = itemCounter();
    expect(result3).toBe(3);
  });
});