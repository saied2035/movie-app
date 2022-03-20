import 'tachyons';
import './style.css';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faTimes, faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { activateItemListStyle, loadLikes, itemCounter } from './modules/functions/functions.js';
import { getMovies } from './modules/events/events.js';
import movies from './modules/movies/Movies.js';
import addReserve from './modules/functions/addReserve.js';
library.add(faHeart, faTimes, faAngleRight, faAngleLeft);

const whatToDisplay = (event) => {
  activateItemListStyle(event.target);
};

const navbarItemArr = Array.from(document.querySelectorAll('.nav-item'));
navbarItemArr.forEach((item) => item.addEventListener('click', whatToDisplay));

window.addEventListener('load', () => getMovies(movies).then(() => {
  loadLikes(movies.involvmentAPI);
  dom.watch();
  itemCounter();
}));

const reserveForm = document.querySelector('#reserveForm');
reserveForm.addEventListener('submit', (event) => {
  event.preventDefault();
  addReserve(event);
});

