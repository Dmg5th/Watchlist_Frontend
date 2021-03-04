import React from 'react'
import { Card } from 'react-bootstrap'
import { connect } from 'react-redux'
import { addMovieToWatchlist } from "../../actions/myWatchlist"

const ResultsCard = ({ movie, addMovieToWatchlist, watchlist, watched}) => {
//Once a user adds a movie that movie is no longer avail to add
let storedMovie = watchlist.find(MovieObj => MovieObj.tmdb_id === movie.tmdb_id)
let movieWatched =  watched.find(movieObj => movieObj.tmdb_id === movie.tmdb_id)

const watchlistDisabled = storedMovie ? true  : movieWatched ? true : false; 

    return (
        <div >
            <div className="movie">
                <Card>
                    <div className="card text-white bg-primary mb-3">
                        <Card.Title className="card-header">{movie.title}</Card.Title>
                        {movie.poster_path ? (
                            <Card.Img className="movie__image" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                        ) : (
                            <div className="filler-poster"></div>
                        )}
                        <button
                                disabled={watchlistDisabled}
                                onClick={() => addMovieToWatchlist(movie)} className="btn btn-success">Add to Watchlist
                        </button>
                    </div>
                </Card>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        watchlist: state.myWatchlist.watchlist, 
        watched: state.myWatchlist.watched
    }
} 

export default connect(mapStateToProps, {addMovieToWatchlist} )(ResultsCard); 
