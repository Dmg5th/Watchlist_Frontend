const initialState = {
  watchlist: [],
  watched: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MY_WATCHLIST':
      return {
        ...state,
        watchlist: action.watchlist
      };
    case "ADD_MOVIE_TO_WATCHLIST":
      return {
        ...state,
        watchlist: [action.payload, ...state.watchlist]
      };
    case "REMOVE_MOVIE_FROM_WATCHLIST":
      return {
        ...state,
        watchlist: state.watchlist.filter(movieObj => { console.log(movieObj.id, action.payload, "remove movie reducer from watchlist")
          return movieObj.id !== action.payload}),
      }
    case "RESET_WATCHLIST":
      return {
        ...state,
        watchlist: []
      }
    case "ADD_MOVIE_TO_WATCHED":
      return {
        ...state,
        watchlist: state.watchlist.filter(movieObj => movieObj.id !== action.payload.id),
        watched: [action.payload, ...state.watched],
      };
    case "REMOVE_MOVIE_FROM_WATCHED":
      return {
        ...state,
        watched: state.watched.filter(movieObj => movieObj.id !== action.payload),
      }
    case "RESET_WATCHED":
      return {
        ...state, 
        watched: []
      }
    default:
      return state
  }
   
}





