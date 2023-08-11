import updateListCounter from '../modules/listCounter.js';

// Mock the HTML structure for testing
document.body.innerHTML = `
  <nav>
    <ul id="nav-list">
      <li class="nav"><a href="#" id="nav-dishes">Dishes</a></li>
      <!-- Other navigation items -->
    </ul>
  </nav>
`;

// Test the function
test('updates the list counter with the provided count', () => {
  // Call the function with a count
  updateListCounter(5);

  // Assert that textContent was updated with the correct value
  expect(document.getElementById('nav-dishes').textContent).toBe('(5) Dishes');
});
