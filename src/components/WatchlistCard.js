import React from 'react'
import { Card }from 'react-bootstrap'

const WatchlistCard = ({movie}) => {
  
  return (
    <div className="main">
      <Card>
        <div className="movie">
          <div className="card text-white bg-primary mb-3">
            <Card.Title className="card-header">{movie.title}</Card.Title>
            <div class="card-body">
              <Card.Img className="movie__image" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
              <button className="btn btn-success">
                <i className="fa-fw far fa-eye"></i>
              </button>
              <button className="btn btn-warning">
                <i className="fa-fw fa fa-times"></i>
              </button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}




export default WatchlistCard; 
