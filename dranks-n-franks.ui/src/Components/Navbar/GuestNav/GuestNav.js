import React from 'react'

import {
  NavLink 
} from "react-router-dom";

function GuestNav(props) {
  const login = props.login;
  
  return (
    <div>
      <div className="navbar">
        <NavLink
          to="/home"
          style={({ isActive }) => ({
            color: isActive ? "red" : "white",
          })}
        >
          Dranks n Franks
        </NavLink>

        <NavLink
          to="/cart"
          style={({ isActive }) => ({
            color: isActive ? "red" : "white",
          })}
        >
          Cart
        </NavLink>
  
        <NavLink
          to="/home"
          style={({ isActive }) => ({
            color: isActive ? "red" : "white",
          })}
          onClick={login}
        >
          Log In
        </NavLink>
      </div>
    </div>
  )
}

export default GuestNav