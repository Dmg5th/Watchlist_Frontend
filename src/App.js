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
import { Route, Switch, withRouter } from 'react-router-dom'
class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    const { loggedIn } = this.props
    return (
        <div >
          {/* <Switch> */}
          <Navbar />
          { loggedIn ? <Logout/> : null }
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/" render={(props) => loggedIn ? <MyWatchlist {...props}/> : <Home/>} />
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/user_movies" component={MyWatchlist} />
            <MainContainer />
            {/* </Switch> */}
        </div>
     
    );
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser
  })
}


export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));
 