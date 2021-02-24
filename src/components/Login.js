import React from 'react'

const Login = () => {
    return  (
        <form onSubmit={undefined}>
            <input placeholder="username" value={undefined} name="username" type="text" onChange={undefined} ></input>
            <input placeholder="password" value={undefined} name="password" type="text" onChange={undefined} ></input>
            <input type="submit" value="Login"></input>
        </form>
    )
}

export default Login