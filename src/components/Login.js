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
          <h1 className="display-3 login_header">Log in!</h1>
          <input placeholder="username" value={loginFormData.username} name="username" type="text" onChange={handleInputChange} />
          <input placeholder="password" value={loginFormData.password} name="password" type="text" onChange={handleInputChange} />
          <button className="btn btn-success login_button" type="submit" value="Log In">Submit </button>
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