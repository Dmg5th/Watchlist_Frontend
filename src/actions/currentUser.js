import { resetLoginForm } from './loginForm'
import { getMyWatchlist } from './myWatchlist'

//synchronous
export const setCurrentUser = user => {
    return {
        type: 'SET_CURRENT_USER', 
        user
    }
}

export const clearCurrentUser = user => {
  return {
    type: "CLEAR_CURRENT_USER"
  }
}


export const logout = () => {
  return dispatch => {
    dispatch(clearCurrentUser())
    return fetch('http://localhost:3001/logout', {
      credentials: "include",
      method: "DELETE"
    })
  }
}

//asychronous fetch request that returns an object because Thunk enables it to return an object as well as use dispatch
export const login = (credentials) => {
    return dispatch => {
      return fetch("http://localhost:3001/login", {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
      })
        .then(r => r.json())
        .then(response => {
          if (response.error) {
            alert(response.error)
          } else {
            dispatch(setCurrentUser(response.data))
            dispatch(getMyWatchlist())
            dispatch(resetLoginForm())
          }
        })
        .catch(console.log)
    }
  }
  export const getCurrentUser = () => {
    return dispatch => {
      return fetch("http://localhost:3001/get_current_user", {
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
            dispatch(setCurrentUser(response.data))
            dispatch(getMyWatchlist())
           }
        })
        .catch(console.log)
    }
  }

  // export const signup = () => {
  //   return null
  // }