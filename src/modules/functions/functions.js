export const activateItemListStyle = (target) => {
  if (target.classList.contains('.bold-underline')) return;

  const activeItem = document.querySelector('.bold-underline');
  activeItem.classList.remove('bold-underline');
  target.classList.add('bold-underline');
};

const displayLikes = (moviesLikes) => {
     moviesLikes.forEach(movieLikes => {
       const movie = document.querySelector(`#movie${movieLikes.item_id}`)
       const likesContainer = movie.querySelector('.like-counter')
       likesContainer.innerText = `${movieLikes.likes} likes`
     })
}

export const loadLikes = async (api) => {
      const likes = await fetch(`${api}/likes`).then(res => res.json())
      .then(result => result)
        displayLikes(likes)
}

