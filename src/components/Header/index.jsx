import React from 'react'
import './index.css'
import CTA from './components/CTA'
import ME from '../../assets/me.png'
import Socials from './components/Socials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Angelo Chou</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <Socials />

        <div className='me'>
          <img src={ME} alt="me"/>
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
