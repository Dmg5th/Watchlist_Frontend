import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from '../actions/loginForm.js'

const Login = ({ username, password, updateLoginForm }) => {
    const handleChange = (e) => {
        const { name, value } = e.target 
        const formData = {
            name,
            value
        }
        updateLoginForm(formData)
    }
    return  (
        <form onSubmit={undefined}>
            <input placeholder="username" value={username} name="password" type="text" onChange={handleChange} ></input>
            <input placeholder="password" value={password} name="username" type="text" onChange={handleChange} ></input>
            <input type="submit" value="Login"></input>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        username: state.loginForm.username,
        password: state.loginForm.password
    }
}



export default connect(mapStateToProps, { updateLoginForm}) (Login)