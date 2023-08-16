import React from 'react'

import './Navbar.css'

export default function Navbar() {
  return (
    <div className="navbar">
    <ul className="navi-brand">
      <li>Dranks n Franks</li>
    </ul>
    <ul className="navi">
      <li>Favorites</li>
      <li>Cart</li>
      <li>Log In</li>
    </ul>
  </div>
  )
}
