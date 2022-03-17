//Reservations start here
const closeReserve = document.querySelector('.close-reserve');
const main = document.querySelector('main');
const reservePopUpSpace = document.querySelector('#reservePopUpSpace');
const movieSpace = document.querySelector('#movieSpace');
const local = JSON.parse(localStorage.getItem('movies'));
const reserveImage = document.createElement('img');
const ReserveName = document.createElement('h4');
const description = document.createElement('div');

//Functions
export const reservationsPopUp = (event) => {
  reserveImage.src = local[event.target.id].image.original;
  reserveImage.className = 'reserveImg';
  ReserveName.innerText = `Title: ${local[event.target.id].name}`;
  description.innerHTML = local[event.target.id].summary;

  movieSpace.appendChild(reserveImage);
  movieSpace.appendChild(ReserveName);
  movieSpace.appendChild(description);
  reservePopUpSpace.style.visibility = 'visible';
  main.classList.add('blur-bg');
}

export const closeReservePopUp = () => {
  reservePopUpSpace.style.visibility = 'hidden';

  main.classList.remove('blur-bg');
}

//Implementations
closeReserve.addEventListener('click', closeReservePopUp);