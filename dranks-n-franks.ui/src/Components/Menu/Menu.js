import React from 'react'

import './Menu.css'

export default function Menu() {
  return (
    <div className="menu">
    <h3>Menu</h3>
    <div className="container-fluid>">
      <div className="row">
        <div className="col franks-box">
          <Franks />
          <p className="fine-print">
            All combos some with a side and a drink (prices may vary)
          </p>
        </div>
      </div>
    </div>
    <div className="container-fluid">
      <div className="row">
        <div className="col-4 sides-box">
          <Sides />
        </div>
        <div className="col-4 offset-4 dranks-box">
          <Dranks />
        </div>
      </div>
    </div>
  </div>
  )
}
