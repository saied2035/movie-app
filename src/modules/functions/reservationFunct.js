import { getReserve } from '../events/reserve_api.js';
import { reserveCount } from './addReserve.js';
// Reservations start here
const closeReserve = document.querySelector('.close-reserve');
const main = document.querySelector('main');
const body = document.querySelector('body');
const reservePopUpSpace = document.querySelector('#reservePopUpSpace');
const movieSpace = document.querySelector('#movieSpace');
const local = JSON.parse(localStorage.getItem('movies'));
const reserveImage = document.createElement('img');
const ReserveName = document.createElement('h4');
const hiddenId = document.createElement('span');
const description = document.createElement('div');

// Functions
export const reservationsPopUp = (event) => {
  reserveImage.src = local[event.target.id].image.original;
  reserveImage.className = 'reserveImg';
  ReserveName.innerText = `Title: ${local[event.target.id].name}`;
  hiddenId.className = 'hidden_id dn';
  hiddenId.innerText = event.target.id;
  description.innerHTML = local[event.target.id].summary;

  movieSpace.appendChild(reserveImage);
  movieSpace.appendChild(ReserveName);
  movieSpace.appendChild(description);
  movieSpace.appendChild(hiddenId);
  reservePopUpSpace.style.visibility = 'visible';
  main.classList.add('blur-bg');
  body.classList.add('no-scroll');
  getReserve(hiddenId.innerText).then((loadReserves) => reserveCount(loadReserves));
};

export const closeReservePopUp = () => {
  const reserveCountDisplay = document.querySelector('#reserveCount');
  reserveCountDisplay.innerText = '';
  reservePopUpSpace.style.visibility = 'hidden';
  main.classList.remove('blur-bg');
  body.classList.remove('no-scroll');
};

// Implementations
closeReserve.addEventListener('click', closeReservePopUp);