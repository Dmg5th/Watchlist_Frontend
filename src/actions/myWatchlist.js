//synchronous action 
export const setMyWatchlist = user => {
    return {
        type: 'SET_MY_WATCHLIST', 
        user
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
              if (response.error) {
                alert(response.error)
              } else {
               dispatch(setMyWatchlist([]))
               }
            })
            .catch(console.log)
    }
  
}