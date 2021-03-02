import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import { connect } from 'react-redux'
import { addMovieToWatchlist } from '../../actions/myWatchlist'


const Movie = ({ data, addMovieToWatchlist }) => {
   
    return (
        <div className="movie">
            <Card>
                <Card.Title>{data.title}</Card.Title>
                <Card.Img className="movie__image" src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt={data.title} />
                <div className="controls">
                    <button onClick={() => addMovieToWatchlist(data)} className="btn btn-primary btn-lg">Add to Watchlist</button>
                </div>
            </Card>
        </div>
    )
}


export default connect(null, { addMovieToWatchlist})(Movie); 
