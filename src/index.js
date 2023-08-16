import './modules/index.css';
import logo from './modules/logo.js';
import renderItemList from './modules/renderLists.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const init = () => {
  logo();
  renderItemList();
};
init();

document.addEventListener('DOMContentLoaded', function () {
  // Get the dropdown button and menu by their IDs
  const dropdownButton = document.getElementById('dropdownMenuButton1');
  const dropdownMenu = document.getElementById('dropdownMenu1');

  // Add click event listener to the dropdown button
  dropdownButton.addEventListener('click', function () {
    // Toggle the 'show' class on the dropdown menu
    dropdownMenu.classList.toggle('show');
  });

  // Close the dropdown menu when clicking outside
  window.addEventListener('click', function (event) {
    if (!dropdownButton.contains(event.target)) {
      dropdownMenu.classList.remove('show');
    }
  });
});
