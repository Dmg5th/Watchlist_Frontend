import React from 'react'
import Login from './Login'
import Logout from './Logout'
import { Link } from 'react-router-dom'
import MainContainer from './MainContainer'


const Home = () => {
    return (
        <div>
             <MainContainer />
            <span>
                {/* <Link to="/signup"> Signup</Link> OR <Link to="/login">Log in</Link> */}
            </span>
        </div>
    )
}  

export default Home


