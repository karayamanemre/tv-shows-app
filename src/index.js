import './style.css';
import Logo from './assets/logo.png';
import displayShows from './modules/showList.js';
import fetchData from './modules/apiData.js';
import popUpHandler from './modules/commentPopUp.js';

const logo = new Image();
logo.src = Logo;

const logoDiv = document.getElementById('logo');
logoDiv.appendChild(logo);

fetchData();
displayShows();
popUpHandler()