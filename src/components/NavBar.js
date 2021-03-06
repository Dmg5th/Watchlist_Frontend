import React from 'react';
import { connect } from 'react-redux'
import Logout from './Logout'
import { Link } from 'react-router-dom'
import Search from './movies/Search'
import '../index.css'


const NavBar = ({ currentUser, loggedIn }) => {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            {currentUser ? 
                <h1> Hi,{currentUser.attributes.username}! <Link to="/">Welcome to Watchlist!</Link> 
                </h1> : <h1 ><Link to="/">Welcome to Watchlist!</Link></h1>}
            
            
            <div className="collapse navbar-collapse" id="navbarColor03">
                <ul className="navbar-nav mr-auto">

                    {loggedIn ?
                        <div className="collapse navbar-collapse" id="navbarColor03" >
                            <li className="nav-item active">
                                <a><Link to="/user_movies" className="nav-link">Watchlist</Link></a>
                            </li>
                            <li className="nav-item active">
                                <a><Link to="/watched" className="nav-link">Watched</Link></a>
                            </li>
                            <li className="nav-item active">
                                <a><Link to="/search" className="nav-link">Search</Link></a>
                            </li> <Logout />
                        </div>
                        : (
                            <div className="collapse navbar-collapse" id="navbarColor03">
                                <li className="nav-item active">
                                    <a className="nav-link"><Link to="/signup" className="nav-link"> Signup </Link> </a>
                                </li>
                                <li className="nav-item active">
                                    <a ><Link to="/login" className="nav-link">Log in</Link> </a>
                                </li>
                            </div>
                        )}
                </ul>
            </div>
        </nav>
    )
}

const mapStateToProps = ({ currentUser }) => {
    return {
        currentUser
    }
}


export default connect(mapStateToProps)(NavBar)