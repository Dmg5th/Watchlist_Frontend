import React from 'react'
import { Card } from 'react-bootstrap'

const ResultsCard = props => {
    
    return (
        <div >
            <div className="movie">
                <Card>
                    <Card.Title>{props.data.title}</Card.Title>
                    {props.data.poster_path ? (
                    <Card.Img className="movie__image" src={`https://image.tmdb.org/t/p/w500${props.data.poster_path}`} alt={props.data.title}/> 

                    ): (
                        <div className="filler-poster"></div>
                    )}
                </Card>
            </div>
        </div>
    )
}

export default ResultsCard; 
