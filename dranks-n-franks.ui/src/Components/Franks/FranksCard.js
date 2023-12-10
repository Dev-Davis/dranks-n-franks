import React from "react";

import "./Franks.css";

export default function FranksCard(props) {
  const frank = props.frank;
  // let cart = [];

  const addFrank = (e) => {};

  const addCombo = (e) => {
    e.preventDefault();
  };

  return (
    <div className="col-4">
      <div className="card-box">
        <h5 className="item-title">
          <span className="item">{props.frank.name} Dogg</span>
        </h5>
        <p className="description">{frank.ingredients}</p>
        <p className="price">${frank.price.toFixed(2)} + tax</p>
        <div className="btn-container">
          <button className="btn btn-danger add-btn bttn" onClick={addFrank}>
            {frank.name} Dogg Only
          </button>
        </div>
        <div className="btn-container">
          <button className="btn btn-danger combo-btn bttn" onClick={addCombo}>
            Combo
          </button>
        </div>
      </div>
    </div>
  );
}
