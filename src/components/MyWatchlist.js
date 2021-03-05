import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import WatchlistCard from './WatchlistCard'




export const MyWatchlist = ({ watchlist, history }) => {
    useEffect(() => {
        console.log("testing")
    }, [watchlist])
    return (
        <div>
            <h1 className="heading">My Watchlist</h1>
            <div>
                {watchlist.length > 0 ? (
                    <div className="main">
                        {watchlist.map((movie) => (
                            <WatchlistCard movie={movie} key={movie} type="watchlist" history={history}/>
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
     watchlist: state.myWatchlist.watchlist
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

// {watchlist.length > 0 ? (
//     <div className="movie-grid">
//       {watchlist.map((movie) => (
//         <MovieCard movie={movie} key={movie.id} type="watchlist" />
//       ))}
//     </div>
//   ) : (
//     <h2 className="no-movies">No movies in your list! Add some!</h2>
//   )}
 






