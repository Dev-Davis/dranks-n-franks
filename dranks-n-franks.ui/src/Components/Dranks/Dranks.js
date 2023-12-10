import React from "react";
import DranksCard from "./DranksCard";

import "./Dranks.css";

export default function Dranks() {
  const dranks = [
    {
      dId: 1,
      name: "Tahitian Treat",
      small: 0.99,
      regular: 1.99,
      large: 2.99,
    },
    {
      dId: 2,
      name: "Nehi Peach",
      small: 0.99,
      regular: 1.99,
      large: 2.99,
    },
    {
      dId: 3,
      name: "Pepsi",
      small: 0.99,
      regular: 1.99,
      large: 2.99,
    },
    {
      dId: 4,
      name: "Sweet Tea",
      small: 0.99,
      regular: 1.99,
      large: 2.99,
    },
    {
      dId: 5,
      name: "Fruitopia",
      small: 0.99,
      regular: 1.99,
      large: 2.99,
    },
    {
      dId: 6,
      name: "Spring Water",
      small: 0.99,
      regular: 1.99,
      large: 2.99,
    },
  ];

  return (
    <div className="item-container text-center">
      <h3 className="cat-name">Dranks</h3>
      <div className="row">
        {dranks.map((drank) => (
          <DranksCard key={drank.dId} drank={drank} />
        ))}
      </div>
    </div>
  );
}
