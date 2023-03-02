import React from 'react'
import './index.css'
import { serviceData } from "../../data/data"
import { BsCheckLg } from "react-icons/bs"

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        {serviceData.map(({ id, title, texts }) => {
          return (
            <article className='service' key={id}>
              <div className='service__head'>
                <h3>{title}</h3>
              </div>
              <ul className='service__list'>
                {texts.map((text, index) => {
                  return (
                    <li key={index}>
                      <BsCheckLg className='service__list--icon' />
                      <p>{text}</p>
                    </li>
                  )
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
