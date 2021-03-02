const initialState = {
  watchlist: [],
  watched:  []
}

export default (state = initialState, action) => {
    switch (action.type) {
       case 'SET_MY_WATCHLIST':
         return action.watchlist
            
        //     break;
    
        default:
           return state
    }
}