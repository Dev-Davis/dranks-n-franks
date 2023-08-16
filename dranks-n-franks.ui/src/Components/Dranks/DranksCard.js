import React from "react";

import './Dranks.css'

export default function DranksCard() {
  return (
    <div className="card-border">
      <div className="name-container">
        <h5>{props.drank.name}</h5>
      </div>
      <div className="price-container">
        Small: {props.drank.small.toFixed(2)}
      </div>
      <div className="price-container">
        Regular: {props.drank.regular.toFixed(2)}
      </div>
      <div className="price-container">
        Large: {props.drank.large.toFixed(2)}
      </div>
      <hr />
      <button className="btn btn-primary" onClick={addDrank}>
        Add
      </button>
    </div>
  );
}
