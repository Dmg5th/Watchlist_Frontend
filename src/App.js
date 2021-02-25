import React from 'react';
import './App.css';
import Navbar from './components/NavBar'
import Login from './components/Login'
import Logout from './components/Logout'
import MainContainer from './components/MainContainer'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser'

class App extends React.Component {

  componentDidMount(){
    this.props.getCurrentUser()
  }
  
  render() {
    return (
      <div >
        <Navbar/>
        <MainContainer/>
     </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     currentUser: state.loginform
//   }
// }

export default connect(null, { getCurrentUser})(App);
 