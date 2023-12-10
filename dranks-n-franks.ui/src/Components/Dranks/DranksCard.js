import React from "react";

import "./Dranks.css";

export default function DranksCard(props) {
  const drank = props.drank;

  const addDrank = () => {
    console.log(`${props.drank.name} was added`);
  };

  return (
    <div className="col-4">
      <div className="card-box">
        <h5 className="item-title">
          <span className="item">{drank.name}</span>
        </h5>
        <div className="btn-container">
          <button className="btn btn-danger add-btn bttn" onClick={addDrank}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
