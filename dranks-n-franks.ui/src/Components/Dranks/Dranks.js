import React from "react";
import DranksCard from "./DranksCard";

import "./Dranks.css";

export default function Dranks() {
  const drankPrice = {
    small: 0.99,
    regular: 1.99,
    large: 2.99,
  };

  const dranks = [
    {
      dId: 1,
      name: "Tahitian Treat",
    },
    {
      dId: 2,
      name: "Nehi Peach",
    },
    {
      dId: 3,
      name: "Pepsi",
    },
    {
      dId: 4,
      name: "Sweet Tea",
    },
    {
      dId: 5,
      name: "Fruitopia",
    },
    {
      dId: 6,
      name: "Spring Water",
    },
  ];

  return (
    <div className="item-container text-center">
      <h3 className="cat-name">Dranks</h3>
      <div className="price-div">
        <p className="price">Small: ${drankPrice.small.toFixed(2)} + tax</p>
        <p className="price">Regular: ${drankPrice.regular.toFixed(2)} + tax</p>
        <p className="price">Large: ${drankPrice.large.toFixed(2)} + tax</p>
        <p>* Choose a drank size below *</p>
      </div>
      <div className="row">
        {dranks.map((drank) => (
          <DranksCard key={drank.dId} drank={drank} />
        ))}
      </div>
    </div>
  );
}
