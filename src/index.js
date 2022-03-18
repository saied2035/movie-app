import 'tachyons';
import './style.css';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { activateItemListStyle, loadLikes, itemCounter } from './modules/functions/functions.js';
import { getMovies } from './modules/events/events.js';
import movies from './modules/movies/Movies.js';

library.add(faHeart);

const whatToDisplay = (event) => {
  activateItemListStyle(event.target);
};

const navbarItemArr = Array.from(document.querySelectorAll('.nav-item'));
navbarItemArr.forEach((item) => item.addEventListener('click', whatToDisplay));

window.addEventListener('load', () => getMovies(movies).then(() => {
  loadLikes(movies.involvmentAPI);
  dom.watch();
  itemCounter();
/*  const container = document.querySelector('main')
    const element = document.querySelector('#movie20')
  console.log(element.offsetLeft,container.lastChild)
  container.scrollTo({top:0,left:element.offsetLeft-64,behavior:'smooth'})*/
}));

// 1.043191800878477