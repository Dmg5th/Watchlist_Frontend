import React from 'react'
import { Card }from 'react-bootstrap'

const WatchlistCard = ({movie}) => {
  
  return (
    <div className="main">
      <Card>
        <div className="movie">
          <Card.Title>{movie.title}</Card.Title>
          <Card.Img className="movie__image" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        </div>
      </Card>
    </div>
  )
}


export default WatchlistCard; 
