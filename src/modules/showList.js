import LikeIcon from '../assets/like-icon.png';

const createList = (shows) => {
  const displayContainer = document.getElementById('show-list');
  shows.forEach((item, index) => {
    displayContainer.innerHTML += `
    <div class="card">
      <img class="img" src="${item.image.medium}" alt="${item.name} poster">
      <h3 class="title">${item.name}</h3>
      <div class="likes">
        <img class="like-icon" id='${item.id}' src="${LikeIcon}">
        <p class="like-count" id='${item.id}'>0</p>
      </div>
      <p>Genres:</p>
      <p>${item.genres}</p>
      <button class="comment_button" data-id=${index + 1}>Comment</button>
    </div>
    `;
  });
};

export default createList;
