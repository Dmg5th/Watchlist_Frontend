import React from 'react'
import { connect } from 'react-redux'
import WatchlistCard from './WatchlistCard'




export const MyWatchlist = ({ watchlist }) => {
    console.log(watchlist)
    return (
        <div>
            <h1 className="heading">My Watchlist</h1>
            <div>
            {/* have to include logic here if there is nothing in the watchlist, code below */}
            {watchlist.watchlist.map(movie => {
               return <WatchlistCard key={movie.id} movie={movie} type="watchlist"/>
            })}
            </div>
        </div>
    )
    
}




const mSTP = state => {
    return {
     watchlist: state.myWatchlist
    }
}

export default connect(mSTP)(MyWatchlist); 


// {watchlist.watchlist.length > 0 ? (
//     {watchlist.watchlist.map(movie => (
//          <WatchlistCard key={movie.id} movie={movie} type="watchlist"/>
//      ))}
// ) : (
//     <h2 className="no-movies">No movies</h2>
// )
 






