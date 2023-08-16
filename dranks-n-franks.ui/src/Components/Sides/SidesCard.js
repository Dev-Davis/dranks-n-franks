import React from 'react'

import './Sides.css'

export default function SidesCard() {
  return (
    <div className="card-border row">
    <div className="col">
      <div className="name-container">
        <h5>{props.side.name}</h5>
      </div>
      <div className="description-container">{props.side.ingredients}</div>
      <div className="price-container">{props.side.price.toFixed(2)}</div>
      <hr />
      <button className="btn btn-primary" onClick={addSide}>
        Add
      </button>
    </div>
  </div>
  )
}
