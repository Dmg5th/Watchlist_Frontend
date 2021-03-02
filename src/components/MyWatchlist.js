import React from 'react'
import { connect } from 'react-redux'
import WatchlistCard from './WatchlistCard'



export const MyWatchlist = ({ watchlist }) => {
    console.log(watchlist)
    return (
        <div>
            
           {watchlist.watchlist.map(movie => {
               return <h1>{movie.title}</h1>
           })}
        </div>
    )
}

const mSTP = state => {
    return {
     watchlist: state.myWatchlist
    }
}

export default connect(mSTP)(MyWatchlist); 



