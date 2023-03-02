import React from 'react'
import './index.css'
import { skillData } from "../../data/data"
import { BsPatchCheckFill } from "react-icons/bs"

const List = ({ title, description }) => {
  return (
    <article className='experience__details'>
      <BsPatchCheckFill className='experience__details--icon' />
      <div>
        <h4>{title}</h4>
        <small className='text-light'>{description}</small>
      </div>
    </article>
  )
}

const Experience = () => {
  const { fronted, backed } = skillData

  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            {fronted.map(({ id, title, description }) => {
              return <List key={id} title={title} description={description} />
            })}
          </div>
        </div>

        <div className='experience__backed'>
          <h3>Backed Development</h3>
          <div className='experience__content'>
            {backed.map(({ id, title, description }) => {
              return <List key={id} title={title} description={description} />
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
