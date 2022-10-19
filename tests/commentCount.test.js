/**
 * @jest-environment jsdom
 */

import countComments from '../src/modules/__mocks__/commentCount.js';

it('should return the number of comments element in the DOM', () => {
  document.body.innerHTML = `
  <p class='comment_paragraph'></p>
  <p class='comment_paragraph'></p>
  <p class='comment_paragraph'></p>
  <p class='comment_paragraph'></p>
  `;
  expect(countComments()).toBe(4);
});

it('should return the number of comments element in the DOM', () => {
  document.body.innerHTML = `
  <p></p>
  `;
  expect(countComments()).toBe(0);
});