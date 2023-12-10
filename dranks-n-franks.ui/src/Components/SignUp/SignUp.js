import React from "react";

import {
  NavLink,
} from "react-router-dom";

function SignUp() {
  return (
    <div>
      <div className="container login-box text-center">
        <div className="row">
          <div className="col">
            <form className="form-div">
              <h2>Sign Up</h2>
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
