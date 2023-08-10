import getFoodItems from './getItems.js';
import { FOOD_BASE_URL } from './api.js';
import { getLikes, saveLikes } from './likesFunctions.js';

// Fetch data from the API and display the item list
getFoodItems()
  .then((data) => {
    renderItemList(data.meals);
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });

async function updateLikes(likeCountElement, id) {
  const dataLikes = await getLikes();
  const likeCount = dataLikes.find((obj) => obj.item_id === id);
  if (likeCount) {
    likeCountElement.textContent = `${likeCount.likes} likes`;
  } else {
    likeCountElement.textContent = `0 likes`;
  }
  likeCountElement.textContent = `${likeCount.likes} likes`;
}

async function renderItemList(items) {
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

    itemElement.appendChild(innerImage);
    itemElement.appendChild(itemId);
    itemElement.appendChild(likeButton);
    itemElement.appendChild(likeCountElement);
    itemListElement.appendChild(itemElement);

    likeButton.addEventListener('click', async () => {
      if (!likeButton.classList.contains('liked')) {
        await saveLikes(item.idMeal);
        likeButton.classList.add('liked');
        updateLikes(likeCountElement, item.idMeal);
      }
    });

    updateLikes(likeCountElement, item.idMeal);
  });
}

async function initializeItemList() {
  try {
    const response = await fetch(FOOD_BASE_URL);
    if (!response.ok) {
      throw new Error(`Failed to fetch items with status: ${response.status}`);
    }
    const data = await response.json();
    renderItemList(data.meals);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

function likeFlash() {
  let a;
  a = document.querySelectorAll('.liked');
  a.innerHTML = '&#xf006;';
  setTimeout(function () {
    a.innerHTML = '&#xf123;';
  }, 1000);
  setTimeout(function () {
    a.innerHTML = '&#xf005;';
  }, 2000);
}
likeFlash();
setInterval(likeFlash, 3000);

initializeItemList();
