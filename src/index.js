import './style.css';
import Logo from './assets/logo.png';
import displayShows from './modules/showList.js';
import fetchData from './modules/apiData.js';
import popUpHandler from './modules/commentPopUp.js';
import { getLikes, postLikes } from './modules/likeData.js';
import showCount from './modules/showCount.js';

const logo = new Image();
const logoDiv = document.getElementById('logo');

logo.src = Logo;
logoDiv.appendChild(logo);

window.addEventListener('click', (e) => {
  if (e.target.classList.contains('like-icon')) {
    const targetId = e.target.id;
    postLikes(targetId);
    const likeDisplay = e.target.nextElementSibling;
    let likeNum = Number(e.target.nextElementSibling.textContent);
    likeNum = likeNum + 1;
    likeDisplay.textContent = String(likeNum);
  }
});

showCount();
getLikes();
fetchData();
displayShows();
popUpHandler();
