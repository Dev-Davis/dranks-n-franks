import React from "react";

import "./Dranks.css";

export default function DranksCard(props) {
  const drank = props.drank;

  const addDrank = () => {
    console.log(`${props.drank.name} was added`);
  };

  return (
    <div className="col">
      <div className="card-box">
        <h5 className="item-title">
          <span className="item">{drank.name}</span>
        </h5>
        <div className="drink-size-box">
          <input
            class="form-check-input"
            type="radio"
            value=""
            id="smallDrank"
            name="dranks"
          />
          <label class="form-check-label" for="flexCheckDefault">
            &nbsp;&nbsp;&nbsp; Small
          </label>

          <br></br>

          <input
            class="form-check-input"
            type="radio"
            value=""
            id="regularDrank"
            name="dranks"
          />
          <label class="form-check-label" for="flexCheckDefault">
            &nbsp;&nbsp;&nbsp; Regular
          </label>

          <br></br>

          <input
            class="form-check-input"
            type="radio"
            value="drank"
            id="largeDrank"
            name="dranks"
          />
          <label class="form-check-label" for="flexCheckDefault">
            &nbsp;&nbsp;&nbsp; Large
          </label>
        </div>
        <div className="btn-container">
          <button className="btn btn-danger add-btn bttn" onClick={addDrank}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
