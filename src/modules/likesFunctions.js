import { apiUrl } from './api.js';

async function getLikes() {
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
}

async function saveLikes(id) {
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
  } catch (error) {
    console.error('Error saving like:', error);
  }
}

export { getLikes, saveLikes };
