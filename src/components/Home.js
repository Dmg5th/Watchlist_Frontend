import React from 'react'
import Login from './Login'
import Logout from './Logout'
import { link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h2>Welcome to Watchlist, please log in or sign up!</h2>
            <link to="/signup"/> OR <link to="/login"/>
        </div>
    )
}

export default Home


