//synchronous
export const setCurrentUser = user => {
    return {
        type: 'SET_CURRENT_USER', 
        user
    }
}
//asychronous fetch request that returns an object because Thunk enables it to 
export const logIn = credentials => {
    return dispatch => {
        return fetch("http://localhost:3000/")
    }
}