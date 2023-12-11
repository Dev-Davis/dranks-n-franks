import React from "react";
import {
  NavLink 
} from "react-router-dom";

import "./Navbar.css";

export default function Navbar(props) {

  console.log(props);
  
  let authed = props.authed;
  let login = props.login;

  const UserNav = () => {
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
          onClick={login}
        >
          Log Out
        </NavLink>
      </div>
    );
  }

  const GuestNav = () => {
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
  
        {/* <NavLink
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
        </NavLink> */}
  
        <NavLink
          to="/login"
          style={({ isActive }) => ({
            color: isActive ? "red" : "white",
          })}
          onClick={login}
        >
          Log In
        </NavLink>
      </div>
    );
  }

  
    

  return (
    <div className="loggedNav">
      {authed ? <UserNav /> : <GuestNav />}
    </div>
  )
  //   <div className="navbar">
  //     <NavLink
  //       to="/home"
  //       style={({ isActive }) => ({
  //         color: isActive ? "red" : "white",
  //       })}
  //     >
  //       Dranks n Franks
  //     </NavLink>

  //     <NavLink
  //       to="/favorites"
  //       style={({ isActive }) => ({
  //         color: isActive ? "red" : "white",
  //       })}
  //     >
  //       Favorites and More
  //     </NavLink>

  //     <NavLink
  //       to="/cart"
  //       style={({ isActive }) => ({
  //         color: isActive ? "red" : "white",
  //       })}
  //     >
  //       Cart
  //     </NavLink>

  //     <NavLink
  //       to="/login"
  //       style={({ isActive }) => ({
  //         color: isActive ? "red" : "white",
  //       })}
  //     >
  //       Log Out
  //     </NavLink>
  //   </div>
  // );
}
