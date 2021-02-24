import React from 'react'
import { connect } from 'react-redux'

const Login = (props) => {
    return  (
        <form onSubmit={undefined}>
            <input placeholder="username" value={undefined} name="username" type="text" onChange={undefined} ></input>
            <input placeholder="password" value={undefined} name="password" type="text" onChange={undefined} ></input>
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

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps)(Login)