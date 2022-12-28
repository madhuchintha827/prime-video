// Write your code here
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import 'reactjs-popup/dist/index.css'

import MovieItem from '../MovieItem'

const MovieSlider = props => {
  const {movieListDetails} = props

  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  return (
    <div>
      <Slider {...settings}>
        {movieListDetails.map(eachMovie => (
          <MovieItem movieDetails={eachMovie} key={eachMovie.id} />
        ))}
      </Slider>
    </div>
  )
}

export default MovieSlider
