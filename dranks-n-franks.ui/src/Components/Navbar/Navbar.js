import React from "react";
import { 
  // BrowserRouter, 
  // Routes, 
  // Route, 
  NavLink 
} from "react-router-dom";

import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <NavLink
        to="/"
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
        Favorites
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
        Log In
      </NavLink>
    </div>
  );
}
