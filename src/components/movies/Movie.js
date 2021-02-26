import React, { Component } from 'react'
import { Card } from 'react-bootstrap'

const Movie = ({ data }) => {
   
   return(
       <div className="movie">
          <Card>
              <Card.Title>{data.title}</Card.Title>
              <Card.Img className="movie__image" src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt={data.title} />
          </Card>
       </div>
   )
}


export default Movie; 
