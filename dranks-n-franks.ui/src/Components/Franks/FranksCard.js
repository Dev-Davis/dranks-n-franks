import React from 'react'

import './Franks.css'

export default function FranksCard() {
  return (
    <div className="card-border col">
    <div className="name-container">
      <h5>{props.frank.name} Dogg</h5>
    </div>
    <div className="description-container">{props.frank.ingredients}</div>
    <div className="price-container">{props.frank.price.toFixed(2)}</div>
    <hr />
    <button className="btn btn-primary" onClick={addFrank}>
      {props.frank.name} Dogg Only
    </button>
    <hr />
    <button className="btn btn-primary food-btn" onClick={addCombo}>
      Combo
    </button>
  </div>
  )
}
