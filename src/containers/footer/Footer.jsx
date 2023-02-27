import React from 'react'
import './footer.css'
import logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
     
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>© 2022-2023 rafa&xico</p>
      </div>
    </div>
  )
}

export default Footer