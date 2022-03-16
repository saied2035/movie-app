import {loadLikes} from '../functions/functions.js'

export const getMovies = async (movies) => {
  const moviesList = await fetch(`${movies.url}/shows`)
    .then((res) => res.json());
  movies.storeMovies(moviesList);
};

export const saveLike = (e,api) => {
   const idContainer = e.target.nextElementSibling
   const id = idContainer.innerText
   fetch(`${api}/likes`, {
    method:'POST',
    body : JSON.stringify({item_id:`${id}`}),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
   })
   .then(res => {
    console.log('save',res)
    loadLikes(api)
  })
}
