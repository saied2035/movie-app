import { loadLikes, disableArrow, scrollDecision } from '../functions/functions.js';

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
  console.log('saving like')
  const likeIcon = e.target;

  const likeIconPath = likeIcon.querySelector('path');
  likeIconPath.classList.add('red');
  setTimeout(() => likeIconPath.classList.remove('red'), 150);

  const likeIconContainer = likeIcon.closest('span');
  const idContainer = likeIconContainer.nextElementSibling;
  const id = idContainer.innerText;
  console.log(id)
  fetch(`${api}/likes`, {
    method: 'POST',
    body: JSON.stringify({ item_id: `${id}` }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((res) => {
      console.log(res)
      loadLikes(api)
    });
};

export const slideShow = (event) => {
  const moviesContainer = document.querySelector('main')
  const pageIndexContainer = document.querySelector("#page-index-container")
  let pageIndex = pageIndexContainer.innerText
  const slideShowArrow = event.target
  const {step,padding} = scrollDecision()
  if(slideShowArrow.classList.contains('fa-angle-right')){ 
        pageIndex = Number(pageIndex)+step
        pageIndexContainer.innerText = pageIndex
  }
  else {
        pageIndex = Number(pageIndex)-step
        pageIndexContainer.innerText = pageIndex
  }       
        console.log('slideShow',pageIndex)
        const scrollToThisMovieOffset = document.querySelector(`#movie${pageIndex}`).offsetLeft
        moviesContainer.scrollTo({top: 0,left: scrollToThisMovieOffset-padding ,behavior: 'smooth'});
        disableArrow(pageIndex,step)
} 