import React from 'react';
import './App.css';
import Navbar from './components/NavBar'
import MainContainer from './components/MainContainer'
import Signup from './components/SignUp'
import Login from './components/Login'
import Logout from './components/Logout'
import MyWatchlist from './components/MyWatchlist'
import Home from './components/Home'
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
      <Router>
        <div >
          <Navbar />
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/user_movies" component={MyWatchlist} />
            <MainContainer />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser
  })
}


export default connect(mapStateToProps, { getCurrentUser})(App);
 