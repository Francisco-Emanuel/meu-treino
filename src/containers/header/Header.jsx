import React from 'react'
import './header.css'
import heart from '../../assets/heart.png'

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Para o amor da minha vida!</h1>
        <p>Vou provar para você que fomos feitos um para o outro, tudo isso através desse site onde vou explicar como rafa é incrivel</p>
      </div>
      <div className="gpt3__header-image">
          <img src={heart} alt="ai"  />
      </div>
    </div>
  )
}

export default Header