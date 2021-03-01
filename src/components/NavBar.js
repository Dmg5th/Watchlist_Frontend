import React from 'react';
import { connect } from 'react-redux'
import Logout from './Logout'
import { Link } from 'react-router-dom'


const NavBar = ({ currentUser, loggedIn }) => {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="#">WELCOME TO WATCHLIST!</a>
            {currentUser ? <strong> Welcome, {currentUser.attributes.username}!</strong> : ""}
            {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button> */}
                 <div class="collapse navbar-collapse" id="navbarColor03">
                <ul class="navbar-nav mr-auto">
                        {loggedIn ? <Logout />
                            : (
                                <div class="collapse navbar-collapse" id="navbarColor03">
                                <li class="nav-item active">
                                    <a className="nav-link"><Link to="/signup" className="nav-link"> Signup </Link> </a> 
                                    </li>
                                    <li class="nav-item active">
                                     <a ><Link to="/login" className="nav-link">Log in</Link> </a> 
                                </li>
                                </div>
                            )}
                           <div class="collapse navbar-collapse" id="navbarColor03" >
                            <li class="nav-item active">
                            <a><Link to="/" className="nav-link">Watchlist</Link></a>
                        </li>
                        </div>
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