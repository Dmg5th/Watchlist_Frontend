//synchronous
export const setCurrentUser = user => {
    return {
        type: 'SET_CURRENT_USER', 
        user
    }
}
//asychronous fetch request that returns an object because Thunk enables it to return an object as well as use dispatch
export const logIn = credentials => {
    return dispatch => {
        
        return fetch("http://localhost:3001/login", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        })
        .then(resp => resp.json())
        .then(user => {
            if (user.error) {
                alert(user.error)
            } else {
                dispatch(setCurrentUser(user))
            }
        })
        .catch(alert("You entered bad data dude"))
    }
} 

export const getCurrentUser = credentials => {
    return dispatch => {
        
        return fetch("http://localhost:3001/login", {
            method: "GET", 
            headers: {
                "Content-Type": "application/json"
            },
          
        })
        .then(resp => resp.json())
        .then(user => {
            if (user.error) {
                alert(user.error)
            } else {
                dispatch(setCurrentUser(user))
            }
        })
        .catch(alert("You entered bad data dude"))
    }
} 