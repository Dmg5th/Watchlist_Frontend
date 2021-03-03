import React from 'react'
import { connect } from 'react-redux'
import WatchedCard from '../WatchedCard'

const Watched = ({ watched }) => {
  console.log(watched)
  return (
    <div>
      <h1 className="heading">Watched List</h1>
      <div>

        {watched.length > 0 ? (
          <div className="main">
            {watched.map((movie) => (
              <WatchedCard movie={movie} key={movie.id} type="watched" />
            ))}
          </div>
        ) : (
            <h2 className="no-movies">No movies in your list! Add some!</h2>
          )}
      </div>
    </div>
  )
}
 
const mSTP = state => {
  return {
    watched: state.myWatchlist.watched
  }
}

export default connect(mSTP)(Watched)

// {watched.length > 0 ? (
//   <div className="movie-grid">
//     {watched.map((movie) => (
//       <MovieCard movie={movie} key={movie.id} type="watched" />
//     ))}
//   </div>
// ) : (
//   <h2 className="no-movies">No movies in your list! Add some!</h2>
// )}
