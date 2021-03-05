import React from 'react'
import { connect } from 'react-redux'
import { updateSignupForm} from "../actions/signupForm"
import { signup } from "../actions/currentUser"


const Signup = ({ signupFormData, updateSignupForm, signup, history}) => {

  const handleInputChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...signupFormData,
      [name]: value
    }
    updateSignupForm(updatedFormInfo)
  }

  const handleSubmit = event => {
    event.preventDefault()
    signup(signupFormData, history)
  }

  return (
    <div class="jumbotron">
        <h1 class="display-3">Signup for Watchlist!</h1>
      <form onSubmit={handleSubmit}>
        
        <div className="form-group">
          <label className="col-form-label col-form-label-lg"></label>
          <input className="form-control form-control-lg" placeholder="name" value={signupFormData.name} name="name" type="text" onChange={handleInputChange} />
        </div>

        <div class="form-group">
          <input placeholder="username" value={signupFormData.username} name="username" type="text" onChange={handleInputChange} />
        </div>

        <div class="form-group">
          <input placeholder="password" value={signupFormData.password} name="password" type="text" onChange={handleInputChange} />
          <input className="btn btn-primary btn-lg" type="submit" value="Sign Up" />
        </div>
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    signupFormData: state.signupForm
  }
}

export default connect(mapStateToProps, { updateSignupForm, signup } )(Signup)