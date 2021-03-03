import React from 'react'
import { Card }from 'react-bootstrap'
import { connect } from 'react-redux'
import { removeMovieFromWatched } from '../actions/myWatchlist'



const WatchedCard = ({movie, removeMovieFromWatched }) => {
  
  return (
    <div className="main">
      <Card>
        <div className="movie">
          <div className="card text-white bg-primary mb-3">
            <Card.Title className="card-header">{movie.title}</Card.Title>
            <div class="card-body">
              <Card.Img className="movie__image" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
              
              <button onClick={() => removeMovieFromWatched(movie.id)} className="btn btn-warning">
                <i className="fa-fw fa fa-times"></i>
              </button>
            
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}


// const mSTP = state => {
//   return {
//     watched: state.myWatchlist.watched
//   }
// }

export default connect(null, { removeMovieFromWatched })(WatchedCard); 
