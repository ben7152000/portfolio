import React from 'react'
import './index.css'
import Item from './components/Item'
import { serviceData } from "../../data"

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        {serviceData.map(({ title, texts }, index) => {
          return (
            <article className='service' key={index}>
              <div className='service__head'>
                <h3>{title}</h3>
              </div>
              <ul className='service__list'>
                {texts.map((text) => {
                  return <Item key={text} text={text} />
                })}
              </ul>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Services
