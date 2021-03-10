import React from 'react';
//CSS
import './App.css';
import './lib/font-awesome/css/all.min.css'
//Components
import Navbar from './components/NavBar'
import Signup from './components/SignUp'
import Login from './components/Login'
import Logout from './components/Logout'
import MyWatchlist from './components/MyWatchlist'
import Watched from './components/movies/Watched'
import Search from './components/movies/Search'
import Home from './components/Home'
//Redux
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
         
          <Navbar  loggedIn={loggedIn}/>
            <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
      
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/user_movies" component={MyWatchlist} />
            <Route exact path="/watched" component={Watched}/>
            <Route exact path="/search" component={Search}/>
            </Switch> 
           
           
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
 