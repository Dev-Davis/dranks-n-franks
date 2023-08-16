import React from "react";

import './Sides.css'

export default function Sides() {
  return (
    <div className="sides text-center container">
      <h3>Sides</h3>
      {sides.map((side) => (
        <SidesCard key={side.sId} side={side} />
      ))}
    </div>
  );
}
