// eslint-disable-next-line no-unused-vars
import { showComments, showPop } from '../comments-popup/comments.js';

class Movies {
  constructor() {
    this.moviesList = [];
    this.url = 'https://api.tvmaze.com';
  }

  displayMovies() {
    const mainContainer = document.querySelector('main');
    const i = 0;
    this.moviesList.forEach((movie) => {
      const movieContainer = document.createElement('div');
      movieContainer.className = 'w-20 ma2 bg-white';

      const movieImg = document.createElement('img');
      movieImg.alt = 'movie image';
      movieImg.className = 'db w-100';
      movieImg.src = movie.image.medium;
      movieContainer.appendChild(movieImg);

      const movieName = document.createElement('p');
      movieName.innerText = movie.name;
      movieName.className = 'fl w-80 pt2 ml2 b f3';
      movieContainer.appendChild(movieName);

      const likeIcon = document.createElement('i');
      likeIcon.className = 'fa-regular fa-heart w-10 pt2 f3 red pointer';
      movieContainer.appendChild(likeIcon);

      const likeCounter = document.createElement('p');
      likeCounter.className = 'db w-100 fl tr pt2 pr2 b f4';
      likeCounter.innerText = `${i} likes`;
      movieContainer.appendChild(likeCounter);

      const commentBtn = document.createElement('button');
      commentBtn.type = 'button';
      commentBtn.className = 'db center mt3 mb2 b mw-100';
      commentBtn.innerText = 'Comments';
      commentBtn.addEventListener('click', showComments);
      movieContainer.appendChild(commentBtn);

      const reservationBtn = document.createElement('button');
      reservationBtn.type = 'button';
      reservationBtn.className = 'db center mt3 mb2 b mw-100';
      reservationBtn.innerText = 'Reservations';
      movieContainer.appendChild(reservationBtn);

      mainContainer.appendChild(movieContainer);
    });
  }

  storeMovies(listOfMovies) {
    this.moviesList = listOfMovies;
    this.displayMovies();
  }
}
const movies = new Movies();

export default movies;