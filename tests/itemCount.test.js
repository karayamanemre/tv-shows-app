/**
 * @jest-environment jsdom
 */

import showCounter from '../src/modules/__mocks__/countShows.js';

test('Number of the show items', () => {
  document.body.innerHTML = `
  <section id="show-list">
    <div></div>
    <div></div>
  </section>
  `;
  expect(showCounter()).toBe(2);
});

test('Number of the show items', () => {
  document.body.innerHTML = `
  <section id="show-list">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </section>
  `;
  expect(showCounter()).toBe(8);
});