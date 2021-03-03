import React from 'react'
import { connect } from 'react-redux'
import WatchlistCard from '../WatchlistCard'

const Watched = ({ watched }) => {
    return (
      <div>
      <h1 className="heading">My Watchlist</h1>
      <div>
      {/* have to include logic here if there is nothing in the watchlist, code below */}
      {watched.map(movie => {
         return <WatchlistCard key={movie.id} movie={movie} type="watchlist"/>
      })}
      </div> 
  </div>
    )
}
 
const mSTP = state => {
  return {
    watched: state.watched
  }
}

export default connect(mSTP)(Watched)

// {watched.length > 0 ? (
//   {watched.map(movie => {
//     return <WatchlistCard key={movie.id} movie={movie} type="watchlist"/>
//  })}
// ): (
//   <h2 className= "no-movies">No movies on yuor list, add some!</h2>
// )}
