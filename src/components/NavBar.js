import React from 'react'; 
import { connect } from 'react-redux'
import Logout from './Logout'
import { Link } from 'react-router-dom'


const NavBar = ({ currentUser, loggedIn }) => {
    return (
        <header>
        <div className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">WELCOME TO WATCHLIST!</a>
            { currentUser ? <strong> Welcome, {currentUser.attributes.username}!</strong>: ""}
 
        {loggedIn ? <Logout />
             : (
                    <div className="collapse navbar-collapse"> <Link to="/signup" className="nav-link"> Signup</Link> OR <Link to="/login" className="nav-link">Log in</Link> </div>
                )}
        </div>
        </header>
    )
}

const mapStateToProps = ({ currentUser })=> {
    return {
        currentUser
    }
}


export default connect(mapStateToProps)(NavBar)