import React from 'react';
import './App.css';
import Navbar from './components/NavBar'
import MainContainer from './components/MainContainer'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class App extends React.Component {

  componentDidMount(){
    this.props.getCurrentUser()
  }
   
  render() {
    return (
      <Router>
      <div >
        <Navbar/>
        <MainContainer/>
     </div>
     </Router>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     currentUser: state.loginform
//   }
// }

export default connect(null, { getCurrentUser})(App);
 