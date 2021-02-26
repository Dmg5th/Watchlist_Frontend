import React from 'react'
import Movie from './movies/Movie'

const featured_api = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}`

class MainContainer extends React.Component {

    state = {
        movies: []
    }

    componentDidMount(){
        fetch(featured_api)
        .then(resp => resp.json())
        .then(data => this.setState({
            movies: data.results
        }))
    } 
    
    render() {
        return (
            <div className="main">
                {this.state.movies.map(movie => {
                    return <Movie key={movie.id} data={movie}/>
                })} 
            </div>
        )
    }
}


export default MainContainer; 