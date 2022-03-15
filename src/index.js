import 'tachyons';
import './style.css';
import activateItemListStyle from './modules/functions/functions.js';

const whatToDisplay = (event) => {
  activateItemListStyle(event.target);
};

const navbarItemArr = Array.from(document.querySelectorAll('.nav-item'));
navbarItemArr.forEach((item) => item.addEventListener('click', whatToDisplay));

