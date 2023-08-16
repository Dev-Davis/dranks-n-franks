import React from 'react'

import './Dranks.css'

export default function Dranks() {
  return (
    <div className="dranks text-center">
    <h3>Dranks</h3>
    {dranks.map((drank) => (
      <DranksCard key={drank.dId} drank={drank} />
    ))}
  </div>
  )
}
