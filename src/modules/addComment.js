import showComments from './fetchComment.js';
import renderComment from './renderComment.js';

const api = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/YGalzGQEsNr86NPpSVf9';

const addComment = (id) => {
  const userInput = document.querySelector('.username');
  const userComment = document.querySelector('.comment');
  const submitButton = document.querySelector('.submit_button');

  submitButton.addEventListener('click', async () => {
    if (!userInput.value) {
      userInput.setCustomValidity('Please input your name');
      userInput.reportValidity();
      setTimeout(() => {
        userInput.setCustomValidity('');
      }, 1500);
      return;
    }

    if (!userComment.value) {
      userComment.setCustomValidity('Please input your insight');
      userComment.reportValidity();
      setTimeout(() => {
        userComment.setCustomValidity('');
      }, 1500);
      return;
    }

    await fetch(`${api}/comments`, {
      method: 'POST',
      body: JSON.stringify({
        item_id: `${+id}`,
        username: userInput.value,
        comment: userComment.value,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    await showComments(id);
    renderComment(userInput.value, userComment.value);

    userInput.value = '';
    userComment.value = '';
  });
};

export default addComment;