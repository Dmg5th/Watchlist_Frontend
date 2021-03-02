import React from 'react'
import { Card } from 'react-bootstrap'

const ResultsCard = props => {
    
    return (
        <div>
            <div className="movie">
                <Card>
                    <Card.Title>{props.data.title}</Card.Title>
                    <Card.Img className="movie__image" src={`https://image.tmdb.org/t/p/w500${props.data.poster_path}`} alt={props.data.title} />
                </Card>
            </div>
        </div>
    )
}

export default ResultsCard; 
