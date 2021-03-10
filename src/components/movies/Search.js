import React from 'react'
import { Card } from 'react-bootstrap';
import ResultsCard from './ResultsCard';

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
                if (!data.errors) {
                    this.setState({
                        results: data.results.map(movie => ({ ...movie, id: null, tmdb_id: movie.id }))
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
                <div>
                    <form>
                        <input className="search_text" type="text" placeholder="Search for a movie in our database!" value={this.state.query} onChange={this.handleChange} />
                        <button className="btn btn-success search_button" type="submit">Search</button>
                    </form>
                </div>

                <div className="main">
                    {this.state.results.map(movie => {
                        return <ResultsCard key={movie.id} movie={movie} />
                    })}
                </div>

            </div>
        )
    }
}

export default Search; 







