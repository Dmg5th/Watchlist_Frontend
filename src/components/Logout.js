import React from 'react'
import { connect } from 'react-redux'
import { logout } from "../actions/currentUser.js"


const Logout = ({ logout, history }) => {
  return (
    <form onSubmit={ () => logout(history)}>
      <input type="submit" className="nav-link" value="Log Out"/>
    </form>


  )
}

export default connect(null, { logout } )(Logout)