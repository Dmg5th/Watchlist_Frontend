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
            body: JSON.stringify()
        })
    }
} 