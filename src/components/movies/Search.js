import React from 'react'

class Search extends React.Component {
    
    state = {
        query: ""
     }

    handleChange = e => {
        e.preventDefault();
       this.setState({
            query: e.target.value
        }) 
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
        .then(resp => resp.json())
        .then(data => console.log(data.results))
   } 

//    searchMovies = () => {
//     fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false&query=${this.state.search}`)
//     .then(resp => resp.json())
//     .then(data => console.log(data.results))
//     }

//     componentDidMount(){
//         this.searchMovies(this.state.query); 
//     }


    render() {
       
        return (
            <div>
                <form class="form-inline my-2 my-lg-0" >
                    <input className="form-control mr-sm-2" type="text" placeholder="Search for a movie" value={this.state.query} onChange={this.handleChange} />
                    <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        )
    }
}

export default Search; 







