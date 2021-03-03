const initialState = {
  watchlist: [],
  watched:  []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MY_WATCHLIST':
      return action.watchlist
    case "ADD_MOVIE_TO_WATCHLIST":
      return {
        ...state,
        watchlist: [action.payload, ...state]
      }
    case "REMOVE_MOVIE_FROM_WATCHLIST":
      return {
        ...state,
        watchlist: state.watchlist.filter(movieObj => movieObj.id !== action.payload)
      }

    default:
      return state
  }
}