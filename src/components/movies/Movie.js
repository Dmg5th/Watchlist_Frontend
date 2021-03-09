import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import { connect } from 'react-redux'
import { addMovieToWatchlist } from '../../actions/myWatchlist'


const Movie = ({ data, addMovieToWatchlist, watchlist, currentUser }) => {

    let storedMovie = watchlist.find(movie => movie.tmdb_id === data.tmdb_id)
    const watchlistDisabled = storedMovie ? true : false

    return (
        <div className="movie">
            <Card className="card text-white bg-primary mb-3 movie_card">

                <Card.Title className="card-header"><h3>{data.title}</h3></Card.Title>
                <Card.Img className="movie__image" src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt={data.title} />
                <Card.Text className="movie_description">{data.overview}</Card.Text>
                {currentUser && (
                    <button
                        disabled={watchlistDisabled}
                        onClick={() => addMovieToWatchlist(data)} className="btn btn-success">Add to Watchlist
                    </button>
                )}
            </Card>
            
        </div>
    )
}
const mSTP = state => {
    return {
        watchlist: state.myWatchlist.watchlist, 
        currentUser: state.currentUser
    }
}
export default connect(mSTP, { addMovieToWatchlist})(Movie); 
