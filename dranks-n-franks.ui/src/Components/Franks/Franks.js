import React from "react";
import FranksCard from "./FranksCard";

import "./Franks.css";

export default function Franks() {

  const franks = [
    {
      fId: 1,
      name: "Chicago",
      ingredients:
        "An all beef hot dog on a poppyseed bun topped with mustard, sports peppers, and a pickle. You're not in The Chi, but you'd think you are",
      price: 3.99,
      combo: 5.99,
    },
    {
      fId: 2,
      name: "Slaw",
      ingredients:
        "An all beef hot dog on an all american bun topped with homemade coleslaw and mustard for a warm southern experience",
      price: 3.99,
      combo: 5.99,
    },
    {
      fId: 3,
      name: "Nashville Hot",
      ingredients:
        "A chicken hot dog topped with pickles and a signature Nashville Hot Sauce to give you a true Nashville experience",
      price: 3.99,
      combo: 5.99,
    },
  ];

  return (
    <div className="item-container text-center">
      <h3 className="cat-name">Franks</h3>
      {/* <hr /> */}
      <div className="row">
        {franks.map((frank) => (
          <FranksCard key={frank.fId} frank={frank} />
        ))}
      </div>
      <p className="fine-print">
        * All combos with a side and a drink may vary in price *
      </p>
    </div>
  );
}
