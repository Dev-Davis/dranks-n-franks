import React from "react";
import Dranks from "../Dranks/Dranks";
import Franks from "../Franks/Franks";
import Sides from "../Sides/Sides";

import "./Menu.css";

export default function Menu() {
  return (
    <div className="menu">
      <div className="container-fluid">
        <Franks />
      </div>
      <p className="fine-print">
        * All combos some a side and a drink may vary in price *
      </p>
      <hr className="menu-sep" />
      <div className="container-fluid">
        <Sides />
      </div>
      <hr className="menu-sep" />
      <div className="container-fluid">
        <Dranks />
      </div>
    </div>
  );
}
