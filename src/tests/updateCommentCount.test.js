import updateCommentCount from '../modules/commentCounter.js';

// Mock the DOM element for testing
const commentCountElement = document.createElement('div');

test('updates comment count with the provided count', () => {
  const count = 5;
  updateCommentCount(count, commentCountElement);

  expect(commentCountElement.textContent).toBe(`Counter: ${count}`);
});