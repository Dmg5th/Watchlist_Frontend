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