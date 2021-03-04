import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import { connect } from 'react-redux'
import { addMovieToWatchlist } from '../../actions/myWatchlist'


const Movie = ({ data, addMovieToWatchlist, watchlist }) => {
    console.log(data, watchlist)
    // let storedMovie = watchlist.find(movie => movie.id === data.id)
    // const watchlistDisabled = storedMovie ? true : false
   
    return (
        <div className="movie">
            <Card>
                <Card.Title>{data.title}</Card.Title>
                <Card.Img className="movie__image" src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt={data.title} />
                <div className="controls">
                    <button 
                    // disabled={watchlistDisabled}
                    onClick={() => addMovieToWatchlist(data)} className="btn btn-primary btn-lg">Add to Watchlist
                    </button>
                </div>
            </Card>
        </div>
    )
}
const mSTP = state => {
    return {
        watchlist: state.myWatchlist.watchlist
    }
}
export default connect(mSTP, { addMovieToWatchlist})(Movie); 
