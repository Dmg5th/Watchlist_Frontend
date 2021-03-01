import React from 'react'
import Login from './Login'
import Logout from './Logout'
import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <div>
            <h2>Welcome to Watchlist, please log in or sign up!</h2>
            <Link to="/signup"> Signup</Link> OR <Link to="/login">Log in</Link>
        </div>
    )
}  

export default Home


