import LikeIcon from '../assets/like-icon.png';

const createList = (shows) => {
  const displayContainer = document.getElementById('show-list');
  shows.forEach((item, index) => {
    displayContainer.innerHTML += `
    <div class="card">
      <div class="img" style="background: url('${item.image.medium}'); background-position: center; background-repeat: no-repeat; background-size: cover;">
        <span>${item.summary}</span>
      </div>
      <h3 class="title">${item.name}</h3>
      <div class="likes">
        <img class="like-icon" id='${item.id}' src="${LikeIcon}">
        <p class="like-count" id='${item.id}'>0</p><p>Likes</p>
      </div>
      <button class="comment_button" data-id=${index + 1}>
        <span class="button-top">Comment</span></button>
    </div>
    `;
  });
};

export default createList;
