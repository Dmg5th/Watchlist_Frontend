import React from 'react'
import { connect } from 'react-redux'
import { updateSignupForm} from "../actions/signupForm"
import { signup } from "../actions/currentUser"
import '../index.css';
import { Card } from 'react-bootstrap';


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
    <div >
      <Card className="card text-white bg-primary mb-3">
       
      <form className="signup_form" onSubmit={handleSubmit}>
      <h1 className="display-3">Signup for Watchlist!</h1><br></br>
        <div className="form-group">
          <input  placeholder="name" value={signupFormData.name} name="name" type="text" onChange={handleInputChange} />
        </div>

        <div class="form-group">
          <input placeholder="username" value={signupFormData.username} name="username" type="text" onChange={handleInputChange} />
        </div>

        <div class="form-group">
          <input placeholder="password" value={signupFormData.password} name="password" type="text" onChange={handleInputChange}/> <br></br> 
          <button className="btn btn-success form_button" type="submit" value="Sign Up">Submit </button> 
        </div>
       
      </form>

      </Card>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    signupFormData: state.signupForm
  }
}

export default connect(mapStateToProps, { updateSignupForm, signup } )(Signup)