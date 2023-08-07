import getFoodItems from './getItems.js';

// Fetch data from the API and display the item list
getFoodItems()
  .then((data) => {
    renderItemList(data.meals);
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });

// Render the item list on the home page
export function renderItemList(items) {
  const itemListElement = document.getElementById('item-list');

  items.forEach((item) => {
    const itemElement = document.createElement('div');
    itemElement.id = 'item';
    const itemId = document.createElement('div');
    itemId.id = 'item-id';
    itemId.dataset.itemId = item.idMeal;
    itemId.textContent = item.strMeal;
    const innerImage = document.createElement('img');
    innerImage.id = 'item-image';
    innerImage.src = item.strMealThumb;
    itemElement.appendChild(innerImage);
    itemElement.appendChild(itemId);
    itemListElement.appendChild(itemElement);
  });
}

export default renderItemList;
