import React from 'react'
import { FeatureTwo } from '../../components'
import './features.css'

const featuresData = [
  {
    title: 'Motivo 1',
    text: 'Ela é o amor da minha vida, não precisa de mais nada para ser a melhor',
  },
  {
    title: 'Motivo 2',
    text: 'Ela é uma divindade',
  },
  {
    title: 'Motivo 3',
    text: 'Tem o sorriso mais lindo do mundo!!!!',
  },
  {
    title: 'Motivo 4',
    text: 'Rafa tem um poder especial chamado autismo que torna ela muito fofa, ate parece que ela come arco-iris de tão linda',
  },
  {
    title: 'Motivo 5',
    text: 'Precisa de um 5°? Ela é perfeita simplesmente',
  },
]

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="porque">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">Top 5 motivos do porque rafa é perfeita!</h1>
        <p>A mais pura verdade</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index)=> (
          <FeatureTwo title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default Features