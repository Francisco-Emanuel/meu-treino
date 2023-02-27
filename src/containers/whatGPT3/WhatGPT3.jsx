import React from 'react'
import { Feature } from '../../components'
import './whatgpt.css'

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="musicas">
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">Musicas que me lembram você S2 </h1>
      </div>
      <div className="gpt3__whatgpt3-feature">
        <Feature linkMusica="https://open.spotify.com/embed/track/68cPbG7hJnwDW9nPX1uQcX?utm_source=generator"  />
        <Feature linkMusica="https://open.spotify.com/embed/track/6eNRGL6Nkdg7RhJtmbcl0j?utm_source=generator"  />
        <Feature linkMusica="https://open.spotify.com/embed/track/6aVUuHImwSSehzwZjORVYR?utm_source=generator"  />
      </div>
    </div>
  )
}

export default WhatGPT3