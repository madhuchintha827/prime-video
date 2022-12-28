// Write your code here
import ReactPlayer from 'react-player'
import Popup from 'reactjs-popup'

import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails

  return (
    <div>
      <Popup
        modal
        trigger={
          <div>
            <img src={thumbnailUrl} alt="thumbnail" className="thumbnail" />
          </div>
        }
        className="popup-content"
      >
        {close => (
          <div className="modal-container">
            <button
              type="button"
              className="close-btn-style"
              onClick={() => close()}
              // testid="closeButton"
            >
              <IoMdClose size={20} color="#231f20" />
            </button>
            <div className="react-player">
              <ReactPlayer url={videoUrl} height={300} controls />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
