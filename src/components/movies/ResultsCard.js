import React from 'react'
import { Card } from 'react-bootstrap'
import { connect } from 'react-redux'
import { addMovieToWatchlist } from "../../actions/myWatchlist"

const ResultsCard = ({ movie, addMovieToWatchlist}) => {
    

    return (
        <div >
            <div className="movie">
                <Card>
                    <Card.Title>{movie.title}</Card.Title>
                    {movie.poster_path ? (
                    <Card.Img className="movie__image" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/> 
                    ): (
                        <div className="filler-poster"></div>
                    )}
                    <div className="controls">
                        <button onClick={() => addMovieToWatchlist(movie)} className="btn btn-primary btn-lg">Add to Watchlist</button>
                    </div>
                </Card>
            </div>
        </div>
    )
}

const mapDispatchToProps = state => {
    return ({
        watchlist: state.watchlist
    }
  )
}

export default connect(mapDispatchToProps, {addMovieToWatchlist} )(ResultsCard); 
