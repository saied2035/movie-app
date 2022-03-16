import { loadLikes } from '../functions/functions.js';

export const getMovies = async (movies) => {
  if (localStorage.movies) {
    const moviesList = JSON.parse(localStorage.movies);
    movies.storeMovies(moviesList);
    return;
  }
  const moviesList = await fetch(`${movies.url}/shows`)
    .then((res) => res.json());
  movies.storeMovies(moviesList);
};

export const saveLike = (e, api) => {
  const likeIcon = e.target;

  const likeIconPath = likeIcon.querySelector('path');
  likeIconPath.classList.add('red');
  setTimeout(() => likeIconPath.classList.remove('red'), 150);

  const likeIconContainer = likeIcon.closest('span');
  const idContainer = likeIconContainer.nextElementSibling;
  const id = idContainer.innerText;

  fetch(`${api}/likes`, {
    method: 'POST',
    body: JSON.stringify({ item_id: `${id}` }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(() => loadLikes(api));
};
