class Movies {
	constructor(){
		this.moviesList = []
		this.url = "https://api.tvmaze.com"
	}
	displayMovies() {
		const mainContainer = document.querySelector('main')
		let i= 0;
		this.moviesList.forEach(movie => {
			const movieContainer = document.createElement('div')

			const movieImg = document.createElement('img')
			movieImg.alt = 'movie image'
			movieImg.className= 'db mt1'
			movieImg.src= movie.image.medium
			movieContainer.appendChild(movieImg)

			const movieName= document.createElement('p')
			movieName.innerText = movie.name 
			movieContainer.appendChild(movieName)

            const likeIcon = document.createElement('i')
            likeIcon.className= "fa-regular fa-heart"
            movieContainer.appendChild(likeIcon)

            const likeCounter= document.createElement('p')
            likeCounter.innerText= `${i} likes`
            movieContainer.appendChild(likeCounter)

            const commentBtn = document.createElement('button')
            commentBtn.type = 'button'
            commentBtn.innerText = "Comments"
            movieContainer.appendChild(commentBtn)

            const reservationBtn = document.createElement('button')
            reservationBtn.type="button"
            reservationBtn.innerText= "Reservations"
            movieContainer.appendChild(reservationBtn)

            mainContainer.appendChild(movieContainer)
		})

	}
	storeMovies (listOfMovies) {
		this.moviesList = listOfMovies
		this.displayMovies()
	}
}
const movies = new Movies

export default movies 