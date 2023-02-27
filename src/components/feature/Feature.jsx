import React from 'react'
import './feature.css'

const Feature = ({ linkMusica, title }) => {
  return (
    <div className="gpt3__features-container__feature">
      <div className="gpt3__features-container__feature-title">
        <div/>
        <iframe src={linkMusica} title={title} width="100%" height="352" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
      <div className="gpt3__features-container_feature-text">
        
      </div>
    </div>
  )
}

export default Feature