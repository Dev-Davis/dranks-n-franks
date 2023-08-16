import React from 'react'

import './Franks.css'

export default function Franks() {
  return (
    <div className="franks text-center">
    <h3>Franks</h3>
    <div className="row">
      {franks.map((frank) => (
        <FranksCard key={frank.fId} frank={frank} />
      ))}
    </div>
  </div>
  )
}
