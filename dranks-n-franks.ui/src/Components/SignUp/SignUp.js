import React from "react";

import './SignUp.css'

import {
  NavLink,
} from "react-router-dom";

function SignUp() {
  return (
    <div>
      <div className="container signup-box text-center">
        <div className="row">
          <div className="col">
            <form className="form-div">
              <h2 className="signup-text">Sign Up</h2>
              <p>Username</p>
              <input />
              <p>Email</p>
              <input />
              <p>Password</p>
              <input />
              <p>Confirm Password</p>
              <input />
            </form>
            <p>Already a customer?</p>
            <br></br>
            <NavLink to="/login">Login</NavLink>
            <p>or</p>
            <NavLink to="/home">Continue As Guest</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
