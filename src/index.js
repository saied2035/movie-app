/* eslint-disable import/no-unresolved */
import 'tachyons';
import './style.css';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import activateItemListStyle from './modules/functions/functions.js';
import getMovies from './modules/events/events.js';
import movies from './modules/movies/Movies.js';

library.add(faHeart);
const whatToDisplay = (event) => {
  activateItemListStyle(event.target);
};

const navbarItemArr = Array.from(document.querySelectorAll('.nav-item'));
navbarItemArr.forEach((item) => item.addEventListener('click', whatToDisplay));

window.addEventListener('load', () => getMovies(movies).then(() => dom.watch()));