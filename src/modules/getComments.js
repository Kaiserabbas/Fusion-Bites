import { apiUrl } from './api.js';

const sendComment = async (id, username, comment) => {
  const request = await fetch(`${apiUrl}/comments/`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
      username: username,
      comment: comment,
    }),
  });
};

const fetchComments = async (id) => {
  const request = await fetch(`${apiUrl}/comments?item_id=${id}`);
  const response = await request.json();
  return response;
};

export { sendComment, fetchComments };
