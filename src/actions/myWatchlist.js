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
                // console.log(response)
              if (response.error) {
                alert(response.error)
              } else {
               dispatch(setMyWatchlist(response))
               }
            })
            .catch(console.log)
    }
}

// export const addMovieToWatchlist = movie => {
//   return dispatch => {
//     return fetch("http://localhost:3001/user_movies", {
//       credentials: "include",
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(movie)
//     })
//       .then(r => r.json())
//       .then(response => {
//         if (response.error) {
//           alert(response.error)
//         } else {
//           dispatch(addMovie(response.data))
//           dispatch(getMyWatchlist())
//           // dispatch(resetLoginForm())
//           // history.push('/')
//         }
//       })
//       .catch(console.log)
//   }
// }
export const addMovieToWatchlist = movie => {
  return ({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
};

export const removeMovieFromWatchlist = id => {
  return ({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id });
};

export const addMovieToWatched = movie => {
  return ({ type: "ADD_MOVIE_TO_WATCHED", payload: movie})
}

