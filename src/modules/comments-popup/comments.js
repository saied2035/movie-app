/* eslint-disable import/prefer-default-export */
/* eslint-disable no-use-before-define */

const commentsArea = document.querySelector('.comments-pop');
const popOverlay = document.querySelector('.pop-overlay');

export const getColor = (vote) => {
  if (vote >= 8) {
    return 'green';
  } if (vote >= 5) {
    return 'orange';
  }
  return 'red';
};

const closeComments = () => {
  commentsArea.classList.add('hide');
  popOverlay.style.display = 'none';
};
const movies = JSON.parse(localStorage.movies);
export const savePop = (commentItem) => {
  const shows = Array.from(document.querySelectorAll('.movie-item'));
  const showItem = commentItem.closest('.movie-item');
  const showIndex = shows.indexOf(showItem);
  const show = movies[showIndex];
  const {
    genres, image, language, name, rating, runtime,
  } = show;
  commentsArea.innerHTML = `
    <div class="img-div dn">
    <img src="${image.original}">
    <i class="fa fa-times" aria-hidden="true"></i>
  </div>
  <h2>${name}</h2>
  <ul class="specs">
    <li>Language: <span>${language}</span></li>
    <li>Genres: <span>${genres}</span></li>
    <li>Runtime: <span>${runtime}</span></li>
    <li>Rating: <span class="${getColor(rating.average)}">${rating.average}</span></li>
  </ul>
  <div class="show-comments">
    <h3>Comments(2)</h3>
    <ul>
      <li>22/02/2022 Carlyle: I want to produce a sequel to this movie; it's awesome</li>
      <li>15/03/2022 Saied: Let's gooooo!</li>
    </ul>
  </div>
  <div class="add-comments">
    <h4>Add a Comment</h4>
    <form>
      <input type="text" placeholder="Your Name">
      <textarea name="" id="" cols="50" rows="3" placeholder="Your insights"></textarea>
      <button>Comment</button>
    </form>
  </div>
    `;
  const closeBtn = commentsArea.querySelector('.fa-times');
  closeBtn.addEventListener('click', closeComments);
};

export function showComments(e) {
  e.preventDefault();
  savePop(e.target);
  commentsArea.classList.remove('hide');
  popOverlay.style.display = 'block';
}
