/* eslint-disable import/prefer-default-export */
/* eslint-disable no-use-before-define */

const commentsArea = document.querySelector('.comments-pop');
const closeBtn = document.querySelector('.fa-times');

export const getColor = (vote) => {
  if (vote >= 8) {
    return 'green';
  } if (vote >= 5) {
    return 'orange';
  }
  return 'red';
};

// fetch('https://api.tvmaze.com/shows')
//   .then((res) => res.json())
//   .then((data) => savePop(data));

export const savePop = (data) => {
  data.forEach((show) => {
    const {
      genres, image, language, name, rating, runtime,
    } = show;
    commentsArea.innerHTML = `
    <div class="img-div dn">
    <img src="${image.medium}">
    <i class="fa fa-times" aria-hidden="true"></i>
  </div>
  <h2>${name}</h2>
  <ul class="specs">
    <li>Language: ${language}</li>
    <li>Genres: ${genres}</li>
    <li>Runtime: ${runtime}</li>
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
  });
};

export function showComments(e) {
  e.preventDefault();
  commentsArea.classList.remove('hide');
}

// const closeComments = () => commentsArea.classList.add('hide');

// closeBtn.addEventListener('click', closeComments);