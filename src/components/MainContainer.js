import React from 'react'
import Movie from './movies/Movie'
import { Loader} from './Loader'


const featured_api = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}`

class MainContainer extends React.Component {

    state = {
        movies: []
    }

    componentDidMount(){
        fetch(featured_api)
        .then(resp => resp.json())
        .then(data => this.setState({
            movies: data.results.map(movie => ({...movie, id: null, tmdb_id: movie.id}))
        }))
    } 
    
    render() {
        return (
            <>
                {!this.state.movies.length ? <Loader /> : (
                    <div className="main ">
                        {this.state.movies.map(movie => {
                            return <Movie key={movie.id} data={movie} />
                        })}
                    </div>
                )}
                   <footer className="main_footer">You are enjoying the top 20 streaming movies right now</footer>
            </>
            )
    }
 
}


export default MainContainer; 