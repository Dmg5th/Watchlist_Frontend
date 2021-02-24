import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from '../actions/loginForm.js'

const Login = ({ loginForm, updateLoginForm }) => {
    const handleChange = (e) => {
        const { name, value } = e.target 
        const formData = {
            ...loginForm, 
           [name]: value
        }
        updateLoginForm(formData)
    }
    return  (
        <form onSubmit={undefined}>
            <input placeholder="username" value={loginForm.username} name="username" type="text" onChange={handleChange} ></input>
            <input placeholder="password" value={loginForm.password} name="password" type="text" onChange={handleChange} ></input>
            <input type="submit" value="Login"></input>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        loginForm: state.loginForm
    }
}



export default connect(mapStateToProps, { updateLoginForm}) (Login)