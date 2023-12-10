import React from "react";
import {
  NavLink 
} from "react-router-dom";

import "./Navbar.css";

export default function Navbar() {
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
        to="/login"
        style={({ isActive }) => ({
          color: isActive ? "red" : "white",
        })}
      >
        Log Out
      </NavLink>
    </div>
  );
}
