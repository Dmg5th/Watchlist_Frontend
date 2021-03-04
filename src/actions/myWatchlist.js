//synchronous action 
export const setMyWatchlist = watchlist => {
    return {
        type: 'SET_MY_WATCHLIST', 
        watchlist
    }
}

//ascynchrounous action 
export const getMyWatchlist = () => {
    return dispatch => {
        return fetch("http://localhost:3001/user_movies", {
            credentials: "include",
            method: "GET",
            headers: { 
              "Content-Type": "application/json"
            },
          })
            .then(r => r.json())
            .then(response => {
                console.log(response)
              if (response.error) {
                alert(response.error)
              } else {
               dispatch(setMyWatchlist(response))
               }
            })
            .catch(console.log)
    }
}

export const addMovieToWatchlist = movie => {
  return (dispatch, getState) => {
    fetch("http://localhost:3001/movies", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(movie)
    })
      .then(r => r.json())
      .then(resp => {
        console.log(resp, "NEW")
        const {currentUser} = getState()
        console.log(currentUser, "current user")
        console.log(resp, "this is the response")
        fetch("http://localhost:3001/user_movies", {
          credentials: "include",
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({user_id: currentUser.id, movie_id: resp.id})
        })
          .then(r => r.json())
          .then(response => {
            if (response.error) {
              alert(response.error)
            } else {
              console.log(response, "this is the second response")
              dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: response })
            }
          })
          .catch(error => console.log(error))
      })
  }
}
// export const addMovie = movie => {
//   return ({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
// };

export const removeMovieFromWatchlist = id => {
  return ({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id });
};

export const addMovieToWatched = movie => {
  return ({ type: "ADD_MOVIE_TO_WATCHED", payload: movie})
}

export const removeMovieFromWatched =id => {
  return ({ type: "REMOVE_MOVIE_FROM_WATCHED", payload: id})
}



