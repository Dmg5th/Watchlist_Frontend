import React from 'react';
import './App.css';
import Navbar from './components/NavBar'
import Login from './components/Login'
import Logout from './components/Logout'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser'

class App extends React.Component {
  
  render() {
    return (
      <div >
        <Navbar/>
     </div>
    );
  }
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps, { getCurrentUser})(App);
 