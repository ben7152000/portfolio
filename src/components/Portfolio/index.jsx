import React from 'react'
import './index.css'
import Item from './components/Item'
import { portfolioData } from "../../data"

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {portfolioData.map(({ id, image, title, github, demo }) => {
          return <Item key={id} image={image} title={title} github={github} demo={demo} />
        })}
      </div>
    </section>
  )
}

export default Portfolio
