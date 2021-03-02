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

    //     break;

    default:
      return state
  }
}