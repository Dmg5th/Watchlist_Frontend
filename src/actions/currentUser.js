import { resetLoginForm } from './loginForm'
import { getMyWatchlist } from './myWatchlist'
import { resetSignupForm} from './signupForm'

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


export const logout = history => {
  return dispatch => {
    dispatch(clearCurrentUser())
    dispatch({type: "RESET_WATCHLIST"})
    dispatch({type: "RESET_WATCHED"})
    return fetch('http://localhost:3001/logout', {
      credentials: "include",
      method: "DELETE"
    })
    // .then( () => {
    //   history.push('/')
    // })
  }
}

//asychronous fetch request that returns an object because Thunk enables it to return an object as well as use dispatch
export const login = (credentials, history) => {
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
            history.push('/')
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

  export const signup = (credentials, history) => {
    return dispatch => {
      const userInfo = {
        user: credentials
      }
      return fetch("http://localhost:3001/signup", {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userInfo)
      })
        .then(r => r.json())
        .then(response => {
          if (response.error) {
            alert(response.error)
          } else {
            dispatch(setCurrentUser(response.data))
            dispatch(getMyWatchlist())
            dispatch(resetSignupForm())
            history.push('/')
          }
        })
        .catch(console.log)
    }
  }

 