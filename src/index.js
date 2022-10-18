import './style.css';
import Logo from './assets/logo.png';
import displayShows from './modules/showList.js';
import fetchData from './modules/apiData.js';
import popUpHandler from './modules/commentPopUp.js';
import { getLikes, postLikes } from './modules/likeData.js';

const logo = new Image();
logo.src = Logo;

const logoDiv = document.getElementById('logo');
logoDiv.appendChild(logo);

window.addEventListener('click', (e) => {
  if (e.target.classList.contains('like-icon')) {
    const targetId = e.target.id;
    postLikes(targetId);
    getLikes();
  }
});

getLikes();
fetchData();
displayShows();
popUpHandler();
