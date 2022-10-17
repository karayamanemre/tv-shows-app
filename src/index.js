import './style.css';
import Logo from './assets/logo.png';

const logo = new Image();
logo.src = Logo;

const logoDiv = document.getElementById('logo');
logoDiv.appendChild(logo);
