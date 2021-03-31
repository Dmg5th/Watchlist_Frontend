import React from 'react'
import { Card }from 'react-bootstrap'
import { connect } from 'react-redux'
import { removeMovieFromWatchlist } from '../actions/myWatchlist'
import { addMovieToWatched } from '../actions/myWatchlist'





const WatchlistCard = ({ movie, removeMovieFromWatchlist, addMovieToWatched, history }) => {

  return (
    <div>
    <div className="main">
      <div className="movie">
      <Card className="card text-white bg-primary mb-3 movie_card">
        
          <div >
            <Card.Title><h3>{movie.title}</h3></Card.Title>
            <div class="card-body">
              <Card.Img className="movie__image" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
              
              <button onClick={() => addMovieToWatched(movie)} className="btn btn-success">
                <i className="fa-fw far fa-eye"></i>
              </button>
              
              <button onClick={() => removeMovieFromWatchlist(movie.id, history)} className="btn btn-warning">
                <i className="fa-fw fa fa-times"></i>
              </button>

           
           </div>
      
        </div>
        
      </Card>
      </div>
      
    </div>
   
    </div>
  )
}


const mSTP = state => {
  return {
    watchlist: state.myWatchlist
  }
}

export default connect(mSTP, { removeMovieFromWatchlist, addMovieToWatched })(WatchlistCard); 
