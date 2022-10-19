import './style.css';
import Logo from './assets/logo.png';
import createList from './modules/showList.js';
import fetchData from './modules/apiData.js';
import { getLikes, postLikes } from './modules/likeData.js';
import showCount from './modules/itemCount.js';

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
    likeNum += 1;
    likeDisplay.textContent = String(likeNum);
  }
});

showCount();
fetchData();
getLikes();
createList();