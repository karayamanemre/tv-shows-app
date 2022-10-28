import './style.css';
import Logo from './assets/logo.png';
import createList from './modules/showList.js';
import fetchData from './modules/apiData.js';
import { getLikes, postLikes } from './modules/likeData.js';
import Loader from './assets/loader.svg';

const logo = new Image();
const loader = new Image();
const logoDiv = document.getElementById('logo');
const loaderDiv = document.getElementById('loader');

loader.src = Loader;
logo.src = Logo;
logoDiv.appendChild(logo);
loaderDiv.appendChild(loader);

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

getLikes();
fetchData();
createList();
