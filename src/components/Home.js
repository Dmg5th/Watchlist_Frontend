import React from 'react'
import Login from './Login'
import Logout from './Logout'
import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <span>
            <Link to="/signup"> Signup</Link> OR <Link to="/login">Log in</Link>
        </span>
    )
}  

export default Home


