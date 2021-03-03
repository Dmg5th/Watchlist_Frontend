import React from 'react'
import { connect } from 'react-redux'
import WatchlistCard from './WatchlistCard'




export const MyWatchlist = ({ watchlist }) => {

    return (
        <div>
            <h1>My Watchlist</h1>
            <div>
            {/* have to include logic here if there is nothing in the watchlist, code below */}
            {watchlist.watchlist.map(movie => {
               return <WatchlistCard key={movie.id} movie={movie}/>
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

 

    // {watchlist.watchlist.length > 0 ? 
    //     watchlist.watchlist.map(movie => (
    //         <h1>{movie.title}</h1>
    //     )) : 
    //     null}



