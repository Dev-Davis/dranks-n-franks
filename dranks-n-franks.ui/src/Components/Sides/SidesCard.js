import React from "react";

import "./Sides.css";

export default function SidesCard(props) {
  const side = props.side;

  const addSide = (item) => {
    // let cart = {};

    console.log(props.side);
    // cart.push(item);
  };

  return (
    <div className="col">
      <div className="card-box">
        <h5 className="item-title">
          <span className="item">{side.name}</span>
        </h5>
        <p>{side.description}</p>
        <p className="price">{side.price.toFixed(2)}</p>
        <div className="btn-container">
          <button className="btn btn-danger add-btn bttn" onClick={addSide}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
