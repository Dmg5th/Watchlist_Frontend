import React from 'react'

const featured_api = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false`

class Search extends React.Component {
    
    state = {
        query: ""
     }

    handleChange = e => {
        // e.preventDefault();
        this.setState({
            query: e.target.value
        }) 
        fetch(featured_api)
    }
    render() {
        console.log(this.state.query)
        return (
            <div>
                <form class="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search for a movie" value={this.state.query} onChange={this.handleChange} />
                    <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        )
    }
}

export default Search; 







