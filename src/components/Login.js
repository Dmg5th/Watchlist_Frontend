import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from '../actions/loginForm.js'
import { logIn } from '../actions/currentUser'

const Login = ({ loginFormData, updateLoginForm, logIn }) => {
    
     const handleChange = (e) => {
        const { name, value } = e.target 
        const formData = {
            ...loginFormData, 
           [name]: value
        }
        updateLoginForm(formData)
    }

    const handleSubmit = e => {
        e.preventDefault(); 
        logIn(loginFormData)
    }
    return  (
        <form onSubmit={handleSubmit}>
            <input placeholder="username" value={loginFormData.username} name="username" type="text" onChange={handleChange} ></input>
            <input placeholder="password" value={loginFormData.password} name="password" type="text" onChange={handleChange} ></input>
            <input type="submit" value="Login"></input>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        loginFormData: state.loginForm
    }
}



export default connect(mapStateToProps, { updateLoginForm, logIn}) (Login)