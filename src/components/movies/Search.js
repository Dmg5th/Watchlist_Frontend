import React from 'react'
import { Card } from 'react-bootstrap';
import ResultsCard from './ResultsCard';
import '../../index.css'

class Search extends React.Component {
    
    state = {
        query: "", 
        results: []
     }

    handleChange = e => {
        e.preventDefault();
       this.setState({
            query: e.target.value
        }) 
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
        .then(resp => resp.json())
        .then(data => {
            if(!data.errors){
                this.setState({
                    results: data.results.map(movie => ({...movie, id: null, tmdb_id: movie.id}))
                })
            } else {
                this.setState({
                    results: []
                })
            }
        })
   } 

    render() {
       
        return (
                <div>
                <Card className="card text-white bg-primary mb-3">
                    <div className="login-form">
                    <form className="form-group" >
                    <Card.Title><h1>Search for a movie in our database!</h1></Card.Title>
                        <input type="text" placeholder="Search for a movie" value={this.state.query} onChange={this.handleChange} />
                        <button class="btn btn-success" type="submit">Search</button>
                    </form>
                </div>
                {this.state.results.map(movie => {
                    return <ResultsCard key={movie.id} movie={movie}/>
                })}
                </Card>
                </div>
           
        )
    }
}

export default Search; 







