import React from "react";

import {
  // BrowserRouter,
  // Routes,
  // Route,
  NavLink,
} from "react-router-dom";

import "./Login.css";

function Login() {
  return (
    <div className="login">
      <h1 className="page-title">Dranks n Franks</h1>
      <br></br>
      <div className="container login-box text-center">
        <div className="row">
          <div className="col">
            <form className="form-div">
              <h2>Login</h2>
              <p>Username</p>
              <input />
              <p>Password</p>
              <input />
            </form>
            <button className="btn btn-danger bttn">
              <NavLink to="/">Join Now!</NavLink>
            </button>
          </div>
        </div>
      </div>
      <div className="container-fluid login-display-div">
        <div className="row">
          <div className="col">
            <img
              src="https://img.freepik.com/premium-photo/hot-dog-with-mustard-ketchup-black-background-with-smoke_856795-13128.jpg?size=626&ext=jpg"
              className="dogg-avi-login"
              alt="animated hot dog"
            />
            <img
              src="https://img.freepik.com/premium-photo/hotdog-with-lettuce-tomato-lettuce-is-black-background_843762-554.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699747200&semt=ais"
              className="dogg-avi-login"
              alt="animated hot dog"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMUbcboge2mdTWfqRB940Ry6taj57FhI81vx7-Mu1a-4IB1_guUXsdANjbLCYvHTR0sOk&usqp=CAU"
              className="dogg-avi-login"
              alt="animated hot dog"
            />
            <img
              src="https://img.freepik.com/premium-photo/product-shots-capture-excitement-energy_670382-96424.jpg"
              className="dogg-avi-login"
              alt="animated hot dog"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
