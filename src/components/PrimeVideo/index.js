// Write your code here
import MovieSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionList = moviesList.filter(
    eachList => eachList.categoryId === 'ACTION',
  )

  const comedyList = moviesList.filter(
    eachList => eachList.categoryId === 'COMEDY',
  )

  return (
    <div className="bg-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-video-img"
      />
      <div className="movie-container">
        <h1 className="movie-heading">Action Movies</h1>
        <MovieSlider movieListDetails={actionList} />
        <h1 className="movie-heading">Comedy Movies</h1>
        <MovieSlider movieListDetails={comedyList} />
      </div>
    </div>
  )
}
export default PrimeVideo
