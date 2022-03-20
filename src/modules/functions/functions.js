export const activateItemListStyle = (target) => {
  if (target.classList.contains('.bold-underline')) return;

  const activeItem = document.querySelector('.bold-underline');
  activeItem.classList.remove('bold-underline');
  target.classList.add('bold-underline');
};

const displayLikes = (moviesLikes) => {
  moviesLikes.forEach((movieLikes) => {
    const movie = document.querySelector(`#movie${movieLikes.item_id}`);
    const likesContainer = movie.querySelector('.like-counter');
    likesContainer.innerText = `${movieLikes.likes} likes`;
  });
};

export const loadLikes = async (api) => {
  console.log('loading like')
  const likes = await fetch(`${api}/likes`).then((res) => res.json())
    .then((result) => result);
    console.log(likes)
  displayLikes(likes);
};

export const itemCounter = () => {
  const movies = document.querySelectorAll('.movie-item');
  const numberOfMovies = movies.length;
  const HomeNavItem = document.querySelector('.nav-item');
  HomeNavItem.innerText = `(${numberOfMovies}) ${HomeNavItem.innerText}`;
  return numberOfMovies;
};

export const scrollDecision = () => {
     return window.innerWidth <= 960 && window.innerWidth >= 480 ?
      {step:6,padding:32}
     :
     window.innerWidth > 960  ?
      {step:9,padding:32}
     :
      {step:3,padding:64}   

}
export const disableArrow = (pageIndex,step) => {
  const leftPageIndex = pageIndex-step
  const rightPageIndex = pageIndex+step
  !document.querySelector(`#movie${leftPageIndex}`)?
   document.querySelector('.arrow-left').classList.add('disabled')
  :
   document.querySelector('.arrow-left').classList.remove('disabled')

  !document.querySelector(`#movie${rightPageIndex}`) ?
   document.querySelector('.arrow-right').classList.add('disabled')
  :
   document.querySelector('.arrow-right').classList.remove('disabled')   

}
