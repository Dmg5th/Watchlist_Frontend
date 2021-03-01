import React from 'react'; 
import { connect } from 'react-redux'
import Login from './Login'
import Logout from './Logout'


const NavBar = ({ currentUser }) => {
    return (
        <div className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">WELCOME TO WATCHLIST!</a>
            { currentUser ? <strong> Welcome, {currentUser.attributes.username}!</strong>: ""}
           {/* <a className="nav-link" href="#">Log In</a>
                    OR
            <a className="nav-link" href="#">Sign up!</a> */}
        </div>
    )
}

const mapStateToProps = ({ currentUser })=> {
    return {
        currentUser
    }
}


export default connect(mapStateToProps)(NavBar)