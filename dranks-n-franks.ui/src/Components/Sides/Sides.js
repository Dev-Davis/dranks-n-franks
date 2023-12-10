import React from "react";
import SidesCard from "./SidesCard";

import "./Sides.css";

export default function Sides() {
  const sides = [
    {
      sId: 1,
      name: "Fries",
      description: "In house cut potatoes, fried and sprinkled with sea salt",
      ingredients: "...",
      price: 2.49,
    },
    {
      sId: 2,
      name: "Chips",
      description: "Your favorite bag of chips to go along side your hot dawg",
      ingredients: "...",
      price: 1.0,
    },
    {
      sId: 3,
      name: "Nashville Hot Fries",
      description: "Our house cut fries with topped with our house made authentic Nashville Spice",
      ingredients: "...",
      price: 2.99,
    },
  ];

  return (
    <div className="item-container text-center">
      <h3 className="cat-name">Sides</h3>
      {/* <hr /> */}
      <div className="row">
        {sides.map((side) => (
          <SidesCard key={side.sId} side={side} />
        ))}
      </div>
    </div>
  );
}
