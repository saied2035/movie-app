import { getReserve } from "../events/reserve_api.js";
//Reservations start here
const closeReserve = document.querySelector('.close-reserve');
const main = document.querySelector('main');
const body = document.querySelector('body');
const reservePopUpSpace = document.querySelector('#reservePopUpSpace');
const movieSpace = document.querySelector('#movieSpace');
const local = JSON.parse(localStorage.getItem('movies'));
const reserveImage = document.createElement('img');
const ReserveName = document.createElement('h4');
const hidden_id = document.createElement('span');
// const description = document.createElement('div');

//Functions
export const reservationsPopUp = (event) => {
  reserveImage.src = local[event.target.id].image.original;
  reserveImage.className = 'reserveImg';
  ReserveName.innerText = `Title: ${local[event.target.id].name}`;
  hidden_id.className = 'hidden_id';
  hidden_id.innerText = event.target.id;
  // description.innerHTML = local[event.target.id].summary;

  movieSpace.appendChild(reserveImage);
  movieSpace.appendChild(ReserveName);
  // movieSpace.appendChild(description);
  movieSpace.appendChild(hidden_id);
  reservePopUpSpace.style.visibility = 'visible';
  main.classList.add('blur-bg');
  body.classList.add('no-scroll');
  getReserve(hidden_id.innerText);
}

export const closeReservePopUp = () => {
  reservePopUpSpace.style.visibility = 'hidden';
  main.classList.remove('blur-bg');
  body.classList.remove('no-scroll');
}

//Implementations
closeReserve.addEventListener('click', closeReservePopUp);