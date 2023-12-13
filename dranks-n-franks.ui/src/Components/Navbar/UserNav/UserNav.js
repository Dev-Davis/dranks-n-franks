import React from 'react'

import {
  NavLink 
} from "react-router-dom";

function UserNav(props) {
  const login = props.login;
  
  return (
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
          to="/favorites"
          style={({ isActive }) => ({
            color: isActive ? "red" : "white",
          })}
        >
          Favorites and More
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
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "red" : "white",
          })}
          onClick={login}
        >
          Log Out
        </NavLink>
      </div>
  )
}

export default UserNav