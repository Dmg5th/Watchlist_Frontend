import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from "../actions/loginForm.js"
import { login } from "../actions/currentUser.js"
import '../index.css';
import { Card } from 'react-bootstrap';


const Login = ({ loginFormData, updateLoginForm, login, history }) => {

  const handleInputChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...loginFormData,
      [name]: value
    }
    updateLoginForm(updatedFormInfo)
  }

  const handleSubmit = event => {
    event.preventDefault()
    login(loginFormData, history)
  }

  return (
    <Card className="card text-white bg-primary mb-3">
      
        <form className="login-form" onSubmit={handleSubmit}>
          <Card.Title className="card-header"><h1>Log in!</h1></Card.Title>
          <input placeholder="username" value={loginFormData.username} name="username" type="text" onChange={handleInputChange} />
          <input placeholder="password" value={loginFormData.password} name="password" type="text" onChange={handleInputChange} />
          <input type="submit" value="Log In" />
        </form>
      
    </Card>
  )
}

const mapStateToProps = state => {
  return {
    loginFormData: state.loginForm
  }
}

export default connect(mapStateToProps, { updateLoginForm, login } )(Login)