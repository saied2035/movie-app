const getMovies = async (movies) => {
  const moviesList = await fetch(`${movies.url}/shows`)
    .then((res) => res.json());
  movies.storeMovies(moviesList);
};

export default getMovies;