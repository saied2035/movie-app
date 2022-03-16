import 'tachyons';
import './style.css';
import {activateItemListStyle,loadLikes} from './modules/functions/functions.js';
import {getMovies} from './modules/events/events.js';
import movies from './modules/movies/Movies.js';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';

library.add(regularHeart,solidHeart);

const whatToDisplay = (event) => {
  activateItemListStyle(event.target);
};

const navbarItemArr = Array.from(document.querySelectorAll('.nav-item'));
navbarItemArr.forEach((item) => item.addEventListener('click', whatToDisplay));

window.addEventListener('load', () => getMovies(movies).then(() => {
  dom.watch()
  loadLikes(movies.involvmentAPI)
}));