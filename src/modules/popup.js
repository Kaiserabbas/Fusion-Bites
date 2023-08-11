import { sendComment, fetchComments } from './getComments.js'; // Import comment-related functions
import updateCommentCount from './commentCounter.js';
const fetchFoodDetails = async (id) => {
  const request = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  const response = await request.json();
  const data = response.meals[0];
  return data;
};

export const applyPopup = async (itemId, items) => {
  const item = getItemById(itemId, items);
  if (!item) return;
  const detailedItem = await fetchFoodDetails(itemId); // Fetch additional details

  const popupContainer = document.createElement('div');
  popupContainer.className = 'popup-container';

  const popupContent = document.createElement('div');
  popupContent.className = 'popup-content';

  const closeButton = document.createElement('span');
  closeButton.className = 'close-button';
  closeButton.innerHTML = '&times;';
  closeButton.addEventListener('click', () => {
    popupContainer.remove();
  });

  const popupImage = document.createElement('img');
  popupImage.className = 'popup-image';
  popupImage.src = item.strMealThumb;

  const itemName = document.createElement('h2');
  itemName.textContent = item.strMeal;

  const additionalDetails = document.createElement('div');
  additionalDetails.className = 'additional-details';

  const category = document.createElement('p');
  category.textContent = `Category: ${detailedItem.strCategory}`;

  const instructions = document.createElement('p');
  instructions.textContent = `Instructions: ${detailedItem.strInstructions}`;

  const usernameElement = document.createElement('input');
  usernameElement.className = 'username';
  usernameElement.placeholder = 'Enter your username'; // Placeholder text

  const commentsTextArea = document.createElement('textarea');
  commentsTextArea.className = 'comments-textarea';
  commentsTextArea.placeholder = 'Leave a comment...';

  const commentButton = document.createElement('button');
  commentButton.className = 'comment-button';
  commentButton.textContent = 'Comment';
  commentButton.addEventListener('click', async () => {
    const comment = commentsTextArea.value;
    const username = usernameElement.value; // Get username from the input field
    if (comment.trim() !== '' && username.trim() !== '') {
      await sendComment(item.idMeal, username, comment);
      commentsTextArea.value = '';
      updateComments(item.idMeal, popupContent);
    }
  });

  const commentCountElement = document.createElement('div');
  commentCountElement.className = 'comment-count';
  commentCountElement.textContent = '0 Comments'; // Initialize with 0 comments

  updateCommentCount(0, commentCountElement); // Initialize comment count

  additionalDetails.appendChild(category);
  additionalDetails.appendChild(instructions);

  popupContent.appendChild(closeButton);
  popupContent.appendChild(popupImage);
  popupContent.appendChild(itemName);
  popupContent.appendChild(additionalDetails); // Append additional details

  popupContent.appendChild(usernameElement);
  popupContent.appendChild(commentsTextArea);
  popupContent.appendChild(commentButton);
  popupContent.appendChild(commentCountElement);

  popupContainer.appendChild(popupContent);
  document.body.appendChild(popupContainer);
  updateComments(item.idMeal, popupContent, commentCountElement); // Pass commentCountElement
};

const getItemById = (itemId, items) => {
  return items.find((item) => item.idMeal === itemId);
};

const updateComments = async (itemId, popupContent, commentCountElement) => {
  const commentsContainer = document.createElement('div');
  commentsContainer.className = 'comments-container';

  const comments = await fetchComments(itemId);

  if (Array.isArray(comments)) {
    // Check if comments is an array
    comments.forEach((commentData) => {
      const commentElement = document.createElement('div');
      commentElement.className = 'comment';
      commentElement.innerHTML = `<strong>${commentData.username}:</strong> ${commentData.comment}`;
      commentsContainer.appendChild(commentElement);
    });

    const commentCountElement = document.querySelector('.comment-count');
    if (commentCountElement) {
      updateCommentCount(comments.length, commentCountElement);
    }
  } else {
    // Handle the case where comments is not an array (e.g., if it's an object or null)
    const errorMessage = document.createElement('div');
    errorMessage.textContent = 'No comments available.';
    commentsContainer.appendChild(errorMessage);
    updateCommentCount(0, commentCountElement); // Update comment count
  }

  const existingCommentsContainer = popupContent.querySelector(
    '.comments-container'
  );
  if (existingCommentsContainer) {
    existingCommentsContainer.replaceWith(commentsContainer);
  } else {
    popupContent.appendChild(commentsContainer);
  }
};