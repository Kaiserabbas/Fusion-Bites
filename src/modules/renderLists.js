import getFoodItems from './getItems.js';
import { updateLikes, saveLikes } from './likesFunctions.js';
import applyPopup from './popup.js';
import updateListCounter from './listCounter.js';

// Fetch data from the API and display the item list
getFoodItems()
  .then((data) => {
    renderItemList(data.meals);
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });
const username = 'YourUsername';

const renderItemList = async (items) => {
  const itemListElement = document.getElementById('item-list');

  items.forEach(async (item) => {
    const itemElement = document.createElement('div');
    itemElement.className = 'item';

    const itemId = document.createElement('div');
    itemId.className = 'item-id';
    itemId.dataset.itemId = item.idMeal;
    itemId.textContent = item.strMeal;

    const likeButton = document.createElement('i');
    likeButton.className = 'like-icon fa-solid fa-thin fa-thumbs-up';
    const likedItems = JSON.parse(localStorage.getItem('likedItems')) || [];
    if (likedItems.includes(item.idMeal)) {
      likeButton.classList.add('liked');
      likeButton.disabled = true;
    }

    const likeCountElement = document.createElement('div');
    likeCountElement.className = 'like-count';

    const innerImage = document.createElement('img');
    innerImage.className = 'item-image';
    innerImage.src = item.strMealThumb;

    const commentButton = document.createElement('button');
    commentButton.className = 'item-comment';
    commentButton.textContent = 'Comments';
    commentButton.addEventListener('click', async () => {
      applyPopup(item.idMeal, items, username); // Pass the 'items' array and username
    });

    itemElement.appendChild(innerImage);
    itemElement.appendChild(itemId);
    itemElement.appendChild(likeButton);
    itemElement.appendChild(likeCountElement);
    itemElement.appendChild(commentButton);

    itemListElement.appendChild(itemElement);

    likeButton.addEventListener('click', async () => {
      if (!likeButton.classList.contains('liked')) {
        await saveLikes(item.idMeal);
        likeButton.classList.add('liked');
        updateLikes(likeCountElement, item.idMeal);
      }
    });
    // Update the list counter
    updateListCounter(items.length);
    updateLikes(likeCountElement, item.idMeal);
  });
};

export default renderItemList;
