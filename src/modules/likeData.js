import showLikes from './showLike.js';

const apiUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/YGalzGQEsNr86NPpSVf9';

const getLikes = async () => {
  await fetch(`${apiUrl}/likes`)
    .then((response) => response.json())
    .then((response) => showLikes(response));
};

const postLikes = async (id) => {
  await fetch(`${apiUrl}/likes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: id }),
  });
};

export { postLikes, getLikes };