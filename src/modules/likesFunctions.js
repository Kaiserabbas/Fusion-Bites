import { apiUrl } from './api.js';

const getLikes = async () => {
  try {
    const response = await fetch(`${apiUrl}/likes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch likes with status: ${response.status}`);
    }

    const likesData = await response.json();
    return likesData;
  } catch (error) {
    console.error('Error fetching likes:', error);
    return [];
  }
};

const saveLikes = async (id) => {
  try {
    const response = await fetch(`${apiUrl}/likes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ item_id: id }),
    });

    if (!response.ok) {
      throw new Error(`Failed to save like with status: ${response.status}`);
    }

    console.log('Like saved successfully');
    const likedItems = JSON.parse(localStorage.getItem('likedItems')) || [];
    likedItems.push(id);
    localStorage.setItem('likedItems', JSON.stringify(likedItems));
  } catch (error) {
    console.error('Error saving like:', error);
  }
};

const updateLikes = async (likeCountElement, id) => {
  const dataLikes = await getLikes();
  const likeCount = dataLikes.find((obj) => obj.item_id === id);
  if (likeCount) {
    likeCountElement.textContent = `${likeCount.likes} likes`;
  } else {
    likeCountElement.textContent = `0 likes`;
  }
  likeCountElement.textContent = `${likeCount.likes} likes`;
};

export { getLikes, saveLikes, updateLikes };
