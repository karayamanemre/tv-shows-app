import LikeIcon from '../assets/like-icon.png';

const createList = (shows) => {
  const displayContainer = document.getElementById('show-list');
  shows.forEach((item) => {
    displayContainer.innerHTML += `
    <div class="item">
      <img class="img" src="${item.image.medium}" alt="${item.name} poster">
      <span class="title">
        <h3>${item.name}</h3>
        <img src="./assets/like-icon.png">
      </span>
      <p>Genres: ${item.genres}</p>
      <button>Comment</button>
    </div>
    `;
  });
};

export default createList;
