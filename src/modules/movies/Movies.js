import { saveLike } from '../events/events.js';
import {reservationsPopUp} from '../functions/reservationFunct.js'

class Movies {
  constructor() {
    this.moviesList = [];
    this.url = 'https://api.tvmaze.com';
    this.appId = '6IS1WqwHJvP8CAVA1Fp2';
    this.involvmentAPI = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${this.appId}`;
    this.i = 0;
  }

  displayMovies() {
    const mainContainer = document.querySelector('main');
    this.moviesList.forEach((movie) => {
      const movieContainer = document.createElement('div');
      movieContainer.className = 'movie-item w-50 w-40-m w-20-ns ma2 bg-white';
      movieContainer.id = `movie${movie.id}`;

      const movieImg = document.createElement('img');
      movieImg.alt = 'movie image';
      movieImg.className = 'db w-100';
      movieImg.src = movie.image.medium;
      movieImg.loading = 'lazy';
      movieContainer.appendChild(movieImg);

      const movieName = document.createElement('p');
      movieName.innerText = movie.name;
      movieName.className = 'fl w-80 pt2 ml2 b f3';
      movieContainer.appendChild(movieName);

      const likeIconContainer = document.createElement('span');
      likeIconContainer.className = 'pointer';
      const likeIcon = document.createElement('i');
      likeIcon.className = 'fa-solid fa-heart w-10 pt2 f3 white pointer';
      likeIconContainer.appendChild(likeIcon);
      likeIconContainer.addEventListener('click', (event) => saveLike(event, this.involvmentAPI));
      movieContainer.appendChild(likeIconContainer);

      const hiddenId = document.createElement('span');
      hiddenId.className = 'dn hidden-id';
      hiddenId.innerText = movie.id;
      movieContainer.appendChild(hiddenId);

      const likeCounter = document.createElement('p');
      likeCounter.className = 'like-counter db w-100 fl tr pt2 pr2 b f4';
      likeCounter.innerText = '0 likes';
      movieContainer.appendChild(likeCounter);

      const commentBtn = document.createElement('button');
      commentBtn.type = 'button';
      commentBtn.className = 'db center mt3 mb2 b mw-100';
      commentBtn.innerText = 'Comments';
      movieContainer.appendChild(commentBtn);

      const reservationBtn = document.createElement('button');
      reservationBtn.type = 'button';
      reservationBtn.className = 'db center mt3 mb2 b mw-100';
      reservationBtn.id = this.i;
      this.i += 1;
      reservationBtn.innerText = 'Reservations';
      reservationBtn.addEventListener('click', reservationsPopUp);
      movieContainer.appendChild(reservationBtn);
      mainContainer.appendChild(movieContainer);
    });
  }

  storeMovies(listOfMovies) {
    this.moviesList = listOfMovies;
    if (!localStorage.movies) localStorage.setItem('movies', JSON.stringify(this.moviesList));

    this.displayMovies();
  }
}
const movies = new Movies();

export default movies;