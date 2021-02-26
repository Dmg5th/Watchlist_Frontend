import React from 'react';
import './App.css';
import Navbar from './components/NavBar'
import MainContainer from './components/MainContainer'
import Login from './components/Login'
import Logout from './components/Logout'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <div >
        <Navbar />
        <Router>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/logout" component={Logout}/>
          <MainContainer />
        </Router>
      </div>
    );
  }
}


export default connect(null, { getCurrentUser})(App);
 