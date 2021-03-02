import React from 'react'
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
            if(!data.errors){
                this.setState({
                    results: data.results
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
                <div class="search-form-wrapper">
                    <form class="form-inline my-2 my-lg-0" >
                        <input className="form-control mr-sm-2" type="text" placeholder="Search for a movie" value={this.state.query} onChange={this.handleChange} />
                        <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
                {this.state.results.map(movie => {
                    return <ResultsCard ket={movie.id} data={movie}/>
                })}
            </div>
        )
    }
}

export default Search; 







