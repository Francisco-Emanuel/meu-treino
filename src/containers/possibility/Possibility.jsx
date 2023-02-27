import React from 'react'
import './possibility.css'
import rafaComendo from '../../assets/rafacomendo.png'

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={rafaComendo} alt="posibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>A mais pura verdade</h4>
        <h1 className="gradient__text">O amor da minha vida</h1>
        <p>Você é o amor da minha vida, A razão do meu viver… O que te fere Me corta, O que te dói Me sangra. Se tá feliz, tô sorrindo, Se tá em paz Eu tô bem.</p>
        <h4>A mais pura verdade</h4>
      </div>
    </div>
  )
}

export default Possibility