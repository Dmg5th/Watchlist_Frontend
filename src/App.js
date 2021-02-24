import React from 'react';
import './App.css';
import LogIn from './components/Login'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }
   
  render() {
    return (
      <div >
        <LogIn/>

      </div>
    );
  }
}

export default connect(null, { getCurrentUser})(App);
 