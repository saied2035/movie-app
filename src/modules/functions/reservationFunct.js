//Reservations start here
const closeReserve = document.querySelector('.close-reserve');
const main = document.querySelector('main');
const reservePopUpSpace = document.querySelector('#reservePopUpSpace');

//Functions
export const reservationsPopUp = () => {
  reservePopUpSpace.style.visibility = 'visible';
  main.classList.add('blur-bg');
}

export const closeReservePopUp = () => {
  reservePopUpSpace.style.visibility = 'hidden';
  main.classList.remove('blur-bg');
}

//Implementations
closeReserve.addEventListener('click', closeReservePopUp);