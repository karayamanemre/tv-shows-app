import './style.css';
import Logo from './assets/logo.png';
import createList from './modules/showList.js';
import fetchData from './modules/apiData.js';
import { getLikes, postLikes } from './modules/likeData.js';
import showCount from './modules/itemCount.js';
import Loader from './assets/loader.svg';

const logo = new Image();
const loader = new Image();
const logoDiv = document.getElementById('logo');
const loaderDiv = document.getElementById('loader');
const showList = document.getElementById('show-list');

loader.src = Loader;
logo.src = Logo;
logoDiv.appendChild(logo);
loaderDiv.appendChild(loader);

const listLoaded = () => {
  if (showList.children.length > 0) {
    loaderDiv.hidden = true;
  }
};

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

window.addEventListener('load', listLoaded);

showCount();
fetchData();
getLikes();
createList();
