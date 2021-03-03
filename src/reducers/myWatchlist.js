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
        watchlist: [...state.watchlist, action.payload],
      }
    case "REMOVE_MOVIE_FROM_WATCHLIST":
      return {
        ...state,
        watchlist: state.watchlist.filter(movieObj => movieObj.id !== action.payload),
      }
    case "ADD_MOVIE_TO_WATCHED":
      return {
        ...state,
        watchlist: state.watchlist.filter(movieObj => movieObj.id !== action.payload.id),
        watched: [...state.watched,action.payload]
      };
    default:
      return state
  }
}