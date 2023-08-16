import updateListCounter from '../modules/listCounter.js';

// Mock the HTML structure for testing
document.body.innerHTML = `
  <nav>
    <ul id="nav-list">
          <li><a class="dropdown-item" href="#" id="american">American</a></li>
          <li>
            <a class="dropdown-item" href="#" id="pakistani">Pakistani</a>
          </li>
          <li><a class="dropdown-item" href="#" id="mexican">Mexican</a></li>
    </ul>
  </nav>
`;

// Test the function
test('updates the list counter with the provided count', () => {
  // Call the function with a count
  updateListCounter(5);

  // Assert that textContent was updated with the correct value
  expect(document.getElementById('american').textContent).toBe('(5) American');
});
