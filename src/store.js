import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import usersReducer from './reducers/users.js'
import currentUser from './reducers/currentUser.js'
import loginForm from './reducers/loginForm.js'
import signupForm from './reducers/signupForm'
import myWatchlist from './reducers/myWatchlist.js'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
 
const reducer = combineReducers({
    users: usersReducer, 
    currentUser,
    loginForm,
    signupForm, 
    myWatchlist 

  })
  
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 
  
  const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk, logger)))

  export default store; 